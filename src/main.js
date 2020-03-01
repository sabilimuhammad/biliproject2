import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import plugins from './plugins';
// import '../src/assets/style.css'

Vue.config.productionTip = false

Vue.use(plugins);

new Vue({
  render: h => h(App),
}).$mount('#app')
