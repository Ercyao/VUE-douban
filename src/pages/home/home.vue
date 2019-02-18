<template>
  <div class="page">
    <headerNav></headerNav>
    <div v-show="!showLoading">
      <ul class="quick-nav">
        <li><a href="https://m.douban.com/movie/nowintheater?loc_id=108288">影院热映</a></li>
        <li><a :href="QuickData.url">{{QuickData.name}}</a></li>
        <li><a id="hot-topics"
             href="https://m.douban.com/time/?dt_time_source=douban-msite_shortcut">豆瓣时间</a></li>
        <li><a href="https://www.douban.com/doubanapp/app?channel=card_home&direct_dl=1">使用豆瓣App</a></li>
      </ul>
      <div class="recommend-box">
        <div v-for="item in recommendData"
             :key="item.id">
          <p class="time">{{item.time}}</p>
          <ul v-if="item.data.length > 0">
            <li v-for="feed in item.data"
                :key="feed.id">
              <a :href="feed.target.url">
                <div class="recommend-content">
                  <div class="left">
                    <p class="title">{{feed.title}}</p>
                    <p class="desc">{{feed.target.desc}}</p>
                  </div>
                  <div class="right">
                    <img :src="feed.target.cover_url" />
                  </div>
                </div>
                <p class="author"><span>by {{feed.target.author.name}}</span><span>{{feed.source_cn}}</span></p>
              </a>
            </li>
          </ul>
          <p v-else
             class="tip-text"> 暂无文章*_*</p>
        </div>
      </div>
      <div class="load-more"
           @click="loaderMore">
        <span v-show="downFlag === false">点击加载更多</span>
        <span class="active"
              v-show="downFlag === true">加载中…</span>
      </div>
      <div class="goTop"
           v-show="isShow"
           @click="goTopScroll">返回顶部</div>
      <drown-app></drown-app>
    </div>

    <loading v-show="showLoading"></loading>

  </div>
</template>

<script>
import loading from '@/components/loading'
import headerNav from '@/components/header'
import drownApp from '@/components/drownapp'
import { getRecommend, getQuickData } from '@/store/API'

export default {
  data () {
    return {
      isShow: false,
      showLoading: true,
      downFlag: false,
      next_date: '',
      recommendData: [],
      QuickData: {} // 话题
    }
  },
  components: {
    headerNav,
    drownApp,
    loading
  },
  created () {
    this.getBookData()
  },
  methods: {
    async getBookData () {
      this.getRecommendApi()
      this.getQuickDataApi()

      this.hideLoading()
    },
    // 加载更多
    async loaderMore () {
      this.downFlag = true
      await this.getRecommendApi()
      this.downFlag = false
    },
    changeRecData () {
      this.rec_start = parseInt(10 * Math.random())
      this.getBookData()
    },
    hideLoading () {
      this.showLoading = false
    },
    goTopScroll () {
    },
    // 推荐
    async getRecommendApi () {
      try {
        const data = await getRecommend(this.next_date)
        this.next_date = data.date
        this.recommendData.push({ time: this.next_date, data: data.recommend_feeds })
        console.log(44, data)
      } catch (err) {
        console.error('getRecommendApi', err)
      }
    },
    // 随机话题
    async getQuickDataApi () {
      try {
        const data = await getQuickData()
        let i = Math.floor(Math.random() * 10) // 1到10的随机数
        this.QuickData = data[i] // 随机显示
        console.log(45, data)
      } catch (err) {
        console.error('getQuickDataApi', err)
      }
    }
  }

}
</script>

<style lang="less" scoped>
@import "../../assets/style/less.less";

.quick-nav {
  overflow: hidden;
  padding: 0.5rem 0 2rem;
  li {
    float: left;
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
    font-size: 15px;
    a {
      background-color: #f6f6f6;
      color: #494949;
      display: block;
      text-align: center;
      height: 3rem;
      line-height: 3rem;
      border-radius: 2px;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }
}
.recommend-box {
  .time {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 18px;
    color: #111;
    .border(0, 0.1rem, 0, 0);
  }
  ul {
    li {
      padding: 2rem 0;
      .border(0, 0.1rem, 0, 0);
    }
  }
  .author {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #cccccc;
    padding-top: 1rem;
  }
}
.recommend-content {
  display: -webkit-flex;
  display: flex;
  width: 100%;
  overflow: hidden;
  .left {
    -webkit-flex: 2;
    flex: 2;
    .title {
      .ellipsis(2);
      text-align: justify;
      font-size: 17px;
      font-weight: 500;
      line-height: 1.41;
      color: #494949;
      margin-bottom: 6px;
    }
    .desc {
      .ellipsis(3);
      text-align: justify;
      color: #aaa;
      font-size: 12px;
      line-height: 1.5;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
  .right {
    height: 7rem;
    overflow: hidden;
    img {
      width: 5rem;
      padding-left: 20%;
    }
  }
}
.load-more {
  margin: 1rem 20%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  color: #fff;
  span {
    background: #aaa;
    width: 100%;
    height: 100%;
  }
  .active {
    opacity: 0.5;
  }
}
.goTop {
  position: fixed;
  bottom: 2.5rem;
  right: 0.5rem;
  width: 40px;
  height: 40px;
  padding: 10px;
  text-align: center;
  color: #ffffff;
  border-radius: 50%;
  background: @green;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
</style>
