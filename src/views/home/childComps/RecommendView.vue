<template>
  <div class="recommends">
    <div v-for="item in recomends" class="recommends-item">
      <a href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    props: {
      recomends: {
        type: Array,
        default () {
          /* 必须为函数 */
          return []
        }
      }
    },
    data() {
      return {}
    }
  }

</script>
<style scope>
  .recommends {
    display: flex;
    width: 100%;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
    text-align: center;
    font-size: 12px;
  }
  .recommends-item {
    padding: 0 6px;
    flex: 1;
  }
  .recommends-item a {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .recommends-item img {
    width:100%;
    /* height: 70px; */
    margin-bottom: 10px;
  }
</style>
