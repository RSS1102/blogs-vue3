import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/pages/Login";
import Article from "../components/business/CustomArticle";
import Register from "../components/login/Register";


Vue.use(VueRouter)

//路由守卫

const routes = [
    //redirect这是一个默认路由
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, meta: { title: '首页', } },
    { path: '/index', component: Article, meta: { title: '阿力的小破站', } },
    { path: '/register', component: Register, meta: { title: '账号注册', } },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
