<template>
  <div class="cartlist">
    <cartListItem v-for="item in carList" :itemInfo="item"></cartListItem>
  </div>
</template>

<script>
  import cartListItem from './cartListItem.vue'
  import {
    mapGetters
  } from 'vuex'
  export default {
    components: {
     cartListItem,
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

</style>
