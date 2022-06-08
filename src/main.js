import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Modal from './Plagins/ModalWindow'
import contextMenu from './Plagins/ContextMenu'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(Modal)
Vue.use(contextMenu)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
