//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import DownloadAbout from './DownloadAbout'
import SwrapperAbout from "@/store/SwrapperAbout";
//应用Vuex插件
Vue.use(Vuex)



export default new Vuex.Store({
    modules: {
        DownloadAbout,
        SwrapperAbout
    }
})