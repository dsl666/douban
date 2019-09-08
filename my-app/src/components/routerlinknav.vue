<template>
    <div class="container con">
        <span class="spans"><router-link to="/home">豆瓣</router-link></span>
        <div class="conCon">
        <router-link to="/dianying">电影</router-link>
        <router-link to="/tushu">图书</router-link>
        <router-link to="/guangbo">广播</router-link>
        <router-link to="/xiaozu">小组</router-link>
        <router-link to="/faxian"><span class="el-icon-s-unfold" id="iconspan"></span></router-link>
        </div>    
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#iconspan{
    font-size:0.18rem;
}
.con{
    width:100%;
    height:0.53rem;
    line-height:0.5rem;
    border-bottom:1px solid gray;
    position: fixed;
    top:0px;
    left:0px;
    background:white;
}
   
    .spans a{
        font-size:0.25rem;
        color:green;
        font-weight:600;
    }
    
 .conCon a:nth-of-type(1){
        color:red;
    }
   .conCon a:nth-of-type(2){
        color:yellow;
    }
   .conCon a:nth-of-type(3){
        color:orange;
    }
   .conCon a:nth-of-type(4){
        color:skyblue;
    }
    .con .spans{
        float:left;
    }
    .con>.conCon{
        float:right;
        font-size:0.14rem;   
    }
    a{
          margin-left:0.1rem;
    }
    .conCon span{
        color:green;
    }
</style>