<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-Control class="tab-control" :title="titleList" @tabclick="tabClick" ref="tabControlref1" v-show="istabfixed"></tab-Control>
      <Scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll"
      @pullingUp="loadmore" >
      <Swiper :banners="banners" @imgLoad="swiperImgLoad">
      </Swiper>
      <Recommend-View :recomends="recomends"></Recommend-View>
      <feature-view></feature-view>
      <tab-Control :title="titleList" @tabclick="tabClick" ref="tabControlref2"></tab-Control>
      <Good-List :goods="goods[currtype].list"></Good-List>
    </Scroll>
    <Back-Top @click.native="backTopClick" v-show="isBackTop"></Back-Top>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import tabControl from 'components/content/tabControl.vue'
  import GoodList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import Swiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FeatureView from './childComps/FeatureView.vue'
  import {itemMixin,backTop} from 'common/mixin.js'
  import {
    getHomeMuticata,
    getHomegoods
  } from 'network/home.js'
  export default {
    components: {
      NavBar,
      Swiper,
      RecommendView,
      FeatureView,
      tabControl,
      GoodList,
      Scroll,
    },
    mixins:[itemMixin,backTop],
    data() {
      return {
        banners: [],
        recomends: [],
        titleList: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currtype: 'pop',
        tabOffset: 0,
        istabfixed:false,
        saveY:0,
        itemLister:null
      }
    },
    destroyed() {
      console.log(111);
    },
    activated() {
      // console.log(this.saveY);
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 获取saveY
    this.saveY=this.$refs.scroll.getsaveY()
    // 取消itemLister事件
    this.$bus.$off('ImgLoad',this.itemLister) /* 第二个参数必须传入一个函数 */
    },
    created() {
      this.getHomeMuticata()
      this.getHomegoods('pop')
      this.getHomegoods('new')
      this.getHomegoods('sell')
    },
    mounted() {
      // this.$nextTick(()=>{
      //   this.$refs.scroll.refresh()
      // })
    },
    methods: {
      /* 
      事件监听相关方法
      */
      tabClick(index) {
        // console.log(index);
        switch (index) {
          case 0:
            this.currtype = 'pop'
            break;
          case 1:
            this.currtype = 'new'
            break;
          case 2:
            this.currtype = 'sell'
            break;
        }
        this.$refs.tabControlref2.currentindex=index;
        this.$refs.tabControlref1.currentindex=index;
      },
      contentScroll(position) {
        // console.log(position.y);
                // 1.判断BackTop是否显示
        this.isBackTop = (-position.y) > 1000
        // 2.决定tabControl是否吸顶(position: fixed)
        this.istabfixed=(-position.y) >this.tabOffset

      },
      loadmore() {
        this.getHomegoods(this.currtype)
        console.log('上拉加载等更多');
      },
      // 监听轮播图加载完成
      swiperImgLoad() {
        this.tabOffset = this.$refs.tabControlref2.$el.offsetTop
        // console.log(this.tabOffset);
      },
      /* 
      网络请求相关方法
      */
      getHomeMuticata() {
        getHomeMuticata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list /*轮播图数据*/
          this.recomends = res.data.recommend.list /*  */
        })
      },
      // 商品goods数据
      getHomegoods(type) {
        const page = this.goods[type].page + 1
        getHomegoods(type, page).then(res => {
          // console.log(res);
          this.titleList = res.data.filter.list
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      },
    },
  }

</script>
<style scoped>
  .home {
    position: relative;
    height: 100vh;
    /* padding-top: 44px; */
  }

  .home-nav {
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999; */
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control {
    position: relative;
    z-index: 999;
  }
  /* .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top:44px;
  } */

  /* img {
      width: 100%;
  } */

</style>
