import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

const state = {
    ksxx: {
        ksxm: { //考生姓名
            value: '阿皓',
            error: false,
            errorMessage: ''
        },
        xmpy: { //姓名拼音
            value: '',
            error: true,
            errorMessage: '姓名拼音不能为空'
        },
        zjlx: { //证件类型
            value: '01（居民身份证）',
            error: false,
            errorMessage: ''
        },
        zjhm: { //证件号码
            value: '32072319930101523X',
            error: false,
            errorMessage: ''
        },
        csrq: { //出生日期
            value: '1999-11-12',
            error: false,
            errorMessage: ''
        },
        ksxb: { //考生性别
            value: '男',
            error: false,
            errorMessage: '',
        },
        ksmz: { //考生民族
            value: '汉族',
            error: false,
            errorMessage: '',
        },
        hyzk: { //婚姻状况
            value: '未婚',
            error: false,
            errorMessage: '',
        },
        xyjr: { //现役军人
            value: '非现役军人',
            error: false,
            errorMessage: '',
        },
        zzmm: { //政治面貌
            value: '中国共产主义共青团团员',
            error: false,
            errorMessage: '',
        },
        jgd: { //籍贯地
            value: '北京市/市辖区/东城区',
            error: false,
            errorMessage: ''
        },
        hkd: { //户口地
            value: '北京市/市辖区/东城区',
            error: false,
            errorMessage: ''
        }
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;