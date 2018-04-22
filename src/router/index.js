import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import About from '@/components/About'
import Knowledge from '@/components/Knowledge'
import MyWorks from '@/components/MyWorks'
import ContactMe from '@/components/ContactMe'

Vue.use(Router)

export default new Router({
  routes: [

  { path: '/',  component: MainPage },
  { path:'/About', component: About},
  { path: '/Knowledge', component: Knowledge },
  { path: '/MyWorks',  component: MyWorks },
  { path: '/ContactMe', component: ContactMe }



    
  
 
  ]
})
