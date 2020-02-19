<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <Swiper :banners="banners">
    </Swiper>
    <Recommend-View :recomends="recomends"></Recommend-View>
    <feature-view></feature-view>
    <tab-Control :title="['流行','排行','销售']" @tabclick="tabClick"></tab-Control>
    <Good-List :goods="goods[currtype].list"></Good-List>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import tabControl from 'components/content/tabControl.vue'
  import GoodList from 'components/content/goods/GoodsList'
  // import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'
  import Swiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FeatureView from './childComps/FeatureView.vue'
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
      BackTop
    },
    data() {
      return {
        banners: [],
        recomends: [],
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
        currtype: 'pop'
      }
    },
    created() {
      this.getHomeMuticata()
      this.getHomegoods('pop')
      this.getHomegoods('new')
      this.getHomegoods('sell')
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
      },

      /* 
      网络请求相关方法
      */
      getHomeMuticata() {
        getHomeMuticata().then(res => {
          console.log(res);
          this.banners = res.data.banner.list /*轮播图数据*/
          this.recomends = res.data.recommend.list /*  */
        })
      },
      // 商品goods数据
      getHomegoods(type) {
        const page = this.goods[type].page + 1
        getHomegoods(type, page).then(res => {
          console.log(this.goods[type]);
          console.log(page);
          console.log(res);
        })
      },
    },
  }

</script>
<style scope>
  .home {
    position: relative;
    padding-top: 44px;
  }

  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: var(--color-tint);
    color: #fff;
  }

  /* img {
      width: 100%;
  } */

</style>
