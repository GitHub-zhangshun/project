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
            component: () => import ('@/components/index_content.vue')
        }, {
            path: "loan",
            name: "loan",
            component: () => import ('@/components/loan.vue')
        },{
            path: "credit",
            name: "credit",
            component: () => import ('@/components/credit.vue')
        },{
            path: "my",
            name: "my",
            component: () => import ('@/components/my.vue')
        }]
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router