import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { Menu } from "./menu";
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/index',
    },
    ...Menu
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
export default router
