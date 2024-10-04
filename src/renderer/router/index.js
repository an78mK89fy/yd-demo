import { createRouter, createWebHashHistory } from 'vue-router'
import { ipcRendererOnRouter } from '@/renderer/utils/ipcRenderer/ipcRendererOn.js'
import Lock from '@/renderer/views/Lock.vue'
import Settings from '@/renderer/views/Settings.vue'
import User from '@/renderer/views/User.vue'
import IndexLogin from '@/renderer/views/login/IndexLogin.vue'
import Login from '@/renderer/views/login/Login.vue'
import Register from '@/renderer/views/login/Register.vue'
import IndexMain from '@/renderer/views/main/IndexMain.vue'
import Dashboard from '@/renderer/views/main/Dashboard.vue'
import Menu from '@/renderer/views/main/Menu.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', component: IndexLogin, redirect: '/login', children: [
                { path: '/login', component: Login },
                { path: '/register', component: Register }
            ]
        },
        {
            path: '/main', component: IndexMain, redirect: '/dashboard', children: [
                { path: '/dashboard', component: Dashboard },
                { path: '/menu', component: Menu }
            ]
        },
        { path: '/lock', component: Lock },
        { path: '/settings', component: Settings },
        { path: '/user', component: User }
    ]
})

try { ipcRendererOnRouter(router) } catch { /* 不使用try无法在浏览器调试 */ }

export default router