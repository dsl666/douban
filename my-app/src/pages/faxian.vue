<template>
    <div>
        <div class="con">
            <div class="tittle container">
                <span @click="fun()">关闭</span>
                 <input type="text">
            </div> 
        </div> 
        

        <div class="container list">
            <ul>
                <li v-for="(v,i) in lists" :key="i"><router-link to="/home"><span :style="{color:v.listcolor}">{{v.name}}</span><b>{{v.xq}}</b></router-link></li>
               
            </ul>    
        </div> 

        <div class="bottomxia">
            <ol>
                <li><router-link to="/zhuce">注册账号</router-link></li>
                 <li><router-link to="/login">登录豆瓣</router-link></li>
                  <li><router-link to="/home">使用桌面版</router-link></li>
                   <li><router-link to="/home">使用豆瓣APP</router-link></li>
            </ol>
        </div>          
    </div>
</template>
<script>
export default {
    methods:{
        fun(){
           this.$router.go(-1); 
        }
    },
    data(){
        return{
            lists:[
                {name:"电影",xq:"影院热映",listcolor:"red"},
                {name:"电视",xq:"正在热播",listcolor:"blue"},
                {name:"图书",xq:"畅销排行",listcolor:"brown"},
                {name:"同城",xq:"周末活动",listcolor:"red"},
                {name:"小组",xq:"志趣相投",listcolor:"skyblue"},
                {name:"音乐",xq:"新碟榜",listcolor:"orange"},
                {name:"阅读",xq:"电子书",listcolor:"brown"},
                {name:"游戏",xq:"虚拟世界",listcolor:"blue"},
                {name:"应用",xq:"玩手机",listcolor:"blue"},
                {name:"东西",xq:"心爱之物",listcolor:"red"},
                {name:"FM",xq:"红心歌单",listcolor:"green"},
                {name:"市集",xq:"购买原创",listcolor:"skyblue"}
            ]
        }
    }
}
</script>
<style scoped>
    .tittle{
        height:0.5rem;
        display:flex;
        justify-content:space-between;
         line-height:0.5rem;      
    }
    .con{
 border-bottom:1px solid gray;
    }
    input{
        width:2.8rem;
        height:0.32rem;
      margin-top:0.1rem;
    }
    .tittle>span{
        font-size:0.16rem;
        color:green;
    }
    ul{
         display:flex;
         flex-wrap:wrap;
    }
    ul>li{
        width:33.33%;
        /* background:pink; */
        text-align:center;
        margin-top:0.3rem;
       
    }
    ul>li>span{
        font-size:0.18rem;
    }
    b{
        display:block;
        font-size:0.14rem;
        color:gray;
        font-weight:100;
    }
    .bottomxia{
        margin-top:0.5rem;
    }
    ol{
        display: flex;
        flex-wrap:wrap;
        text-align: center;
    }
    ol>li{
        width:50%;
        height:0.44rem;
       border-top:1px solid gray;
        display:flex;
        align-items:center;      
    }
     ol>li:nth-of-type(3){
        border-bottom:1px solid gray;  
     }
      ol>li:nth-of-type(4){
        border-bottom:1px solid gray;  
     }
    ol>li>a{
         color:green;
         font-size:0.14rem;
         display:inline-block;
         width:100%;
         height:0.2rem;
    }
    ol>li:nth-of-type(2n+1) a{
        border-right:2px solid gray;  
    }
</style>