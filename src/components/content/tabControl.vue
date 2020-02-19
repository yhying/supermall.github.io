<template>
  <div class="tabControl">
    <div v-for="(item,index) in title" class="tab-item" :class="currentindex==index?'active':' '" @click="itemclick(index)">
      <span>{{item}}</span>
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
    position: sticky;
    top: 44px;
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    z-index: 9;
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
