// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import newsList from './newslistm'
import "../../assets/css/common.less"
import "../../assets/js/common"
import Router from 'vue-router'
Vue.use(Router)
var router=new Router({
  mode:"history",
  routes:[{
    path:"/:name/",
    name:"newsList",
    component:"newsList"
  },{
    path:"/",
    name:"newsList",
    component:"newsList"
  }]
})

new Vue({
  el: '#app',
  router,
  template: '<newsList/>',
  components: { newsList }
})
