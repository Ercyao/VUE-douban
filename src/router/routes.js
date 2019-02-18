const _import = file => resolve => require([`@/pages/${file}`], resolve)

export default [
  // 地址为空时跳转movie页面
  {
    path: '',
    redirect: '/home'
  },
  // 首页
  {
    path: '/home',
    name: 'Home',
    component: _import('home/home')
  },
  // 电影
  {
    path: '/movie',
    name: 'Movie',
    component: _import('movie/movie')
  },
  // 图书
  {
    path: '/books',
    name: 'Books',
    component: _import('books/books')
  },
  // 广播
  {
    path: '/broadcast',
    name: 'Broadcast',
    component: _import('broadcast/broadcast')
  },
  // 小组
  {
    path: '/group',
    name: 'Group',
    component: _import('group/group')
  },
  // 搜索
  {
    path: '/search',
    name: 'Search',
    component: _import('search/search')
  },
  {
    path: '*',
    component: resolve => require(['@/components/notfound'], resolve)
  }
]
