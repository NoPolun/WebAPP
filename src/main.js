// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' //添加vuex
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
Vue.prototype.qs = qs
import FastClick from 'fastclick'
Vue.use(VueAxios,axios);
Vue.config.productionTip = false
FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate() {
    Vue.prototype.bus = this   //进行组件间传值
  },
})
