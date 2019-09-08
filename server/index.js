var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var uE=bodyParser.urlencoded({extended:false});
var crypto=require("crypto");
var mongoose=require("mongoose");
//引用的文件

//解决跨域
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    
     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
});

//定义要往数据库传送的数据的格式
var dbCollection=mongoose.model("chuichuis",{
    name:String,
    pass:String
});

//得到前台发送的数据用get方式进行注册
app.get("/zhuce",function(req,res){
    //得到账户密码
    var name=req.query.name;
    var pass=req.query.pass;
    console.log(name +"........."+pass);
    //对密码进行加密
    var newpass=crypto.createHash('md5').update(pass).digest('hex');
    console.log(newpass);

    //连接数据库进行传值
    mongoose.connect("mongodb://localhost:27017/aa",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库连接失败"+err);
        }else{
            console.log("数据库连接成功");

            //设置存入的数据
            var userdemo=new dbCollection({
                name:name,
                pass:newpass
            });
            //放入数据库
            userdemo.save().then((ok)=>{
                res.send({mes:"注册成功",stasus:200,linkid:1})
            },(err)=>{
                res.send({mes:"注册失败",status:500,linkid:0})
            });
        }
    })

});

//得到登录页面的数据进行登录
app.post("/login",uE,function(req,res){
    //先拿到账号密码
    var name=req.body.name;
    var pass=req.body.pass;
    console.log(name +"........."+pass);
    //对加密的密码进行解析
    var newpass=crypto.createHash('md5').update(pass).digest('hex');

    mongoose.connect("mongodb://localhost:27017/aa",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库连接失败"+err);
        }else{
            console.log("数据库连接成功");

            dbCollection.find({name:name,pass:newpass}).then((ok)=>{
                console.log(ok);
                if(ok.length>0){
                    res.send({mes:"登录成功",status:200,linkid:2});
                }else if(ok.length==0){
                    res.send({mes:"登陆失败",status:200,linkid:3});
                }
            },(err)=>{
                res.send({mes:"连接超时",status:500,linkid:4});
            })
        }
    });
})
app.listen(3000);