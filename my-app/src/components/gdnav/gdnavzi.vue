<template>
    <div>
       <h4>{{zileft}}</h4>
       <a :href="ziright">更多</a>
    </div>
</template>

<script>

export default {
  props:["zileft","ziright"]
}
</script>
<style scoped>
    h4{
        color: black;
         height:0.5rem;
         line-height:0.5rem;
    }
    a{
        color:green;
        font-size:0.16rem;
    }
    div{
        display:flex;
        justify-content:space-between;
         height:0.5rem;
        /* background:yellow; */
        line-height:0.5rem;
    }
</style>