/* eslint-disable */
const docs = () => import('./components/docs')
Vue.use(VueRouter)
const mdList = require.context('./docs', false, /./)
console.log(mdList)
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/guide/intro'
        },
        { path: '/guide/intro', component: docs },
        {
            path: '/basic/:compName',
            component: docs
        }
    ]
})

