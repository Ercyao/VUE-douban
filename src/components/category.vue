<template>
  <div class="category-box">
    <p class="title">分类浏览</p>
    <ul>
      <li v-for="item in items"
          :key="item.url"><a :href="item.url">{{item.name}}<span class="arrow"></span></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items'],
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/style/less.less";
.category-box {
  .title {
    font-size: 1.2rem;
  }
  width: 110%;
  ul {
    margin-top: 1.6rem;
    overflow: hidden;
    .border(0.1rem, 0, 0, 0);
    li {
      float: left;
      box-sizing: border-box;
      width: 50%;
      padding-right: 1.5rem;
      height: 3rem;
      line-height: 3rem;
      font-size: 1.1rem;
      .border(0, 0.1rem, 0, 0.1rem);
      a {
        color: @green;
        padding-left: 0.5rem;
      }
    }
    .arrow {
      float: right;
      width: 0.5rem;
      height: 0.5rem;
      margin-top: 1rem;
      .border(0.2rem, 0, 0, 0.2rem);
      transform: rotate(45deg);
    }
  }
}
</style>
