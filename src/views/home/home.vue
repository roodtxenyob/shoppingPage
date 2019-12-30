<template>
  <div id="home">
    <navbar><div slot="center">首页</div></navbar>
    <tabController :title="['流行','新款','精选']"
                   @goodTypeEvent="goodTypeEvent($event)"
                   class="tabController1"
                   v-show="isShowTabController"
                   ref="tabController0"
    ></tabController>
    <scroll class="scroll" ref="scroll" @showevent="showevent($event)" @Roll="Roll()">
      <mainSwiper :banners="banners" @bannerImgLoad="bannerImgLoad()" ></mainSwiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <tabController
        :title="['流行','新款','精选']"
        @goodTypeEvent="goodTypeEvent($event)"
        ref="tabController"
      ></tabController>
      <goodsList :good="goods[goodsTpye].list"></goodsList>
    </scroll>
    <backTop @click.native="topclick()" v-show="isBackTopShow"></backTop>
  </div>
</template>

<script>
  import navbar from "components/common/navbar/navbar";
  import scroll from "components/common/scroll/scroll";
  import {getHomeMutidata,getHomeGoods} from "network/home";

  import mainSwiper from "components/content/mainSwiper/mainSwiper";
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"
  import tabController from "components/content/tabController/tabController";
  import goodsList from "components/content/goods/goodsList";
  import backTop from "components/content/backTop/backTop";

  import {testMixin} from "common/mixin"
  export default {
    name: "home",
    data(){
      return{
        banners: [],
        //轮播图信息
        recommends: [],
        //推荐信息
        goods:{
          //热门信息
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        goodsTpye:"pop",
        isShowTabController:false,
        tabControllerOffsetTop:1,
        scrollY:0,
        eventBusImgLoadContainer:null
      }
    },
    components:{
      navbar,
      mainSwiper,
      RecommendView,
      FeatureView,
      tabController,
      goodsList,
      scroll,
      backTop
    },
    created() {
      this.getHomeMutidata();
      //请求轮播图和推荐信息

      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      //请求热门推荐


      this.$Bus.$on("uPward" , () => {
        this.getHomeGoods(this.goodsTpye);
      })
    },
    mounted(){
      const refresn = this.debounce(this.$refs.scroll.refresher, 500);
      this.eventBusImgLoadContainer = () => {
        refresn();
        //监听总线事件
        //this.debounce(this.$refs.scroll.refresher, 200);
        //this.$refs.scroll.refresher();
        //刷新高度以方便拉动
      }
      this.$Bus.$on("busimgload" , this.eventBusImgLoadContainer);
    },
    methods:{
      debounce(func, delay) {
        var timer = null;
        return function(...args) {
          if(timer) clearTimeout(timer);
          timer = setTimeout(() => {
            func.apply(this , args)
          }, delay);
        }
      },
      getHomeMutidata(){
        getHomeMutidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        let page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page + 1;
          this.$refs.scroll.BScroll.finishPullUp()
        })
      },
      goodTypeEvent(event){
        this.goodsTpye = Object.keys(this.goods)[event];
        //拿到类里对应索引的键值
        this.$refs.tabController0.flag = event;
        this.$refs.tabController.flag = event
      },
      bannerImgLoad(){
        setInterval(() => {
          this.tabControllerOffsetTop = this.$refs.tabController.$el.offsetTop;
        },500)
      },
      Roll(){
        this.scrollY = this.$refs.scroll.BScroll.y * -1;
        if (this.scrollY >= this.tabControllerOffsetTop) {
          this.isShowTabController = true;
        }else if (this.scrollY < this.tabControllerOffsetTop){
          this.isShowTabController = false;
        }
      }
    },
    activated(){
      this.$refs.scroll.BScroll.y = this.scrollY * -1;
    },
    deactivated(){
      this.scrollY = this.$refs.scroll.BScroll.y * -1;
      this.$Bus.$off("busimgload",this.eventBusImgLoadContainer);
    },
    mixins:[testMixin]
  }
</script>

<style scoped>
  #home{
    padding-top: 40px;
    position: relative;
    height: 100vh;
  }
  .scroll{
    position: absolute;
    top: 40px;
    bottom: 49px;
    right: 0px;
    left: 0px;
  }
  .tabController1{
    position: relative;
    z-index: 999;
  }
</style>
