<template>
    <div class='Program'>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="编程" name="first">编程</el-tab-pane>
            <el-tab-pane label="考研" name="second">考研</el-tab-pane>
            <el-tab-pane label="考公" name="third">考公</el-tab-pane>
            <el-tab-pane label="剪辑" name="fourth">剪辑</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;

export default {
    name: "Program",
    components: {},
    data() {
        //这里存放数据
        return {activeName:"first"};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
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

</style>


