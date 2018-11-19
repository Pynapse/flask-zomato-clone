import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocketIO from 'vue-socket.io'

import './plugins/element.js'
let API_ENDPOINT = process.env.VUE_APP_API
console.log(API_ENDPOINT)
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = API_ENDPOINT
Vue.use(VueAxios, axios)

Vue.use(VueAuthenticate, {
  baseUrl: API_ENDPOINT,
  tokenName: 'access_token',
  storageType: 'cookieStorage'
})

Vue.use(new VueSocketIO({
  debug: true,
  connection: API_ENDPOINT + '/updates'
}))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')