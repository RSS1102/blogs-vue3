import { RouteRecordRaw } from "vue-router";
import Index from '@/pages/home/index.vue'
import Blog from "@/pages/blogs/index.vue"
import Progress from '@/pages/progress/index.vue'

export const Menu: RouteRecordRaw[] = [
    { path: '/index', component: Index },
    { path: '/blog', component: Blog },
    { path: '/progress', component: Progress },
]
