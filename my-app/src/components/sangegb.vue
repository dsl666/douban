<template>
    <div>
        <div class="container">
            <h2>{{topic}}</h2>
            <ul>
                <li v-for="(v,i) in arr" :key="i">
                    <a href="#">
                        <div class="left">
                                <div class="lefts">
                                    <img :src="v.images.small" alt="">
                                    <span>{{v.title}}</span>
                                </div>
                             <span>20005人</span>
                        </div>
                       <span class="spana">{{v.group_topic.time}}</span><span class="spanb">{{v.group_topic.title}}</span>
                    </a>
                </li>
            </ul>
            <p>{{most}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        arr:{
            type:Array,
            required:true
        },
        topic:{
            type:String,
            required:true 
        },
        most:{
            type:String,
            required:true 
        }
    }
}
</script>
<style scoped>
    h2{
        font-size:0.18rem;
    }
    ul>li>a{
        display: inline-block;
        width:100%;
    }
  .left{
        display:flex;
        justify-content:space-between;
        margin-top:0.15rem;
    }
    .left>span{
        align-self: center;
        color:gray;
        font-size:0.14rem;
    }
    .lefts>span{
        font-size:0.18rem;
    }
    .spana{
        font-size:0.14rem;
        color:gray;
    }
     .spanb{
        font-size:0.14rem;
        color:gray;
    }
    li{
        border-bottom:1px solid gray;
        padding-bottom:0.1rem;
    }
    p{
        color:green;
        font-size:0.16rem;
        text-align:center;
        padding-top:0.2rem;
        padding-bottom:0.5rem;
    }
</style>