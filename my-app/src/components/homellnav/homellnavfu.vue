<template>
    <div>
        <homellnavzi :ziobj="zongfu"></homellnavzi>
       
    </div>
</template>
<script>
import  homellnavzi from './homellnavzi'
export default {
  components:{
     homellnavzi 
  },
  props:["zongfu"]
}
</script>
<style scoped>
    
</style>