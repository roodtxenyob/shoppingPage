<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabbar"
  }
</script>

<style scoped>
  #tabbar{
    display: flex;
    margin-bottom: 0px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: #fcfcfc;
    box-shadow: 0px 4px 10px #1b6d85;
  }
</style>
