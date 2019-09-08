<template>
    <div>
        <routerlinknav></routerlinknav>
        <div class="kong"></div>

        <div>
            <gdnavfu gdnavpropsfu="最受关注图书 | 虚构类"></gdnavfu>
             <ul class="container">
                    <li v-for="(v,i) in imgarr" :key="i"><imglunbo :name="v.title" :imgurl="v.image"></imglunbo></li>
                </ul>
        </div>

        <div>
                 <gdnavfu gdnavpropsfu="最受关注图书 | 非虚构类"></gdnavfu>
                <gdnavfu gdnavpropsfu="豆瓣纸书"></gdnavfu>
                <gdnavfu gdnavpropsfu="发现好书"></gdnavfu>
                <wzlunbo :wzarr="goodbookarr"></wzlunbo>
        </div>
       

        <div>
             <fenleiliulan :wzfenleiliulan="arr"></fenleiliulan>
        </div>

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
            imgarr:[],
            goodbookarr:[]
        }
    },
    created(){
        this.axios({
            url:"/book",
            method:"get"
        }).then((ok)=>{
           
            // console.log(ok.data);
            this.imgarr=ok.data;
        });
        this.axios({
            url:"/findgoodbook",
            method:"get"
        }).then((ok)=>{
           
            // console.log(ok.data.goodBook);
            this.goodbookarr=ok.data.goodBook;
        })
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