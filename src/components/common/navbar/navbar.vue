<template>
  <div class="navbar fix" >
    <div id="left" :style="leftStyle"><slot name="left"></slot></div>
    <div id="center" :style="centerStyle"><slot name="center"></slot></div>
    <div id="right" :style="rightStyle"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "navbar",
    props:{
      letfColor:{
        type:String,
        default: "#f5659f"
      },
      centerColor:{
        type: String,
        default: "#f5659f"
      },
      rightColor:{
        type: String,
        default: "#f5659f"
      },
    },
    computed:{
      leftStyle(){
        return {'background-color': this.letfColor}
      },
      centerStyle(){
        return {'background-color': this.centerColor}
      },
      rightStyle(){
        return {'background-color': this.rightColor}
      }
    }
  }
</script>

<style scoped>
  .fix:after,.fix:before{
    content: "";
    display: table;
    clear: both;
  }
  .navbar{
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 999;
  }
  #left,#right{
    height: 40px;
    width: 50px;
  }
  #center{
    height: 40px;
    flex: 1;
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    line-height: 38px;
  }
</style>
