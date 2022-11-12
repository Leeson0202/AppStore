import axios from 'axios'
import upload from "element-ui/packages/upload";


export default {
    namespaced: true,//开启命名空间
    state: {
        tag: false,
        type: "",
        label: "",
        page: 0,
        cards: []

    },
    actions: {
        UpdateCard(context) {
            context.state.tag = false
            axios.get("app/applist", {
                params: {
                    type: context.state.type,
                    label: context.state.label,
                    page: context.state.page
                }
            }).then(
                res => {
                    console.log(res);
                    context.commit("SETCards", res);
                },
                error => {
                    console.log(error)
                }
            )
        },
        UpdateByPage(context, page) {
            context.state.page = page;
            this.UpdateCard();
        },
        UpdateByType(context, type) {
            context.state.type = type;
            context.state.page = 0;
            this.UpdateCard();
        },
        UpdateByLabel(context, label) {
            context.state.label = label;
            context.state.page = 0;
            this.UpdateCard();
        },
        GetCards(context, type, label, page) {
            context.state.type = type;
            context.state.label = label;
            context.state.page = 0;
            this.UpdateCard();
        },

    },
    mutations: {
        SETCards(state, res) {
            state.tag = true;
            state.cards = res;
        }


    },
}