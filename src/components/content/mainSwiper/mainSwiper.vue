<template>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index+1">
        <a :href="item.link">
          <img :src="item.image" alt="" :load="bannerImgLoad()">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper";
  export default {
    name: "mainSwiper",
    data(){
      return {
        imgLoadfalg:true
      }
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      bannerImgLoad(){
        if (this.imgLoadfalg){
          this.$emit( "bannerImgLoad" , () => {});
        }
        this.imgLoadfalg = false;
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
</style>
