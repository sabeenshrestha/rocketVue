import Vue from 'vue'
import Router from 'vue-router'
import Rockets from '@/views/Rockets.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rocket',
      component: Rockets
    },
    
  ]
})
