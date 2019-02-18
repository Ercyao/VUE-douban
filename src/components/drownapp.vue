<template>
  <div id="drown-app">
    <div class="logo">
      <div class="left"><img src="../assets/img/logo.png" /></div>
      <div class="right">
        <p>豆瓣</p>
        <p>我们的精神角落</p>
      </div>
    </div>
    <a href="https://www.douban.com/doubanapp/card/log?category=group_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_group_home%26direct_dl%3D1">去App Store 免费下载IOS客户端 </a>

  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    gotoAddress (name) {
      this.$router.push(name)
    }
  }

}
</script>

<style lang="less" scoped>
@import "../assets/style/less.less";
#drown-app {
  margin: 3rem 0 2rem;
  .logo {
    width: 11rem;
    margin: 0 auto;
    display: flex;
    -webkit-justify-content: space-between;
    .left {
      img {
        width: 3.5rem;
      }
    }
    .right {
      p:first-child {
        font-size: 1.6rem;
        font-weight: normal;
      }
    }
  }
  a {
    display: block;
    width: 100%;
    text-align: center;
    color: @green;
    margin: 1rem 0;
  }
}
</style>
