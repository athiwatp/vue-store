import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueWaves from 'vue-waves'
import routes from './routes'
import App from './App'
Vue.use(VueResource)
Vue.use(VueWaves)
Vue.http.options.root = '/static/mock'
Vue.use(VueRouter)
Vue.transition('fade', {
    enterClass: 'fadeIn',
    leaveClass: 'fadeOut'
})
const router = new VueRouter()
router.map(routes)
router.start(App, '#app')