import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueDashboard from './plugins/vue-dashboard'

Vue.config.productionTip = false

Vue.use(VueDashboard)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
