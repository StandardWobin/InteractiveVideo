import Vue from 'vue'
import App from './App.vue'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false


Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)



new Vue({
  render: h => h(App),
}).$mount('#app')
