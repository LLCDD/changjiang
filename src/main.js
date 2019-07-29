import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initUserInfo } from './util/user'
import Toasted from 'vue-toasted'
import { checkUpdate } from '@/update'
import http from './http'
import MintUI from 'mint-ui'
import Vant from 'vant';
import ElementUI from 'element-ui'

import FastClick from 'fastclick' //使用 fastclick 解决移动端 300ms 点击延迟
import filters from './filters' //将全部过滤器放在 filters/index.js 中便于管理
//技巧 同时 use 多个插件 被依赖的插件应放在偏后方
import '@/assets/js/protocol'
import '@/assets/js/nano-websocket-client'
// import { emoji } from './util/emoji.js'
import '@/assets/css/lib/reset.css'
import '@/assets/css/lib/border.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@/assets/js/share'
import '@/assets/js/share1'
import 'mint-ui/lib/style.css' 
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import 'vant/lib/index.css';

// import VueSocketio from 'vue-socket.io';
// import socketio from 'socket.io-client';
// Vue.use(VueSocketio, socketio('http://122.114.181.95:2120')); 
// Vue.use(VueSocketio,socketio('http://122.114.181.95:2120'), store);
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://122.114.181.95:2120', 
}))
Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)

Vue.use(Vant);
Vue.prototype.http = http
// 注册全局过滤器

filters(Vue)

Vue.use(Toasted, {
  position: 'bottom-center',
  singleton: true
})


// 给所有路由加上当页面加载的时候滚动条置顶
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
Vue.config.productionTip = false
// FastClick.attach(document.body)

Vue.mixin({
  computed: {
    plusReady() {
      return this.$store.state.isplusReady
    }
  }
})
console.log(process.env.NODE_ENV)

function plusReady() {
  checkUpdate()
  // 字体颜色
  window.plus.navigator.setStatusBarStyle('dart');
  // 头部背景颜色
  window.plus.navigator.setStatusBarBackground('#000000');
  // 设置一个全局plusready状态
  store.state.isplusReady = true
  store.state.storageEngine = plus.storage
  plus.screen.lockOrientation('portrait')
  plus.navigator.setFullscreen(false)

  // 设置一个全局plusready状态
  store.state.isplusReady = true
  store.state.storageEngine = plus.storage
  // 监听返回按键
  let now = false
  let time = null
  plus.key.addEventListener('backbutton', function () {
    // 如果是首页则执行退出操作
    if (
      router.currentRoute.path === '/index' ||
      router.currentRoute.path === '/login'
    ) {
      time = null
      if (now) {
        now = false
        plus.runtime.quit()
      } else {
        now = true
        plus.nativeUI.toast('再按一次退出', { duration: 'short' })
        time = setTimeout(() => {
          now = false
        }, 1000)
      }
      // 如果是内页则执行路由返回操作
    } else {
      router.go(-1)
    }
  })
  

  if (process.env.NODE_ENV === 'production') {
    //初始化登录信息
    initUserInfo()

    let app = new Vue({
      router,
      store,
      created() {
      },
      render: h => h(App)
    }).$mount('#app')
  }
}

if (window.plus) {
  plusReady()
} else {
  document.addEventListener('plusready', plusReady, false)
}

console.log(window.navigator.appVersion)
if (
  process.env.NODE_ENV === 'development' ||
  window.navigator.appVersion.indexOf('Html5Plus') === -1
) {
  //初始化登录信息
  initUserInfo()

  let app = new Vue({
    router,
    store,
    created() {
      
    },
    render: h => h(App)
  }).$mount('#app')
}
