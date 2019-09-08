<template>
    <div class="container">
       <gdnavzi :zileft="gdnavpropsfu"></gdnavzi>
    </div>
</template>

<script>
import gdnavzi from './gdnavzi'
export default {
  components:{
      gdnavzi
  },
  props:{
      gdnavpropsfu:{
          type:String,
          require:true
      }
  }
}
</script>
<style scoped>
    
</style>