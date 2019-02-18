<template>
  <div class="page">
    <headerNav></headerNav>
    <div v-show="!showLoading">
      <column-box title="最受关注图书 | 虚构类"
                  type="ImgCover"
                  :items="BookFiction"></column-box>
      <column-box title="最受关注图书 | 非虚构类"
                  type="ImgCover"
                  :items="BookNoFiction"></column-box>
      <column-box title="豆瓣书店"
                  type="ImgCover"
                  :items="ProductBook">
        <div class="promItem"
             slot="promItem">
          <a :href="ProductBookHUrl">
            <img :src="ProductBookHImg"
                 class="cover">
            <div class="content">
              <p><span class="name">{{ProductBookHTitle}}</span><span class="price">¥ {{ProductBookHPrice}}</span></p>
              <p class="info">{{ProductBookHInfo}}</p>
            </div>
          </a>
        </div>
      </column-box>
      <column-box title="发现好图书"
                  type="TextCover"
                  :items="booksInterests"></column-box>
      <Category :items="BookClass"></Category>
      <drown-app></drown-app>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import columnBox from '@/components/columnBox'
import Category from '@/components/category'
import loading from '@/components/loading'
import headerNav from '@/components/header'
import drownApp from '@/components/drownapp'
import { getBookFiction, getBookNoFiction, getProductBook, getInterestsData, getBookClass } from '@/store/API'

export default {
  data () {
    return {
      showLoading: true,
      BookFiction: null,
      BookNoFiction: null,
      ProductBook: null,
      ProductBookHUrl: null,
      ProductBookHImg: null,
      ProductBookHPrice: null,
      ProductBookHTitle: null,
      ProductBookHInfo: null,
      booksInterests: null,
      BookClass: null
    }
  },
  components: {
    headerNav,
    drownApp,
    loading,
    Category,
    columnBox
  },
  created () {
    this.getMovieData()
  },
  methods: {
    async getMovieData () {
      this.getBookFictionApi()

      this.hideLoading()
    },
    // 最受关注图书 | 虚构类
    async getBookFictionApi () {
      let BookFiction = await getBookFiction().then(res => res.json())
      this.BookFiction = BookFiction.subject_collection_items
    },
    // 最受关注图书 | 非虚构类
    async getBookNoFictionApi () {
      let BookNoFiction = await getBookNoFiction().then(res => res.json())
      this.BookNoFiction = BookNoFiction.subject_collection_items
    },
    // 豆瓣书店
    async getProductBookApi () {
      let ProductBook = await getProductBook().then(res => res.json())
      this.ProductBook = ProductBook.subject_collection_items
      let ProductBookHeader = ProductBook.header
      this.ProductBookHUrl = ProductBookHeader.url
      this.ProductBookHImg = ProductBookHeader.cover.url
      this.ProductBookHPrice = ProductBookHeader.price
      this.ProductBookHTitle = ProductBookHeader.title
      this.ProductBookHInfo = ProductBookHeader.info
    },
    // 发现好书
    async getInterestsDatagApi () {
      let data = await getInterestsData().then(res => res.json())
      this.booksInterests = data[0].movie
    },
    hideLoading () {
      this.showLoading = false
    }
  }
}
</script>

<style lang="less" scoped>
.promItem {
  display: block;
  overflow: hidden;
  margin-top: 15px;
  .cover {
    float: left;
    width: 100px;
    margin-right: 15px;
  }
  .content {
    overflow: hidden;
    .name {
      font-size: 19px;
      color: #494949;
      margin-right: 40px;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
    .price {
      float: right;
      color: #e76648;
      font-size: 16px;
      line-height: 22px;
    }
    .info {
      color: #aaaaaa;
      margin-top: 0.8rem;
      font-size: 0.9rem;
      line-height: 1.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
  }
}
</style>
