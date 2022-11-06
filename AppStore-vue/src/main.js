import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@wangeditor/editor/dist/css/style.css';
import App from './App.vue';
import store from './store'
import router from './router'
import Carousel3d from 'vue-carousel-3d'

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