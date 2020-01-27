import Vue from 'vue'
import App from './App.vue'
import store from './store'
//css の読み込み(グローバル css )
import './assets/css/styles.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
