import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import introduce from '@/pages/introduce'
import aboutus from '@/pages/aboutus'
import joinus from '@/pages/joinus'
import school from '@/pages/school'
import post from '@/pages/post'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      query:{
        id:0
      }
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: introduce,
      query:{
        id:1
      }
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus,
      query:{
        id:3
      }
    },
    {
      path: '/joinus',
      name: 'joinus',
     
      component: joinus,
      // children:[
      //   {
      //     path: '/joinus/post',
      //     name: 'post',
      //     component: post,
      //   }
      // ]
     
    },
    {
      path: '/school',
      name: 'school',
      component: school,
      query:{
        id:3
      }
    },
    {
      path: '/post',
      name: 'post',
      component: post,
      query:{
        id:3
      }
    }
  ]
})
