import Vue from 'vue'
import Router from 'vue-router'

const routes = [
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
    }
]

export default new Router({
    base: '/message.do/', //使用正确的路由配置
    routes: routes
})