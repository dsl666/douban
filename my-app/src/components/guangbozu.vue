<template>
    <div>
        <div class="container con">
            <div class="dkapp">
            <span>打开app，浏览更多</span>
            <div class="dkappright">
                <a href="#" class="aa">极速下载</a>
                <a href="#" class="ab">打开</a>
            </div>
            </div>
        </div>
        
        <div class="container conb">
                <div class="xiandl">
                    <div class="xiandlleft">
                        <span class="el-icon-user-solid"></span>
                        <router-link to="/login">请先登录</router-link>
                    </div>
                    <div class="xiandlright">
                        <span class="el-icon-edit"></span>
                        <span class="el-icon-camera"></span>
                    </div>
                 </div>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.con{
 background:url(../../static/background.jpg) no-repeat;
 background-size:100%;
}
    .dkapp{
        display: flex;
        justify-content:space-between;
        align-items:center;
        height:0.8rem;
       
    }
    .dkapp>span{
        color:green;
        font-size:0.14rem;
        display:inline-block;
    }
    .aa{
        background:green;
        border-radius:3px;
        color:white;
        font-size:0.14rem;
        padding:5px 10px;
        font-weight:600;
    }
    .ab{
         background:white;
        border-radius:3px;
        color:green;
        font-size:0.14rem;
        padding:5px 10px;
        font-weight:600;
        border:1px solid green;
    }
    .conb{
          border-bottom:1px solid gray;    
    }
    .xiandl{
        display:flex;
        justify-content: space-between;
        height:0.6rem;
        align-items: center;   
      
    }
    .xiandlleft{
        height:0.6rem;
         line-height: 0.6rem;
         vertical-align: middle;
    }
    .xiandlleft>span{
        color:gray;
        font-size:0.33rem;
         position: relative;
         top:0.1rem;
    }
    .xiandlleft a{
        color:gray;
        font-size:0.16rem; 
       
    }
    .xiandlright>span{
        color:gray;
        font-size:0.23rem; 
        margin-left:0.2rem;
    }
</style>