import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/PageHome.vue'
import Works from './components/WorksView.vue'
// import Work2 from './components/Work2View.vue'
import Skill from './components/SkillView.vue'
// import Contact from './components/ContactView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Works',
      name: 'works',
      component: Works
    },
    // {
    //   path: '/Work2',
    //   name: 'work2',
    //   component: Work2
    // },
    {
      path: '/Skill',
      name: 'skill',
      component: Skill
    },
    // {
    //   path: '/Contact',
    //   name: 'contact',
    //   component: Contact
    // },
  ]
})
