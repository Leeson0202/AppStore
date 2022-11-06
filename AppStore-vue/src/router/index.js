import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Publish from '../components/Publish.vue'
import Download from "@/components/Download";
import Center from "@/components/Center";
import Navigation from "@/components/Navigation";


Vue.use(Router)
// 设置相同页面跳转
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
    routes: [{
        name: 'home', path: "/", component: Home
    }, {
        name: 'publish', path: "/publish", component: Publish
    }, {
        name: 'download', path: "/download", component: Download
    },{
        name: 'center', path: "/center", component: Center
    },{
        name: 'navigation', path: "/navigation", component: Navigation
    },

    ]
})
