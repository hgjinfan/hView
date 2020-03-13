/* eslint-disable */
import App from './App.vue'
import router from './router'
import { Title, Button } from '../src/index'
import demoBlock from './components/demo-block'
Vue.config.productionTip = false
Vue.use(Title)
Vue.use(Button)
Vue.component(demoBlock.name, demoBlock)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')