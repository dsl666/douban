<template>
    <div>
        <routerlinknav></routerlinknav>
        小组
        <div class="kong"></div>

        <sangegb topic="租房找室友" :arr="xiaozuaarr" most="更多相关小组"></sangegb>
        <sangegb topic="来聊五块钱" :arr="xiaozubarr" most="来聊五块钱"></sangegb>
        <sangegb topic="买买买" :arr="xiaozucarr" most="更多相关小组"></sangegb>
        <dbjsbuluo></dbjsbuluo>
    </div>
</template>
<script>
import routerlinknav from '../components/routerlinknav'
import sangegb from '../components/sangegb'
import dbjsbuluo from '../components/dbjsbuluo'
export default {
    components:{
        routerlinknav,
        sangegb,
        dbjsbuluo
    },
    data(){
        return {
            xiaozuaarr:[],
            xiaozubarr:[],
            xiaozucarr:[],
        }
    },
    created(){
       this.axios({
           url:"/xiaozu",
           method:"get"
       }).then((ok)=>{
           console.log(ok.data.xiaozua);
           this.xiaozuaarr=ok.data.xiaozua;
           this.xiaozubarr=ok.data.xiaozub;
           this.xiaozucarr=ok.data.xiaozuc;
       })
       
   }
}
</script>
<style scoped>
    .kong{
        margin-top:0.53rem;
    }
</style>