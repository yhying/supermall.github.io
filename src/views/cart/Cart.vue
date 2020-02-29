<template>
  <div>
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{carList}})</div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      NavBar
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['carList'])
    },
  }

</script>
<style scoped>
  .cart-nav{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

</style>
