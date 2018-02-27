import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import Home from '@/pages/home/home'
import Movie from '@/pages/movie/movie'
import Books from '@/pages/books/books'
import Broadcast from '@/pages/broadcast/broadcast'
import Group from '@/pages/group/group'
import Search from '@/pages/search/search'

Vue.use(Router)

const routers = new Router({
  routes: [
    //地址为空时跳转movie页面
    {
      path: '',
      redirect: '/home'
    },
    //首页
    {
      path: '/home',
      name:'Home',
      component: Home
    },
    //电影
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    //图书
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    //广播
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    //小组
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    //搜索
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
export  default  routers



