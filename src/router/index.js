import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: () => import ('@/views/index.vue'),
        redirect:'indexContent',
        children: [{
            path: "indexContent",
            name: "indexContent",
            component: () => import ('@/components/index_content.vue'),
            meta: {
                title: '首页'
            }
        }, {
            path: "loan",
            name: "loan",
            component: () => import ('@/components/loan.vue'),
            meta: {
                title: '贷款'
            }
        },{
            path: "credit",
            name: "credit",
            component: () => import ('@/components/credit.vue'),
            meta: {
                title: '信用报告'
            }
        },{
            path: "my",
            name: "my",
            component: () => import ('@/components/my.vue'),
            meta: {
                title: '我的'
            }
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ('../views/login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/form',
        name: 'form',
        component: () => import ('../views/form.vue'),
    }
]

const router = new VueRouter({
    routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router