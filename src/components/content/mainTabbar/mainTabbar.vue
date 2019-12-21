<template>
  <tabbar>
    <tabbarItem path="/home" activeColor="#f5659f">
      <img src="~assets/img/tabbar/home.svg" alt="" slot="img"/>
      <img src="~assets/img/tabbar/home_active.svg" alt="" slot="imgActive" />
      <p slot="p">首页</p>
    </tabbarItem>
    <tabbarItem path="/itemize" activeColor="#f5659f">
      <img src="~assets/img/tabbar/category.svg" alt="" slot="img"/>
      <img src="~assets/img/tabbar/category_active.svg" alt="" slot="imgActive" />
      <p slot="p">分类</p>
    </tabbarItem>
    <tabbarItem path="/shopping" activeColor="#f5659f">
      <img src="~assets/img/tabbar/cart.svg" alt="" slot="img"/>
      <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="imgActive" />
      <p slot="p">购物车</p>
    </tabbarItem>
    <tabbarItem path="/user" activeColor="#f5659f">
      <img src="~assets/img/tabbar/profile.svg" alt="" slot="img">
      <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="imgActive" >
      <p slot="p">我</p>
    </tabbarItem>
  </tabbar>
</template>

<script>
  import tabbar from "components/common/tabbar/tabbar.vue";
  import tabbarItem from "components/common/tabbar/tabbarItem.vue";
  export default {
    name: "mainTabbar",
    components:{
      tabbar,
      tabbarItem
    }
  }
</script>

<style scoped>

</style>
