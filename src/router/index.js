import { createRouter, createWebHistory } from 'vue-router'

import Index from "/src/components/Index.vue";
import NyStudent from "/src/components/NyStudent.vue";
import Styret from "/src/components/Styret.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/',      component: Index},
        {path: '/index', component: Index},
        {path: '/ny-student', component: NyStudent},
        {path: '/styret',     component: Styret},
    ],
})

export default router