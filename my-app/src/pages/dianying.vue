<template>
    <div>
         <routerlinknav></routerlinknav>
         <div class="kong"></div>

        <div>
            <div>
                <gdnavfu gdnavpropsfu="影院热映"></gdnavfu>
                <ul class="container">
                    <li v-for="(v,i) in acca" :key="i"><imglunbo :name="v.movieName" :imgurl="v.img" :dd="v.id" :xx="v.num"></imglunbo></li>
                </ul>
                 <gdnavfu gdnavpropsfu="免费在线观影"></gdnavfu>
                 <ul class="container">
                    <li v-for="(v,i) in accb" :key="i"><imglunbo :name="v.movieName" :imgurl="v.img" :dd="v.id" :xx="v.num"></imglunbo></li>
                </ul>
                <gdnavfu gdnavpropsfu="新片速递"></gdnavfu>
                 <ul class="container">
                    <li v-for="(v,i) in accc" :key="i"><imglunbo :name="v.movieName" :imgurl="v.img" :dd="v.id" :xx="v.num"></imglunbo></li>
                </ul>
            </div>
        </div>
        
       
                 <gdnavfu gdnavpropsfu="发现好电影"></gdnavfu>
             <wzlunbo :wzarr="gooddyarr"></wzlunbo>

        <fenleiliulan :wzfenleiliulan="arr"></fenleiliulan>

         <div>
        <dbjsbuluo></dbjsbuluo>

        </div>
    </div>
</template>

<script>
import routerlinknav from '../components/routerlinknav'
import gdnavfu from '../components/gdnav/gdnavfu'
import fenleiliulan from '../components/fenleiliulan'
import dbjsbuluo from '../components/dbjsbuluo'
import wzlunbo from '../components/wzlunbo'
import imglunbo from '../components/imglunbo'
export default {
    components:{
        routerlinknav,
        gdnavfu,
        wzlunbo,
        imglunbo,
        fenleiliulan,
         dbjsbuluo
    },
    data(){
        return {
            arr:[
                {wz:"经典"},
                {wz:"冷门佳片"},
                {wz:"豆瓣高分"},
                {wz:"动作"},
                {wz:"喜剧"},
                {wz:"爱情"},
                {wz:"悬疑"},
                 {wz:"恐怖"},
                 {wz:"科幻"},
                 {wz:"治愈"}, 
                 {wz:"文艺"},
                {wz:"成长"}, 
                 {wz:"动画"}, 
                  {wz:"华语"}, 
                 {wz:"欧美"},  
                 {wz:"韩国"},
                 {wz:"日本"}
            ],
            acc:[],
            gooddyarr:[]
        }
    },
   created(){
       this.axios({
           url:"/dianying",
           method:"get"
       }).then((ok)=>{
        //    console.log(ok.data.movie);
           this.acc=ok.data.movie;
       }),
        this.axios({
            url:"/findgoodbook",
            method:"get"
        }).then((ok)=>{
           
            // console.log(ok.data.faxianhaodianying);
            this.gooddyarr=ok.data.faxianhaodianying;
        })
   },
   computed:{
       acca(){
           var str=this.acc.filter((v,i)=>{
               if(v.id<6){
                   return this.acc[i]
               }
               
           });
        //    console.log(str);
           return str;
       },
       accb(){
           var str=this.acc.filter((v,i)=>{
               if(v.id>=6&& v.id<12){
                   return this.acc[i];
               }
           });
       
           return str;
       },
       accc(){
           var str=this.acc.filter((v,i)=>{
               if(v.id>=12){
                   return this.acc[i]
               };
           });
       
           return str;
       }
   }

  
   
}
</script>
<style scoped>
    .kong{
        margin-top:0.53rem;
    }
     ul{
       display:flex;
       width:100%;
       overflow:auto;
   }
   li{
       margin-right:0.15rem;
       text-align: center;
   }
</style>