<template>
    <div>
        <div class="tou">
           <span @click="funb()">取消</span>
           <span>登录豆瓣</span>
        </div>
        <div class="denglu">
            <input type="text" placeholder="账户" class="kuang" v-model="name">
            <br>
            <input type="password" placeholder="密码" class="kuang" v-model="pass">
            <br>
            <input type="submit" value="登录" @click="funa()">
        </div>
        <div class="wz1">
            <a href="#">使用其他方式登录</a> <span>&</span><a href="#">找回密码</a>
        </div>
        <div class="wz2">
            <a href="#">注册豆瓣账号</a><span></span><a href="#">下载豆瓣App</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"",
            pass:""
        }
    },
    methods:{
       funa(){
            var param=new URLSearchParams();
            param.append("name",this.name);
             param.append("pass",this.pass);
             console.log(this.name+"----"+this.pass);
           this.axios({
               method:"post",
               url:"http://localhost:3000/login",
               data:param
           }).then((ok)=>{
               console.log(ok);
               alert(ok.data.mes);
           },(err)=>{
               alert("登陆失败");
           })
       },
       funb(){
           this.$router.go(-1);
       } 
    }
}
</script>
<style scoped>
    .tou{
        padding-bottom:10px;
        border-bottom:1px solid gray;
        margin-bottom:.2rem;
    }
    .tou span:nth-of-type(1){
        font-size:0.16rem;
        color:green;
        margin-left:10px;
    }
    .tou span:nth-of-type(2){
        display: inline-block;
        font-size:0.2rem;
       font-weight:600;
       margin-left:1rem;
    }
    .denglu{
        text-align:center;
    }
    .kuang{
        width:2.3rem;
        height:0.25rem;
        margin-top:10px;
         border-radius:5px;
          border:1px solid gray;
          outline:none;
          text-indent:10px;
          
    }
    .denglu input:nth-of-type(3){
        background:#17aa52;
        color:white;
        border:none;
        border-radius:5px;
         width:2.35rem;
        height:0.25rem;
        margin-left:-5px;
          outline:none;
    }
    .wz1{
        text-align: center;
    }
    .wz1 a{
        font-size: 0.14rem;
        color:gray;
    }
    .wz2{
       text-align: center; 
    }
    .wz2 a{
        font-size: 0.14rem;
        color:green;
    }
    span{
        margin:0 5px;
    }
</style>