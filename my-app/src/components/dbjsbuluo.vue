<template>
    <div class="container">
        <div class="con">
                <img src="../../static/logo.png">
                <div class="conCon">
                    <span>豆瓣</span>
                <p>我们的精神部落</p>
                </div>
        </div>
        <dir class="asd">
             <a href="#">去 App Store 免费下载 iOS 客户端</a>
        </dir>
      
    </div>
</template>
<script>

export default {
   
}
</script>
<style scoped>
    img{
        width:48px;
        height:48px;
    }
    .con{
        display: flex;
        justify-content:center;
        padding-top:0.5rem;
    }
    span{
        font-size:0.18rem;
    }
    p{
      font-size:0.14rem;  
    }
    .conCon{
        margin-left:0.1rem;
    }
    .asd{   
        font-size:0.14rem;
        text-align:center;
    }
    a{
         color:green;
    }
</style>