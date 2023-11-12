import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Preload from '@/pages/preload/index.vue'
import { Menu } from "./menu";


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '/',
        component: Preload
    }, {
        path: '/',
        component: () => import('@/layout/index.vue'),
        children: Menu
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
export default router
