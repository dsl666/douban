<template>
    <div>
      
        <routerlinknav></routerlinknav>
          <div class="sigenav">  
               <sigenav></sigenav>
         </div>
       
       <div>
           <img src="../../static/dengdai.gif" v-if="arrhome.length<=0">
            <homellnavfu :zongfu="arrhome" v-else></homellnavfu>
       </div>
       
        
    </div>
</template>
<script>
import routerlinknav from '../components/routerlinknav'
import sigenav from '../components/sigenav'
import homellnavfu from '../components/homellnav//homellnavfu'
export default {
    components:{
        routerlinknav,
        sigenav,
        homellnavfu
    },
    data(){
        return{
            arrhome:[]
        }
    },
    created(){
        setTimeout(()=>{

            this.axios({
            url:"/mnwjhome",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data);
            this.arrhome=ok.data;
        })
        },500)
        
    }
}
</script>
<style scoped>
    .sigenav{
        margin-top:0.53rem;
    }
    img{
        margin-left:45%;
    }
</style>