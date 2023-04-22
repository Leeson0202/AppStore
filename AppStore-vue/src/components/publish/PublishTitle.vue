<template>
    <div class="publish-title">
        <div class="back-to-main"><i class="el-icon-arrow-left"></i>我的发布</div>
        <el-input class="title-input" v-model="title" :minlength="8" :show-word-limit="true"
                  placeholder="请输入软件名称"></el-input>
        <el-button class="save-button" size="medium" round>保存草稿</el-button>
        <el-button class="publish-button" size="medium" type="primary" round>发布</el-button>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;

export default {
    name: "PublishTitle",
    components: {},
    data() {
        //这里存放数据
        return {
            title: ""
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
        // let header = document.getElementsByClassName('el-header')[0];
        // header.style.display = 'none';

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
.publish-title {
    padding: 10px 0;
    vertical-align: center;
    background: rgba(240, 240, 240, 0.8);
}

.back-to-main {
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    font-weight: normal;
    width: 116px;
    color: #555;
    user-select: none;
    cursor: pointer;
}

.back-to-main:hover {
    font-weight: bold;
}

.title-input {
    width: calc(100% - 356px);
}

.save-button {
    width: 100px;
    margin-left: 16px;

}

.publish-button {
    margin-left: 16px;
    width: 100px;
}
</style>


