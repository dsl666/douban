<template>
    <div>        
<router-link :to="{name:'detailed',params:{id:dd}}"><img :src="imgurl"><span>{{name}}</span><p>
    
    <el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  :score-template="xxs">
</el-rate>

    </p></router-link>
               <!-- <a href="#"> <img :src="imgurl"><span>{{name}}</span><p>星星</p></a> -->
            
    </div>
</template>
<script>
export default {
    props:["name","imgurl","dd","xx"],
     data(){
      return {
        value: ''
      }
    },
    created(){
        this.value=this.xx;
    },
    computed: {

        // 乘以二 保留一位小数，
        xxs(){
            return (this.value*2).toFixed(1)
        },

        
    }
}
</script>
<style scoped>
   img{
         width:1.5rem;
       height:2rem;
   }
   a>span{
       display: inline-block;
       width:1.5rem;
       white-space: nowrap;
       overflow: hidden;
       text-overflow:ellipsis;
   }
   
  
</style>>