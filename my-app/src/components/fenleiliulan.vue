<template>
    <div>
     
    <h3>分类浏览</h3>
    <ul>
        <li v-for="(v,i) in wzfenleiliulan" :key="i"><router-link to="/">{{v.wz}}</router-link><span>&gt;</span></li>
        <!-- <li><router-link to="/">悬疑</router-link><span>&gt;</span></li>
        <li><router-link to="/">古装</router-link><span>&gt;</span></li>
        <li><router-link to="/">爱情</router-link><span>&gt;</span></li> -->
        
    </ul>
   
    </div>
</template>

<script>

export default {
    // props:["wzfenleiliulan"]
    props:{
       wzfenleiliulan:{
           type:Array,
           required:true
       } 
    }
}
</script>
<style scoped>
    h3{
        padding:0.1rem 0;
    }
    ul{
        display:flex;
        flex-wrap:wrap;
       
    }
    ul>li{
        width:50%;
        height:0.42rem;
        border-top:1px solid gray;
    }
    ul>li:nth-of-type(2n-1){
          border-right:1px solid gray;
           box-sizing: border-box;
    }
    ul>li>a{
        font-size:0.16rem;
        color:green;

    }
    ul>li>span{
        float: right;
    }
    li>span{
        margin-right:0.1rem;
    }
    ul>li:nth-of-type(2n){     
        text-indent:0.1rem;      
    }
</style>