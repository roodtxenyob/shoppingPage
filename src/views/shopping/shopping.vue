<template>
  <div class="container">
    <navbar><div slot="center">购物车({{cartLength}})</div></navbar>
    <scroll class="scroll">
      <shopList :purchaseGoods="$store.state.cartList"></shopList>
    </scroll>
    <foot :purchaseGoods="$store.state.cartList"></foot>
  </div>
</template>

<script>
  import scroll from "components/common/scroll/scroll";
  import navbar from "components/common/navbar/navbar";
  import shopList from "./childComps/shopList";
  import foot from "./childComps/foot";
  import {mapGetters} from 'vuex';
  export default {
    name: "shopping",
    components:{
      navbar,
      foot,
      scroll,
      shopList
    },
    computed:{
      ...mapGetters(['cartLength','cartList'])
    }
  }
</script>

<style scoped>
  .container{
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .scroll{
    position: absolute;
    top: 40px;
    right: 0px;
    left: 0px;
    bottom: 89px;
    overflow: hidden;
  }
</style>
