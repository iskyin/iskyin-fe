import Vue from 'vue';
import App from './App.vue';
// 路由
import router from './router';
// 状态管理
import store from './store';
// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small', zIndex: 3000 }); // 全局设置组件大小和层级

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
