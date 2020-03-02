<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">我的档案</div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    components: {
      NavBar
    },
    data() {
      return {

      }
    },
  }

</script>
<style scope>
  .profile-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
