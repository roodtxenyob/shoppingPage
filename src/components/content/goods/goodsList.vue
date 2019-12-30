<template>
  <div class="goodslist">
    <goodsListItem v-for="(item,index) in good" :goodItem="item" :key="index"></goodsListItem>
  </div>
</template>

<script>
  import goodsListItem from "./goodsListItem";
  export default {
    name: "goodsList",
    props:{
      good:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      goodsListItem
    }
  }
</script>

<style scoped>
  .goodslist{
    display: flex;
    flex-wrap: wrap;
  }
</style>
