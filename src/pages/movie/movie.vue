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
import columnBox from '@/components/column'
import Category from '@/components/Category'
import loading from '@/components/loading'
import headerNav from '@/components/header'
import drownApp from '@/components/drownapp'
import { getMovieShowing, getMovieFreeStream, getMovieLatest, getInterestsData, getMovieClass } from '@/store/API'

export default {
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
      await this.getMovieShowingApi()
      this.getMovieFreeStreamApi()
      this.getMovieLatestApi()
      this.getInterestsDatagApi()
      this.getMovieClassApi()

      this.hideLoading()
    },
    // 影院热映
    async getMovieShowingApi () {
      try {
        const data = await getMovieShowing()
        this.MovieShowing = data.subject_collection_items
      } catch (err) {
        console.error('影院热映', err)
      }
    },
    // 免费在线观影
    async getMovieFreeStreamApi () {
      try {
        const data = await getMovieFreeStream()
        this.MovieFreeStream = data.subject_collection_items
      } catch (err) {
        console.error('免费在线观影', err)
      }
    },
    // 新片速递
    async getMovieLatestApi () {
      try {
        const data = await getMovieLatest()
        this.MovieLatest = data.subject_collection_items
      } catch (err) {
        console.error('新片速递', err)
      }
    },
    // 发现好电影
    async getInterestsDatagApi () {
      try {
        const data = await getInterestsData()
        this.movieInterests = data[0].movie
      } catch (err) {
        console.error('发现好电影', err)
      }
    },
    // 分类浏览
    async getMovieClassApi () {
      try {
        const data = await getMovieClass()
        this.MovieClass = data
      } catch (err) {
        console.error('分类浏览', err)
      }
    },
    hideLoading () {
      this.showLoading = false
    }
  }
}
</script>

<style>
</style>
