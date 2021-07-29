import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: () => import ('@/views/index.vue'),
        redirect:'/indexContent',
        children: [{
            path: "indexContent",
            name: "indexContent",
            component: () => import ('@/components/index_content.vue'),
            meta: {
                title: '首页',
                requireAuth: true
            }
        }, {
            path: "loan",
            name: "loan",
            component: () => import ('@/components/loan.vue'),
            meta: {
                title: '贷款',
                requireAuth: true
            },

        },{
            path: "credit",
            name: "credit",
            component: () => import ('@/components/credit.vue'),
            meta: {
                title: '投诉建议',
                requireAuth: true
            }
        },{
            path: "my",
            name: "my",
            component: () => import ('@/components/my.vue'),
            meta: {
                title: '我的',
                requireAuth: true
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
        path: '/step',
        name: 'step',
        component: () => import ('../views/step.vue'),
        meta: {
            title: '完善资料'
        }
    },
    {
        path: '/agreement',
        name: 'agreement',
        component: () => import ('../views/agreement.vue'),
        meta: {
            title: '用户须知'
        }
    },
    {
        path: '/productDetail',
        name: 'productDetail',
        component: () => import ('../views/productDetail.vue'),
        meta: {
            title: '详细信息',
            requireAuth: true
        }
    },
    {
        path: '/aboutOurs',
        name: 'aboutOurs',
        component: () => import ('../views/aboutOurs.vue'),
        meta: {
            title: '关于我们',
        }
    },
    {
        path: '/customer',
        name: 'customer',
        component: () => import ('../views/customer.vue'),
        meta: {
            title: '联系我们',
        }
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