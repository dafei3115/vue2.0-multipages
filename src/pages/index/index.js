// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import Router from "vue-router"
Vue.config.productionTip = false

Vue.use(Router)

var router=new Router({
  mode:"history"
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
