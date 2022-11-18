import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@wangeditor/editor/dist/css/style.css';
import "@/assets/css/markdown.mini.css"
import axios from 'axios'

import App from './App.vue';
import store from './store'
import router from './router'
import Carousel3d from 'vue-carousel-3d'


Vue.prototype.$axios = axios

// axios.defaults.baseURL = 'http://localhost:8011';//后端开发环境地址
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头信息。
//axios.defaults.headers.common['accessToken'] = 'FA4C308D5E8F6409E01344ADDAEB4C71';


Vue.use(Carousel3d)
Vue.use(ElementUI);

// 关闭测试提示
Vue.config.productionTip = false;


new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});