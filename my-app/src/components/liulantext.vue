<template>
    <div>
        <div class="container">
                <div class="top">
                    <img src="../../static/logo.png">
                    <div class="topCon">
                        <p><b>豆瓣</b>写了日记</p>
                        <p>2017-03-01 19:30:41</p>
                    </div>
                </div>
                <div class="middle">
                    <h3>豆瓣App 4.12.0 主要更新</h3>
                    <p>可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
                </div>
                <div class="bottom">
                    <div class="bottomLeft">
                       <span class="el-icon-apple"></span><b>4</b>
                        <span class="el-icon-chat-square"></span><b>0</b>
                         <span class="el-icon-connection"></span> <b>1</b> 
                    </div>
                     <div class="bottomRight">
                          <span class="el-icon-more"></span>
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
    .top{
        display:flex;
        margin-bottom:0.1rem;
        padding-top:0.2rem;
    }
    .top>img{
        width:0.4rem;
        height:0.4rem;
        border-radius:50%;
        margin-right:0.1rem;
    }
    .topCon p:nth-of-type(1){
        color:gray;
        font-size:0.16rem;
    }
    .topCon p:nth-of-type(2){
        color:gray;
        font-size:0.14rem;
    }
    .middle{
        width:2.9rem;
        height:1.08rem;
        border:1px solid gray;
        padding:0.1rem;
        float: right;
    }
    .middle h3{
        font-size:0.16rem;
        margin-bottom:0.1rem;
    }
    .middle p{
        font-size:0.14rem;
         color:gray;
    }
    .bottom{
        clear: both;
        display:flex;
        justify-content:space-between;
        color:gray;
        font-size:0.14rem;
        padding:0.2rem 0;
          border-bottom:1px solid gray;
    }
    .bottomLeft span{
        margin-left:0.2rem;
    }
</style>