import axios from 'axios'


export default {
    namespaced: true,//开启命名空间
    state: {
        // 机型 type
        typeNames: {},

        // 分类 label
        labelNames: {},

        tag: false,
        // 选中的type
        type: "all",
        // 选中的label
        label: "all",
        // 默认 第一页开始
        page: 0,
        allPage: 10,
        // 返回的数据
        cards: []

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
                    console.log(error);
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
                    console.log(error);
                }
            ).then(function () {     // 总会执行
                context.commit('SETLabelNames', labelNames);
            })
        },

        // 更新 cards
        UpdateCards(context) {
            context.state.tag = false;
            axios.get("/app/applist", {
                params: {
                    type: context.state.type === "all" ? null : context.state.type,
                    label: context.state.label === "all" ? null : context.state.label,
                    page: context.state.page
                }
            }).then(
                res => {
                    console.log(res.data);
                    context.commit("SETCards", res.data);
                },
                error => {
                    console.log(error)
                }
            )
        },
        // 通过 page 更新
        UpdateByPage(context, page) {
            context.state.page = page;
            this.UpdateCards();
        },
        // 通过 type label 更新
        GetCards(context, type, label, page) {
            if (type) context.state.type = type;
            if (label) context.state.label = label;
            if (page)
                context.state.page = page;
            else
                context.state.page = 0;
            this.UpdateCard();
        },
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

        // cards
        SETCards(state, res) {
            state.tag = true;
            state.cards = res;
        },
        // 设置 type
        SETType(state, type) {
            state.type = type;
            state.page = 0;
        },
        // 设置 label
        SETLabel(state, label) {
            state.label = label;
            state.page = 0;
        },
        // 设置 page
        SETPage(state, page) {
            state.page = page;
        }


    },
}