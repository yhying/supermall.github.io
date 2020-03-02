<template>
  <div class="cartbotton">
    <div class="price">
      <check-button @click.native="selectAll" :is-checked='isAllcheck'></check-button>
      <span class="select">全选</span>
      <span>合计:{{totalprice}}</span>
    </div>
    <div class="jiesuan">
      去结算({{jiesuanLength}})
    </div>
  </div>
</template>
<script>
  import checkButton from 'components/content/cartcheck/cartbuttonbar.vue'
  import {
    mapGetters
  } from 'vuex'
  export default {
    components: {
      checkButton,
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters(['carList']),
      totalprice() {
        return '￥' + this.carList.filter(item => {
          return item.check
        }).reduce((preValue, item) => {
          return preValue + item.newPrice * item.count
        }, 0).toFixed(2)
      },
      jiesuanLength(){
        return this.carList.filter(item=>{
          return item.check
        }).length
      },
      isAllcheck(){
        if(this.carList.length===0){
          return false
        }
        return !this.carList.find(item=>{
         return !item.check
        })
      }
    },
    methods: {
      selectAll() {
        if(this.isAllcheck){
          this.carList.forEach(item=>{
            item.check=false
          })
        }else {
          this.carList.forEach(item=>{
            item.check=true
          })
        }
      }
    },
  }

</script>
<style>
  .cartbotton {
    height: 45px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .select {
    margin-left: 5px;
    margin-right: 20px;
  }

  .jiesuan {
    height: 100%;
    width: 100px;
    background-color: orangered;
    text-align: center;
    line-height: 49px;
    color: #fff;
    z-index: 999;
  }

  .price {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    background-color: #f6f6f6;
  }

</style>
