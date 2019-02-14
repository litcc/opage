import Vue from 'vue'
import App from './App.vue'
import 'mdui/dist/css/mdui.css'
import 'mdui/dist/js/mdui.js'
import './assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
