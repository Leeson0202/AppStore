<template>
    <div class='footer-context'>
        <el-divider style="margin-top: 10px;"></el-divider>
        <span>Copyright &nbsp;|&nbsp; ©2022&nbsp;<a href="/">AppStore</a> &nbsp;All Rights Reserved</span>
        <div style="height: 0.5em"></div>
        <span class="info">
        <i class="el-icon-warning-outline"/>
        本站信息来自网络，版权争议与本站无关
        </span>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;

export default {
    name: "Footer",
    components: {},
    data() {
        //这里存放数据
        return {};
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
.footer-context {
    padding: 0 0 30px 0;
    margin: 0;
    position: relative;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: small;
    font-weight: 200;
    color: #000;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.info {
    font-weight: lighter;
}
</style>


