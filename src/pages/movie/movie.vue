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
      // 影院热映
      let MovieShowing = await getMovieShowing().then(res => res.json())
      this.MovieShowing = MovieShowing.subject_collection_items
      // 免费在线观影
      let MovieFreeStream = await getMovieFreeStream().then(res => res.json())
      this.MovieFreeStream = MovieFreeStream.subject_collection_items
      // 新片速递
      let MovieLatest = await getMovieLatest().then(res => res.json())
      this.MovieLatest = MovieLatest.subject_collection_items
      // 发现好电影
      let InterestsData = await getInterestsData().then(res => res.json())
      this.movieInterests = InterestsData[0].movie
      // 分类浏览
      this.MovieClass = await getMovieClass().then(res => res.json())

      this.hideLoading()
    },
    hideLoading () {
      this.showLoading = false
    }
  }
}
</script>

<style>
</style>
