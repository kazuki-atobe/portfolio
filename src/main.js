import Vue from 'vue'
import App from './App.vue'

import router from './router'
import vuetify from './plugins/vuetify'

import VueParticles from 'vue-particles'
import VueHead from 'vue-head'

Vue.use(VueParticles);
Vue.use(VueHead)

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
