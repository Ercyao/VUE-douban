import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

// webpack提供的require.ensure()
// vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。
// 这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes
})
