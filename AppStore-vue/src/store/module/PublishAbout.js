import axios from 'axios'


export default {
    namespaced: true,//开启命名空间
    state: {
        // title
        title: "",

    },
    actions: {
        GetLabels(context, keyword) {
            let labelNames = {'all': '全部', 'learn': '学习', 'enjoy': '娱乐', 'game': '游戏', 'tools': '工具'};
            axios.get(context.state.base_url + "/search", {params: {"keywords": keyword}}).then(
                res => {
                    // console.log(res.data);
                    if (res.data.code === 200) {
                    }
                },
                error => {
                    // console.log(error);
                }
            ).then(function () {     // 总会执行
                // console.log('GetLabels is committing');
                context.commit('SETLabelNames', labelNames);
            })
        }
    },
    mutations: {
        // title
        SETTitle(state, title){
            state.title = title;
        },
    },
}