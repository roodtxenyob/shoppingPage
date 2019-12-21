<template>
  <div class="recommendbox">
    <ul>
      <li v-for="i in recommends">
        <a href="i.linl">
          <img :src="i.image" alt="">
          <span>{{i.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },

  }
</script>

<style scoped>
  .fix:after,fix:before{
    display: table;
    content: "";
    clear: both;
  }
  .recommendbox{
    width: 100%;
  }
  .recommendbox ul{
    list-style: none;
    display: flex;
    margin-top: 10px;
  }
  .recommendbox li{
    text-align: center;
    flex: 1;
  }
  .recommendbox img{
    width: 65px;
    height: 65px;
  }
  .recommendbox span{
    display: block;
    font-size: 12px;
  }
</style>
