<template>
    <div>
        <routerlinknav></routerlinknav>
        
        <div class="guangbozuas">
            <guangbozu></guangbozu>
        </div>
        
        <liulantext></liulantext>
      <dbjsbuluo></dbjsbuluo>
    </div>
</template>
<script>
import routerlinknav from '../components/routerlinknav'
import guangbozu from '../components/guangbozu'
import liulantext from '../components/liulantext'
import dbjsbuluo from '../components/dbjsbuluo'
export default {
    components:{
        routerlinknav,
        guangbozu,
        liulantext,
        dbjsbuluo
    }
}
</script>
<style scoped>
    .guangbozuas{
        margin-top:0.53rem;
    }
</style>