import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HomeView.vue'
import Works from './components/WorksView.vue'
// import Work2 from './components/Work2View.vue'
import Skills from './components/SkillView.vue'
// import Contact from './components/ContactView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
     path: '/',
     redirect: { name: 'Home' }
   },
    {
      path: '/portfolio/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio/Works',
      name: 'Works',
      component: Works
    },
    // {
    //   path: '/Work2',
    //   name: 'work2',
    //   component: Work2
    // },
    {
      path: '/portfolio/Skills',
      name: 'Skills',
      component: Skills
    },
    // {
    //   path: '/Contact',
    //   name: 'contact',
    //   component: Contact
    // },
  ]
})
