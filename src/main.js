import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import vuetify from './plugins/vuetify'
import x from './plugins/axios'
import {store} from './store/store'

Vue.config.productionTip = false
Vue.use(VueRouter)
x()

const router=new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
