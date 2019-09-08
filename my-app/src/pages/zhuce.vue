<template>
    <div class="zhuces">
        <h1>欢迎加入豆瓣</h1>
        <input type="text" placeholder="邮箱" class="kuang" >
        <br>
        <input type="text" placeholder="密码" class="kuang" v-model="pass">
        <br>
        <input type="text" placeholder="用户" class="kuang" v-model="name">
        <br>
        <input type="submit" value="立即注册" @click="func()">
        <br>
        <span>点击「注册」代表你已阅读并同意用户使用协议</span>
        <br>
        <a href="#">下载豆瓣App</a>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"",
            pass:''
        }
    },
    methods:{
        func(){
            this.axios({
                method:"get",
                url:"http://localhost:3000/zhuce",
                params:{
                    name:this.name,
                    pass:this.pass,
                }
            }).then((ok)=>{
                alert(ok.data.mes)
            },(err)=>{
                alert("注册失败")
            })
        }
    }
}
</script>
<style scoped>
    .zhuces{
        text-align:center;
    }
    .zhuces h1{
        color:green;
        margin-bottom:0.4rem;
        padding-top:0.5rem;
        font-weight:100;
    }
    .kuang{
        width:3.45rem;
        height:44px;
        text-indent:10px;
    }
    input:nth-of-type(4){
        width:3.48rem;
        height:45px;
        margin-left:-5px;
        margin-top:0.3rem;
        color:white;
        background:green;
        border:none;
        border-radius:3px;
    }
    span{
        color:gray;
        font-size:0.14rem;
    }
    a{
        color:green;
        font-size:0.16rem;
    }
</style>