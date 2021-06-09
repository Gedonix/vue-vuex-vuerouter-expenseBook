import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Read from '../views/Read.vue'
import Write from '../views/Write.vue'
import Edit from '../views/Edit.vue'

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/read',
            name: 'Read',
            component: Read
        },
        {
            path: '/write',
            name: 'Write',
            component: Write
        },
        {
            path: '/edit',
            name: 'Edit',
            component: Edit
        },
        {
            path: '/:notFound(.*)',
            redirect: { name: 'Home' }
        }
    ],
    linkActiveClass: 'link_active',
    linkExactActiveClass: 'link_active'
})