<template>
    <div>
      <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
  export default {
    name: "backTop",

  }
</script>

<style scoped>
  div{
    z-index: 999;
    position: fixed;
    bottom: 60px;
    right: 30px;

  }
  div img{
    height: 50px;
    width: 50px;
  }

</style>
