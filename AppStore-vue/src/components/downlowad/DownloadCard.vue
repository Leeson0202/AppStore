<template>
    <div class='downloadCard' @click="handelClicked(card.id)">
        <div style="margin: 16px 10px 16px 10px;height: calc(100% - 32px)">
            <div class="card-inner card-img">
                <el-image lazy :src="cardImg" alt="图片加载失败"></el-image>
            </div>
            <div class="descriptions card-inner">
                <div class="card-title">
                    {{ this.card.name }}
                </div>
                <div class="views"><i class="el-icon-position"/> {{ this.card.view }}</div>
                <div class="description">{{ this.card.description }}</div>

            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;

import axios from "axios";

export default {
    name: "DownloadCard",
    components: {},
    props: ['card', 'handelClicked'],
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
    methods: {},
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
    margin: auto;
    padding: 0;
    height: 140px;
    /*background: aliceblue;*/
    cursor: pointer;
}

.downloadCard:hover {
    background-color: #eee;
    border-radius: 16px;
    transition-duration: 0.4s;

}

/*!*奇数选择器*!*/
/*.downloadCard:nth-child(odd) {*/
/*    margin: 35px 10px 0 0;*/
/*}*/

@media screen and (max-width: 1080px) {


}


.card-img {
    float: left;
    height: 100%;
    margin-left: 20px;

}


.el-image {
    height: 100%;
    border-radius: 16px;
    box-shadow: 5px 5px 15px #aaa;
}

.descriptions {
    margin: 10px 0 10px 0;
    float: right;
    width: calc(100% - 190px);
    height: 100%;


}

.card-title {

    height: 1.5em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #666;
    font-weight: 500;
    font-size: 1em;
}

.views {
    margin: 5px 0 0 0;
    color: #ee6969;
    font-size: 0.8em;
}

.description {
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: normal;
    color: #aaaaaa;
}


</style>


