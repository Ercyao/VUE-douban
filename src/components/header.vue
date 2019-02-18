<template>
  <div>
    <template v-if="isShow">
      <div id="header-nav">
        <router-link :to="{name:'Home'}"><img src="../assets/img/title.png"
               class="title" /></router-link>
        <ul class="nav">
          <li @click="gotoAddress({name:'Movie'})"
              style="color: #2384E8;">电影</li>
          <li @click="gotoAddress({name:'Books'})"
              style="color: #9F7860;">图书</li>
          <li @click="gotoAddress({name:'Broadcast'})"
              style="color: #E4A813;">广播</li>
          <li @click="gotoAddress({name:'Group'})"
              style="color: #2AB8CC;">小组</li>
        </ul>
        <span class="search"
              @click="showSearch"></span>
      </div>
    </template>
    <template v-else>
      <div class="search_box">
        <div class="search_input">
          <input type="text"
                 v-model.trim="keyword"
                 placeholder="请输入关键字"
                 @keyup.enter="goSearch()" />
          <span class="close"
                @click="closeSearch()">关闭</span>
        </div>
        <ul class="search_class">
          <li v-for="item in SearchClass" :key="item.url">
            <a :href="item.url">
              <p class="name"
                 :style="{color:item.color}">{{item.name}}</p>
              <p class="des">{{item.des}}</p>
            </a>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import {getSearchClass} from '@/store/API'
export default {
  data () {
    return {
      keyword: '',
      isShow: true,
      SearchClass: null
    }
  },
  created () {
    this.getSearchClassApi()
  },
  methods: {
    async getSearchClassApi () {
      try {
        this.SearchClass = await getSearchClass()
      } catch (err) {
        console.error('getSearchClassApi', err)
      }
    },
    gotoAddress (name) {
      this.$router.push(name)
    },
    showSearch () {
      this.isShow = false
    },
    closeSearch () {
      this.isShow = true
    },
    goSearch () {
      this.$router.push({ path: '/search', query: { q: this.keyword } })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/style/less.less";
#header-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  max-width: 650px;
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: 3.5rem;
  padding: 0 18px;
  background: #fff;
  border-bottom: 0.1rem solid #f3f3f3;
  .title {
    -ms-flex: 1;
    flex: 1;
    max-width: 3.5rem;
    word-break: break-all;
  }
  .nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-pack: end;
    justify-content: flex-end;
    li {
      display: inline-block;
      font-size: 1.1rem;
      margin-right: 1rem;
    }
  }
  .search {
    display: inline-block;
    width: 2rem;
    height: 1.5rem;
    margin-top: 0.4rem;
    background: url(../assets/img/search.png) no-repeat;
    background-size: cover;
  }
}

.search_box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #ffffff;
  .search_input {
    width: 100%;
    height: 2.5rem;
    padding: 15px;
    border-bottom: 1px solid #f3f3f3;
    input {
      float: left;
      width: 75%;
      height: 2.5rem;
      font-size: 14px;
      background: #f1f1f1;
      margin-right: 10px;
      border: 0;
      border-radius: 5px;
      padding: 0 10px;
    }
    .close {
      color: #42bd56;
      font-size: 16px;
      margin-top: 5px;
    }
  }
  .search_class {
    margin: 20px 0;
    li {
      float: left;
      width: 20%;
      height: 4rem;
      margin: 10px 6%;
      text-align: center;
      .name {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
      }
      .des {
        color: #999;
        height: 17px;
        font-size: 12px;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
