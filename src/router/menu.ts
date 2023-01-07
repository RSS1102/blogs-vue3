import { RouteRecordRaw } from "vue-router";
import Index from '@/pages/home/index.vue'
import Blog from "@/pages/blogs/index.vue"
import Engineer from '@/pages/engineer/index.vue'

export const Menu: RouteRecordRaw[] = [
    { path: '/index', name: 'index', component: Index },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/engineer', name: 'engineer', component: Engineer },
]
