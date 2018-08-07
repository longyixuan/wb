import Vue from 'vue';
import Vant from 'vant';
import router from './router';
import store from './store';
import Layout from './components/layout';
import 'lib-flexible';
import './style/index';
import 'babel-polyfill';

Vue.config.productionTip = false;
Vue.use(Vant);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Layout)
})
