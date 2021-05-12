import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './axios'
import './permission'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '../src/assets/font/font.css'

import Vue2Emoji from 'vuejs-emoji'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(Vue2Emoji)

Vue.use(ElementUI);
Vue.use(mavonEditor);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
