<template>
  <div id="app">
    <keep-alive exclude="detail">
      <!--是Vue提供的一个抽象组件，用来对组件进行缓存，
      从而节省性能，由于是一个抽象组件，
      所以在v页面渲染完毕后不会被渲染成一个DOM元素
      当组件在keep-alive内被切换时组件的activated、deactivated这两个生命周期钩子函数会被执行
      -->
      <router-view></router-view>
    </keep-alive>
    <mainTabbar></mainTabbar>
  </div>
</template>

<script>
import mainTabbar from "components/content/mainTabbar/mainTabbar";
export default {
  name: 'app',
  components: {
    mainTabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
