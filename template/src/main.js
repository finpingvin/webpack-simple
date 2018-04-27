import 'es6-promise/auto'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.use(Vuelidate);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
