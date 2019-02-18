<template>
  <div class="column-box">
    <p class="title"><span>{{title}}</span><span><a href="#" @click="onMore">更多</a></span></p>
    <slot name="promItem"></slot>
    <ul class="ImgCover"
        v-if="type === 'ImgCover'">
      <li v-for="(item,index) in items"
          :key="index">
        <a :href="item.alt">
          <img :src="item.cover.url" />
          <p class="name">{{item.title}}</p>
          <rating v-if="item.rating"
                  :rating="item.rating.value"></rating>
          <p v-else
             style="color: #AAAAAA;">￥{{item.price}}</p>
        </a>
      </li>
    </ul>
    <ul class="TextCover"
        v-if="type === 'TextCover'">
      <template v-for="(item,index) in items">
        <li v-if="item.name"
            :key="'name'+index"><a :href="item.url"
             :style="{color:item.color,borderColor:item.color}"> {{item.name}}</a></li>
        <li v-else
            :key="index"
            class="line"></li>
      </template>
    </ul>
  </div>
</template>

<script>
import Rating from './rating'

export default {
  props: ['title', 'type', 'items'],
  components: { Rating },
  data () {
    return {
    }
  },
  methods: {
    onMore () {
      alert('未开发此功能~')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/style/less.less";

.column-box {
  margin: 1rem 0 1.5rem;
  .title {
    display: flex;
    justify-content: space-between;
    span:first-child {
      font-size: 1.2rem;
    }
  }
  .ImgCover {
    .name {
      margin-top: 0.7rem;
      line-height: 1.1rem;
      font-size: 1.1rem;
      color: #111;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    li {
      display: inline-block;
      width: 7.5rem;
      padding-right: 0.5rem;
      img {
        height: 12rem;
      }
    }
  }
  ul {
    width: 106%;
    padding: 0.8rem 0;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }
  .TextCover {
    .line {
      width: 100%;
      display: block;
      height: 1px;
      border: 0;
      margin: 0;
    }
    li {
      margin: 0 8px 8px 0;
      font-size: 0.94rem;
      display: inline-block;
      a {
        height: 50px;
        line-height: 50px;
        padding: 0 1.55rem;
        letter-spacing: 0.1em;
        overflow: auto;
        display: block;
        text-align: center;
        border-radius: 0.25rem;
        border: solid 1px;
      }
    }
  }
}
</style>
