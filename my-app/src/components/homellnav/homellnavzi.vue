<template>
<div>
     <a class="el-container" v-for="(v,i) in ziobj" :key="i" :href="v.adapt_url">
        <div class="con">
            <div class="left">
                <h3>{{v.title}}</h3>
                <p>{{v.content}}</p>
            </div>
            <div class="right">
                <img :src="v.image">
            </div>
        </div>
        <div class="xia">
            <span>{{v.category_name}}</span>
            <span>{{v.subcategory_name}}</span>
        </div>    
    </a>
</div>


   
</template>
<script>
export default {
   props:{
      ziobj:{
          type:Array,
          required:true
      }
       
   }
//    ["titlehome","contenthome","imgagehome","xiazuohome","xiayouhome"]
}
</script>
<style scoped>
a{
    display:block;
}
    .con{
        display:flex;
        justify-content:space-between;
        margin-top:0.3rem;
         overflow: hidden;
    }
     .left{
        width:68%;
        overflow: hidden;
    }
    
   img{
        width:0.86rem;
        height:0.86rem;
 
    } 
    h3{
        font-size:0.16rem;
    }
    p{
        font-size:0.12rem;
        width:2.3rem;
        line-height: 0.18rem;
        height:0.36rem;
        color:gray;
        margin-top:0.1rem;
        text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    }
    .xia{
        display: flex;
        justify-content:space-between;
        padding-top:0.2rem;
         padding-bottom:0.2rem;
        border-bottom:1px solid gray;
    }
    .xia span{
        font-size:0.12rem;
        color:gray;
    }
</style>