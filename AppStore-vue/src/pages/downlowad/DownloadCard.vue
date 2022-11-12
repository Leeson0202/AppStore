<template>
    <div class='downloadCard' @click="handleClicked">
        <div class="card-inner">
            <img :src="cardImg" alt="图片加载失败">
        </div>
        <div class="descriptions card-inner">{{ this.card.name }}</div>

    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;

import axios from "axios";

export default {
    name: "DownloadCard",
    components: {},
    props: ['card'],
    data() {
        //这里存放数据
        return {
            cardImg: this.card.icon.replace("https://oss.tqlcool.com", "")
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handleClicked() {
            console.log("handleClicked..")
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
    },
    beforeCreate() {
    }, //生命周期 - 创建之前
    beforeMount() {
    }, //生命周期 - 挂载之前
    beforeUpdate() {
    }, //生命周期 - 更新之前
    updated() {
    }, //生命周期 - 更新之后
    beforeDestroy() {
    }, //生命周期 - 销毁之前
    destroyed() {
    }, //生命周期 - 销毁完成
    activated() {
    }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.downloadCard {
    float: left;
    margin: 20px 0 0 0;
    padding: 0;
    width: calc(50% - 10px);
    height: 134px;
    background: aliceblue;
    cursor: pointer;
}

/*奇数选择器*/
.downloadCard:nth-child(odd) {
    margin: 20px 10px 0 0;
}

.card-inner {
    float: left;
}

img {
    height: 134px;
    width: 150px;
    border-radius: 16px;
}

</style>


