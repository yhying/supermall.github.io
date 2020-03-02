<template>
  <tab-bar>
    <tab-bar-item path="/home" :activeColor="activeColor">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" :activeColor="activeColor">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" :activeColor="activeColor" class="car">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">
        购物车
        <div class="car_number">{{carListlength}}</div>
      </div>
    </tab-bar-item>
    <tab-bar-item path="/profile" :activeColor="activeColor">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  import {mapGetters} from 'vuex'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
    data() {
      return {
        activeColor:'rgb(255,87,179)'
      }
    },
    computed: {
      ...mapGetters(['carListlength'])
    },
  }

</script>

<style scoped>
  .car {
    position: relative;
  }
  .car_number {
    position: absolute;
    top: -8px;
    right: 28px;
    color: #fff;
    width: 23px;
    height: 23px;
    line-height: 23px;
    text-align: center;
    border-radius: 50%;
    background-color: red;
  }
</style>
