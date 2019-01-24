import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import(/* webpackChunkName: "Index" */ '@/views/index');
const Detail = () => import(/* webpackChunkName: "Detail" */ '@/views/detail');
const Time = () => import(/* webpackChunkName: "Time" */ '@/views/time');
const Message = () => import(/* webpackChunkName: "Message" */ '@/views/message');
const Version = () => import(/* webpackChunkName: "Version" */ '@/views/version');

// Error
const Error = () => import(/* webpackChunkName: "Error" */ '@/components/Error');

Vue.use(Router);

// ps:
// 有子路由的情况，路由name不设置
export default new Router({
  mode: 'history',
  routes: [

    // 登录
    {path: '/', name: 'Index', component: Index, meta: {title: '首页'}},
    {path: '/detail', name: 'Detail', component: Detail, meta: {title: '详情'}},
    {path: '/time', name: 'Time', component: Time, meta: {title: '时间轴'}},
    {path: '/message', name: 'Message', component: Message, meta: {title: '留言'}},
    {path: '/version', name: 'Version', component: Version, meta: {title: '版本'}},

    // 错误提示页
    {path: '/error', name: 'Error', component: Error, meta: {title: '错误提示'}},

    // 重定向
    {path: '*', redirect: '/error'},

  ]
})


