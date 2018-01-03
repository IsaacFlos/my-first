import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import './common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueResource)
Vue.use(VueLazyLoad, {
	loading: require('./common/images/logo.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
