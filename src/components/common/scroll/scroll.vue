<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import betterScroll from "better-scroll"
  export default {
    name: "scroll",
    data(){
      return{
        BScroll:null
      }
    },
    mounted() {
      this.BScroll = new betterScroll(this.$refs.wrapper,{
        probeType: 3,
        click: true,
        pullUpLoad:true
      });
      this.BScroll.on("scroll",(position) =>{
        if (position.y * (-1) > 1000){
          this.$emit("showevent",true);
        }else {
          this.$emit("showevent",false);
        }
        this.$emit("Roll", () => {});
        //这个逻辑不应该在这里写！！！
        this.$emit("gundong",position)

      });
      this.BScroll.on("pullingUp",() => {
        this.$Bus.$emit("uPward", () => {
        })
      })
    },
    methods:{
      refresher(){
        this.BScroll.refresh()
      }
    }
  }
</script>

<style scoped>
.content{

}
</style>
