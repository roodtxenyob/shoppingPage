export let testMixin = {
  created(){
    console.log("混入其中");
  },
  data(){
    return{
      isBackTopShow:false,
    }
  },
  methods:{
    topclick(){
      this.$refs.scroll.BScroll.scrollTo(0,0,300);
      //回到顶部
    },
    showevent(event){
      this.isBackTopShow = event;
    },
  }
}
