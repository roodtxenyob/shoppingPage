<template>
    <div v-show="isShow">
      {{showText}}
    </div>
</template>

<script>
  export default {
    name: "Tosat",
    data(){
      return {
        isShow:false,
        showText:""
      }
    },
    methods:{
      showTosat(time = 2000,text = "默认文本"){
        this.showText = text;
        this.isShow = true;
        clearTimeout(setTimeoutContainer);
        let setTimeoutContainer= setTimeout(() => {
          this.isShow = false;
        },time)
      }
    }
  }
</script>

<style scoped>
  div{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%,-50%) ;
    background-color: rgba(0, 34, 10, 0.8);
    padding: 8px;
    border-radius: 4px;
    color: #f8f8f8;
  }
</style>
