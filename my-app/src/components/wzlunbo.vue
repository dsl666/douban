<template>
    <div>     
            <div class="con">
                    <span v-for="(v,i) in wzarr" :key="i" :class="v.line?'caa':''"><a :href="v.href" :style="{color:v.color}">{{v.title}}</a></span>
                    <!-- <span><a href="#">同时入同时入选同时入选同时入选同时入选</a></span>
                     <span><a href="#">同时同时入选同时入选同时入选同时入选入</a></span>
                      <span ></span>
                       <span><a href="#">同同时入选同时入选时入</a></span>
                        <span><a href="#">同同时入选同时入选时入</a></span>
                        <span><a href="#">同时入同时入选同时入选同时入选同时入选</a></span> -->
                 
            </div>       
    </div>
</template>
<script>
export default {
    props:{
      wzarr:{
          type:Array,
          require:true
      }  
    }
}
</script>
<style scoped>
    .con{
        /* margin:0.5rem 0; */
        white-space: nowrap;
        overflow: auto;

    }
    a{
        white-space:nowrap;  
         
    }
    span{
        display: inline-block;
        border:1px solid red;
          padding:0.2rem 0.1rem;    
          border-radius:5px;
          margin:0.1rem 0.1rem;
    }
    /* .con>span:empty{
        display: block;
        padding: 0;
        margin: 0;
          border:0px solid red;
    } */
   .con .caa{
      display: block;
        padding: 0;
        margin: 0;
        border:0px solid red;
   }
</style>