<template>
  <div class="tabbarItem" @click="itemClick()">
    <div v-if="isActive">
      <slot name="img"></slot> <!--插槽最后用div包起来，在父元素上设置样式-->
    </div>
    <div v-else>
      <slot name="imgActive"></slot>
    </div>
    <div :style="fontActive">
      <slot name="p"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "tabbarItem",
    data(){
      return {
        //isActive:true
      }
    },
    props:{
      path:{
        type:String
      },
      activeColor:{
        type:String,
        default:"red"
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path);
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path);
      },
      fontActive(){
        if (this.isActive){
          return {}
        }else {
          return {color: this.activeColor}
        }
      }
    }
  }
</script>

<style scoped>
  .tabbarItem{
    flex: 1;
    font-size: 16px;
    text-align: center;
    height: 49px;
  }
  .tabbarItem img{
    height: 30px;
    width: 30px;
    vertical-align: middle;/*去除img的空白*/
  }
</style>
