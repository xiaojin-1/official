// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
 import 'vue-video-player/src/custom-theme.css'
  //引入hls.js
//import 'videojs-contrib-hls.js/src/videojs.hlsjs'
import Video from 'video.js'



import  VueAwesomeSwiper from 'vue-awesome-swiper'
// import  'swiper/dist/css/swiper.css'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import Axios from 'axios'
let baseUrl = '';
if (location.hostname == 'www.zjchuangxue.com') { //正式环境
  baseUrl = ' ';
} else if (location.hostname == 'test1.zjchuangxue.com') { //测试环境
    baseUrl = ' ';
}  else { //开发环境
    baseUrl = '/api'
}
Vue.prototype.$video = Video
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = baseUrl
Axios.defaults.headers.post['Content-Type'] = 'application/json';
//Axios.defaults.headers.post['token'] =  localStorage.getItem('_token') //localStorage.getItem('_token')    //localStorage.getItem('_token'); 
Vue.use(VideoPlayer);
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
