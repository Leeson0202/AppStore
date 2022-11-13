import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Publish from '../pages/Publish.vue'
import Download from "@/pages/Download";
import DownloadItem from "@/components/downlowad/DownloadItem";
import Center from "@/pages/Center";
import Navigation from "@/pages/Navigation";


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
        name: 'download', path: "/download", component: Download,

    }, {
        name: 'center', path: "/center", component: Center
    }, {
        name: 'navigation', path: "/navigation", component: Navigation
    }, {
        name: 'app', path: "/app", component: DownloadItem,
    }

    ]
})
