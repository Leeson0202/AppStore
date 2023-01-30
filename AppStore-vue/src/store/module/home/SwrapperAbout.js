import axios from 'axios'


export default {
    namespaced: true,//开启命名空间
    state: {
        // 最火爆的6款软件推荐
        apps: [],
        // 机型 type
        typeNames: {},

        // 分类 label
        labelNames: {},
    },
    actions: {
        // axios 获取apps
        GetApps(context){
            let apps = null;
            axios.get("/hot/apps").then(
                res => {
                    apps = res.data.apps;
                },
                error => {
                    // console.log(error);
                }
            ).then(function () {     // 总会执行
                // console.log('GetTypes is committing');
                context.commit('SETApps', apps);

            })
        },



    },
    mutations: {
        // apps 推荐的apps
        SETApps(state, apps) {
            state.apps = apps;
        }


    },
}