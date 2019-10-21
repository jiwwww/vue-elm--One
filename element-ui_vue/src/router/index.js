import Vue from 'vue'
import Router from 'vue-router'
import Shouinfo from '@/components/Shouinfo'
import List from '@/components/List'
import Details from '@/components/Details'
import Register from '@/components/Register'
// import Scss from '@/components/Scss'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Shouinfo/List'
    },
    {
      path:'/Shouinfo',
      component:Shouinfo,
      children:[
        {
          path:"List",
          component:List
        }
      ]
    },
    {
      path:'/Details',
      name:Details,
      component:Details
    },
    {
      path:'/Register',
      name:Register,
      component:Register
    },
    // {
    //   path:'/Scss',
    //   name:Scss,
    //   component:Scss
    // }
  ]
})
