<template>
    <div>
        <div v-if="str.length==0" class="imgss">
        <img src="../../static/dengdai.gif" alt />
        </div>
        <div class="container" v-else> 
                <div class="con">
                        <div class="left">
                            <h2>{{str[0].movieName}}</h2>
                            <span>星星</span><span>12346人评论</span>
                            <p>{{str[0].infor}}</p>
                        </div>
                        <img :src="str[0].img">         
                </div>
                <div class="look">
                    <span>想看</span><span>看过</span>
                </div>
                <div class="jianjie">
                    <span>{{str[0].movieName}}简介</span>
                    <p>{{str[0].jianjie}}</p>
                </div> 
                <div class="footer">
                    <a>查看更多相关分类</a>
                    <span>剧情</span><span>爱情</span><span>战争</span>
                </div>
         </div>
    </div>
</template>
<script>
export default {
   
  data(){
      return {
          arr:[],
          str:[]
      }
  },
  created(){
      this.axios({
          url:"/dianying",
          method:"get"
      }).then((ok)=>{
        //   console.log(ok.data.movie);
          this.arr=ok.data.movie;

            setTimeout(()=>{
                this.str=this.arr.filter((v,i)=>{
              if(v.id==this.$route.params.id){
                  return this.arr[i];
              }
            })
            },1000)
           
      })
  },
//   computed:{
//       arrs(){
//           var str=this.arr.filter((v,i)=>{
//               if(v.id==this.$route.params.id){
//                   return this.arr[i];
//               }            
//           });
//          console.log(str);
//           return str;
//       }
//   }
}
</script>
<style scoped>
    .con{
        display:flex;
       
    }
    .left{
        width:67%;
    }
    .left>h2{
       font-size:0.22rem; 
        margin-bottom:0.1rem;
    }
    .left>span{
        color:gray;
        font-size:0.16rem;
        
    }
    .left>p{
        font-size:0.14rem;
        margin-top:0.1rem;
    }
    .look{
        display:flex;      
        justify-content: space-between;    
        text-align:center;
         margin:0.2rem 0;
       
    }
    .look>span{
         border:1px solid orange;
         width:46%;
         border-radius:3px;
         color:orange;
         font-size:0.14rem;
         padding:0.1rem 0;
    }
    img{
        width:1.3rem;
        height:1.8rem;
        margin-top:0.1rem;
    }
    .jianjie>span{
        color:gray;
         font-size:0.18rem;
         margin-bottom:0.1rem;
    }
    .jianjie>p{
        font-size:0.16rem;
        text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    }
    .footer a{
        display:block;
         color:gray;
         font-size:0.18rem;
         margin:0.1rem 0; 
    }
    .footer>span{
      font-size:0.16rem;
     display:inline-block;
     width:0.7rem;
     line-height:0.4rem;
     background:gray;
     margin-right:0.1rem;
     text-align: center;
     border-radius:18px;
    }
    .imgss img{
        margin-left:40%;
        width:0.8rem;
        height:0.8rem;
    }
</style>