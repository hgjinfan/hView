import Vue from 'vue'
import App from './App.vue'
import { Title } from '../src/index'
console.log(Title)
Vue.config.productionTip = false
Vue.use(Title)
new Vue({
  render: h => h(App),
}).$mount('#app')