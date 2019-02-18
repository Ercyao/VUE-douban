<template>
  <div class="notfound">
    <img src="../assets/logo.png">
    <div class="msg-text">{{ msg }}</div>
    <div class="contest-text">哎呀呀， 页面找不到了！</div>
    <div class="btn-text">
      <span @click="onClickBack">返回首页</span>
      <span @click="onClickRefresh">刷新网页</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error-notfound',
  props: {
    msg: {
      default: '404',
      Type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onClickRefresh () {
      window.location.reload()
    },
    onClickBack () {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 779px) {
  .error-msg-box {
    font-size: 10px;
  }
}
@media screen and (min-width: 780px) {
  .error-msg-box {
    font-size: 16px;
  }
}
.notfound {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  img {
    width: 50%;
  }
  .contest-text {
    font-size: 1.6em;
    min-height: 8em;
  }
  .msg-text {
    font-size: 5.5em;
  }
  .btn-text {
    font-size: 1.2em;
    width: 18em;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    span {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      border-radius: 0.5em;
      padding: 0.5em 1em;
      color: rgba(65, 184, 131, 1);
      cursor: pointer;
    }
  }
}
</style>
