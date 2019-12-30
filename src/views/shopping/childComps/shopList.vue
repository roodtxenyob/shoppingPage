<template>
  <div>
    <shopListItem v-for="(item,index) in purchaseGoods" :item="item" :key="index"></shopListItem>
  </div>
</template>

<script>
  import shopListItem from "./shopListItem";
  export default {
    name: "shopList",
    components:{
      shopListItem
    },
    props:{
      purchaseGoods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
