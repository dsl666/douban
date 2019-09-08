<template>
    <div class="el-container">
        <ul>
            <li><router-link to="/dianying">影院热映</router-link></li>
            <li><router-link to="/guangbo">欧美新碟榜</router-link></li>
            <li><router-link to="/zhuce">注册账号</router-link></li>
            <li><router-link to="/login">登录豆瓣</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    ul{
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding-top:0.3rem;
    }
    ul>li>a{
        display:inline-block;
        width:1.7rem;
        height:0.5rem;
        background:lightblue;
        text-align: center;
        line-height:0.5rem;
        margin-bottom:3px;
        /* margin-right:1px; */
    }
</style>