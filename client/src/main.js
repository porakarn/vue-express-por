// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'at-ui-style'
import atui from 'at-ui'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false

Vue.use(atui)
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
