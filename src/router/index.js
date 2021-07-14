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
            name: "index_content",
            component: () => import ('@/components/index_content.vue')
        }, ]
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