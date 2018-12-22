import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav2/Page6.vue'
import Composition from './views/nav2/Composition.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '语法',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/user', component: user, name: '巩固训练' },
            { path: '/form', component: Form, name: '添加错题' },
            { path: '/table', component: Table, name: '错题本' },
            { path: '/echarts', component: echarts, name: '错误分析' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '阅读',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page5', component: Page5, name: '每日一读' },
            { path: '/page4', component: Page4, name: '生词本' },
            { path: '/page6', component: Page6, name: '背单词' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '作文',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/composition', component: Composition, name: '批改' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;