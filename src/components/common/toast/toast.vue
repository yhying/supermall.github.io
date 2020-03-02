<template>
    <div class="toast" v-show="isShow">
        <div>{{msg}}</div>
    </div>
</template>
<script>
  export default {
      data() {
          return {
              msg:'',
              isShow:false,
          }
      },
      methods: {
        show(message="默认文字",during="2000"){
            this.msg=message
            this.isShow=true

            setTimeout(() => {
                this.isShow=false
                this.msg=''
            }, during);
        }
      },
  }

</script>
<style>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 8px 10px;
        z-index: 999;
        color: #fff;
        background-color: rgba(0,0,0,.7);
    }
</style>
