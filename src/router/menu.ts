import { RouteRecordRaw } from "vue-router";

export const Menu: RouteRecordRaw[] = [
    { path: '/home', name: 'home', component: () => import('@/pages/home/index.vue') },
    { path: '/blog', name: 'blog', component: () => import('@/pages/blogs/index.vue') },
    { path: '/engineer', name: 'engineer', component: () => import('@/pages/engineer/index.vue') },
]
