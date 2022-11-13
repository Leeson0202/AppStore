//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import DownloadAbout from './module/download/DownloadAbout'
import DownloadCardsAbout from "@/store/module/download/DownloadCardsAbout";
import DownloadItemAbout from "@/store/module/download/DownloadItemAbout";

import CardAbout from "@/store/module/CardAbout";
import SwrapperAbout from "@/store/module/SwrapperAbout";

//应用Vuex插件
Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        DownloadAbout,
        DownloadCardsAbout,
        DownloadItemAbout,
        CardAbout,

        SwrapperAbout
    }
})