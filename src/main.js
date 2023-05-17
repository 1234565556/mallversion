import Vue from 'vue'
import App from './App.vue'

// 导入所有组件
import vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false

Vue.use(vant)

new Vue({
  render: h => h(App),
}).$mount('#app')
