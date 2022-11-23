import axios from 'axios'

export default {
    namespaced: true,//开启命名空间
    state: {
        // title
        title: "",
        tag: 0, // 发布类型： 0表示软件，1表示经验分享
        checkedTypes: ['mac'],
        checkedLabels: ['tool'],
        links: [{name: "阿里云盘", link: "http://www.baidu.com"}]


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
        SETTitle(state, title) {
            state.title = title;
        },
        // tag
        SETTag(state, tag) {
            state.tag = tag;
        },
        // add types
        ADDTypes(state, type) {
            if (state.checkedTypes.indexOf(type) < 0)
                state.checkedTypes.push(type);
        },
        // rm type
        RMType(state, type) {
            if (state.checkedTypes.indexOf(type) >= 0) {
                state.checkedTypes.splice(state.checkedTypes.indexOf(type), 1)
            }
        },
        // add labels
        ADDLabels(state, label) {
            if (state.checkedLabels.indexOf(label) < 0)
                state.checkedLabels.push(label);
        },
        // rm label
        RMLabel(state, label) {
            if (state.checkedLabels.indexOf(label) >= 0) {
                state.checkedLabels.splice(state.checkedLabels.indexOf(label), 1)

            }
        },
        // link
        ADDLink(state, link) {
            state.links.push(link);
        },
        RMLink(state, index) {
            state.links.splice(index, 1);
        },
        UPDATELink(state, list) {
            console.log(list)
            state.links[list[0]].name = list[1].name;
            state.links[list[0]].link = list[1].link;
        }

    },
}