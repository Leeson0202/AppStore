import axios from 'axios'
import app from "@/App";


export default {
    namespaced: true,//开启命名空间
    state: {

        // itemTag 判断是否成功加载
        itemTag: false,
        // 下载的 card
        card: null,

    },
    actions: {
        // 初始化 通过 appid 获取 card
        GetCard(context, appid) {
            context.state.itemTag = false;
            let card = null;
            axios.get("/app/app/", {
                params: {
                    'id': appid,
                    t: Date.now()
                }
            }).then(
                res => {
                    console.log(res.data)
                    card = res.data;
                },
                error => {
                    console.log(error);
                }
            ).then(function () {     // 总会执行
                // console.log('GetTypes is committing');
                context.commit('SETCard', card);

            })
        },

    },
    mutations: {
        // 设置card内容
        SETCard(state, card) {
            if (card == null) {
                return
            }
            state.itemTag = true;
            state.card = card;
        }


    },
}