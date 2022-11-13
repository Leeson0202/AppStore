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
        // Download 初始化获取所有标签
        DownLoadInit(context) {
            context.dispatch("GetTypes");
            context.dispatch("GetLabels");
        },

        // 初始化 获取 typeNames
        GetTypes(context, keyword) {
            let typesNames = null;
            axios.get("/app/types").then(
                res => {
                    typesNames = res.data;
                },
                error => {
                    typesNames = {
                        "all": "全部",
                        "android": "Android",
                        "windows": "Windows",
                        "mac": "Mac OS"
                    };
                    // console.log(error);
                }
            ).then(function () {     // 总会执行
                // console.log('GetTypes is committing');
                context.commit('SETTypeNames', typesNames);

            })
        },
        // 初始化 获取labeLnames
        GetLabels(context, keyword) {
            let labelNames = null;
            axios.get("/app/labels").then(
                res => {
                    labelNames = res.data
                },
                error => {
                    labelNames = {
                        "all": "全部",
                        "cut": "剪辑",
                        "system": "系统",
                        "program": "编程",
                        "tool": "工具"
                    };
                    // console.log(error);
                }
            ).then(function () {     // 总会执行
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