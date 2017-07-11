import Vue from 'vue'
import App from './app/App.vue'
import Vuetify from 'vuetify'
import router from './router'
import store from './store/index'
import * as VueGoogleMaps from 'vue2-google-maps'
// import 'vue-material/dist/vue-material.css'
// import VueMaterial from 'vue-material'
//
// Vue.use(VueMaterial)
Vue.use(Vuetify)
// Vue.use(VueMaterialize)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBVlyBPy1nPalt0LluNxkv6_bzpAlfxpFk'
    // libraries: 'places', //// If you need to use place input
  }
})


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  template: '<App/>',
  components: { App }
})
