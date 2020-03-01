<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{carListlength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <cart-list></cart-list>
    </scroll>
    <cartBotton></cartBotton>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import cartList from './childComps/cartList.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import cartBotton from './childComps/cartBotton.vue'
  import {
    mapGetters
  } from 'vuex'
  export default {
    components: {
      NavBar,
      cartList,
      Scroll,
      cartBotton
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters(['carListlength']) /* 数组写法 */
      // ...mapGetters({
      //   length:'carListlength'  /* 对象语法 映射，可以改变属性名 */  
      // })
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    methods: {
      /* 
      事件监听相关方法
      */
      contentScroll() {
      }
    },
  }

</script>
<style scoped>
  .cart {
    position: relative;
    height: 100vh;
  }
  .content {
    /* height: calc(100% - 44px); */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom:94px;
    left: 0;
    right: 0;
  }
  .cart-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

</style>
