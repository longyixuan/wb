import Vue from 'vue'
import Router from 'vue-router'

const routes = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        name: 'index',
        component: (resolve) => require(['@/views/index'], resolve)
    },
    {
        path: '/jbxx',
        meta: {
            title: '基本信息'
        },
        name: 'jbxx',
        component: (resolve) => require(['@/views/jbxx'], resolve)
    },
    {
        path: '/hjda',
        meta: {
            title: '户籍档案'
        },
        name: 'hjda',
        component: (resolve) => require(['@/views/hjda'], resolve)
    },
    {
        path: '/jtxx',
        meta: {
            title: '家庭信息'
        },
        name: 'jtxx',
        component: (resolve) => require(['@/views/jtxx'], resolve)
    },
    {
        path: '/gzxxjl',
        meta: {
            title: '工作与学习经历'
        },
        name: 'gzxxjl',
        component: (resolve) => require(['@/views/gzxxjl'], resolve)
    },
    {
        path: '/jcxx',
        meta: {
            title: '奖惩信息'
        },
        name: 'jcxx',
        component: (resolve) => require(['@/views/jcxx'], resolve)
    },
    {
        path: '/lxfs',
        meta: {
            title: '联系方式'
        },
        name: 'lxfs',
        component: (resolve) => require(['@/views/lxfs'], resolve)
    },
    {
        path: '/xlxx',
        meta: {
            title: '联系方式'
        },
        name: 'xlxx',
        component: (resolve) => require(['@/views/xlxx'], resolve)
    }
]

export default new Router({
    base: '/apply/jbxx/show.do', //使用正确的路由配置
    routes: routes
})