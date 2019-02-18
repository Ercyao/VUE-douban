<template>
  <div class="page">
    <headerNav></headerNav>
    <div v-show="!showLoading">
      <column-box title="影院热映"
                  type="ImgCover"
                  :items="MovieShowing"></column-box>
      <column-box title="免费在线观影"
                  type="ImgCover"
                  :items="MovieFreeStream"></column-box>
      <column-box title="新片速递"
                  type="ImgCover"
                  :items="MovieLatest"></column-box>
      <column-box title="发现好电影"
                  type="TextCover"
                  :items="movieInterests"></column-box>
      <Category :items="MovieClass"></Category>
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
import { getMovieShowing, getMovieFreeStream, getMovieLatest, getInterestsData, getMovieClass } from '@/store/API'

export default {
  components: {
    headerNav,
    drownApp,
    loading,
    Category,
    columnBox
  },
  data () {
    return {
      showLoading: true,
      MovieShowing: null,
      MovieFreeStream: null,
      MovieLatest: null,
      movieInterests: null,
      MovieClass: null
    }
  },
  created () {
    this.getMovieData()
  },
  methods: {
    async getMovieData () {
      await this.getMovieShowingApi()
      this.getMovieFreeStreamApi()
      this.getMovieLatestApi()
      this.getInterestsDatagApi()
      this.getMovieClassApi()

      this.hideLoading()
    },
    // 影院热映
    async getMovieShowingApi () {
      const data = await getMovieShowing().then(res => res.json())
      this.MovieShowing = data.subject_collection_items
    },
    // 免费在线观影
    async getMovieFreeStreamApi () {
      const data = await getMovieFreeStream().then(res => res.json())
      this.MovieFreeStream = data.subject_collection_items
    },
    // 新片速递
    async getMovieLatestApi () {
      const data = await getMovieLatest().then(res => res.json())
      this.MovieLatest = data.subject_collection_items
    },
    // 发现好电影
    async getInterestsDatagApi () {
      const data = await getInterestsData().then(res => res.json())
      this.movieInterests = data[0].movie
    },
    // 分类浏览
    async getMovieClassApi () {
      const data = await getMovieClass().then(res => res.json())
      this.MovieClass = data
    },
    hideLoading () {
      this.showLoading = false
    }
  }
}
</script>

<style>
</style>
