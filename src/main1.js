import Vue from 'vue';
import Vant from 'vant';
import router from './router';
import store from './store';
import Layout from './components/layout';
import 'lib-flexible';
import './style/index';
import VeeValidate, { Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';//引入中文文件
import 'babel-polyfill';

Vue.config.productionTip = false;
// 配置中文
Validator.addLocale(zh_CN);

const config = {
    locale: 'zh_CN'
};
Vue.use(VeeValidate, config);
const dictionary = {
    zh_CN: {
        messages: {
            email: () => '请输入正确的邮箱格式',
            required: (field) => "请输入" + field
        },
        attributes: {
            email: '邮箱',
            password: '密码',
            name: '账号',
            phone: '手机',
            xmpy: '姓名拼音'
        }
    }
};

Validator.updateDictionary(dictionary);
Vue.use(Vant);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Layout)
})
