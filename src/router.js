import Vue from 'vue'
import Router from 'vue-router'

import Contents from "@/components/Contents";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'contents',
      component: Contents
    }
  ]
})


