<template>
  <div class="tabControl">
    <div v-for="(item,index) in title" class="tab-item" :class="currentindex==index?'active':' '" @click="itemclick(index)">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      title:{
        type:Array,
        default:[]
      }
    },
    data() {
      return {
        currentindex:0
      }
    },
    methods: {
      itemclick(index){
        this.currentindex=index;
        this.$emit('tabclick',index)
      }
    },
  }

</script>
<style scoped>
  .tabControl {
    /* position: sticky;  /* 原生已经无效，引入bettercontrol后 */
    /* top: 44px;
    z-index: 9; */ 
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-item {
    flex: auto;
  }
  .tab-item span {
    padding: 5px;
  }
  .active {
    color:var(--color-high-text)
  }
  .active span {
    border-bottom: 3px solid var(--color-tint)
  }
</style>
