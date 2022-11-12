import axios from 'axios'


export default {
    namespaced: true,//开启命名空间
    state: {
        // 机型 type
        typeNames: {},

        // 分类 label
        labelNames: {},

    },
    actions: {
        GetTypes(context, keyword) {

            let typesNames = {'all': '全部', 'mac': 'Mac OS', 'windows': 'Windows', 'android': 'Android'};
            // console.log(context, keyword);
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
                // console.log('GetTypes is committing');
                context.commit('SETTypeNames', typesNames);

            })
        },
        GetLabels(context, keyword) {
            let labelNames = {'all':'全部','learn': '学习', 'enjoy': '娱乐', 'game': '游戏', 'tools': '工具'};
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
        // type 类型
        SETTypeNames(state, typeNames) {
            state.typeNames = typeNames;
        },

        // label 分类
        SETLabelNames(state, labelNames) {
            state.labelNames = labelNames;
        },


    },
}