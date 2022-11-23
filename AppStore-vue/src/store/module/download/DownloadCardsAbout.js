import axios from 'axios'


export default {
    namespaced: true,//开启命名空间
    state: {
        tag: false,
        // 选中的type
        type: "all",
        // 选中的label
        label: "all",
        // 默认 第一页开始
        page: 0,
        total: 10,
        allPage: 10,
        // 返回的数据
        cards: []

    },
    actions: {
        // 更新 cards
        UpdateCards(context) {
            context.state.tag = false;
            axios.get("/app/cards", {
                params: {
                    type: context.state.type === "all" ? null : context.state.type,
                    label: context.state.label === "all" ? null : context.state.label,
                    page: context.state.page
                }
            }).then(
                res => {
                    console.log(res.data);
                    context.commit("SETTotal", res.data.total);
                    context.commit("SETCards", res.data.cards);
                },
                error => {
                    // 数据获取失败
                    // console.log(error)
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
        // cards
        SETCards(state, res) {
            if (res === null || res === undefined) return
            state.tag = true;
            state.cards = res;
        },
        SETTotal(state, res) {
            state.total = res;
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