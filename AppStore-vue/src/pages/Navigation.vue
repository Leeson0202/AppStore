<template>
    <div class="Navigation">
        <div class="block" v-for="(item, index) in this.blockTitle" :key="index">
            <a :href="item.link">
                <div class="block-title">
                    <icon :class="item.icon"></icon>
                    <span>{{ blockTitle[index].name }}</span>
                </div>
            </a>
            <div class="block-context">
                <div class="content" v-for="i in 10">最长的电影 </div>
                <div class="content">最长的电影 </div>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;

import Program from "@/components/navigation/Program";

export default {
    name: "Navigation",
    components: {Program},
    data() {
        //这里存放数据
        return {
            icon: '<icon className="el-icon-s-platform"></icon>',
            blockTitle: [
                {name: "编程", icon: "el-icon-s-platform", link: "http://www.baidu.com"},
                {
                    name: "考研",
                    icon: "el-icon-edit",
                    link: "http://www.baidu.com"
                },
                {name: "考公", icon: "el-icon-s-claim", link: "http://www.baidu.com"},
                {name: "剪辑", icon: "el-icon-video-camera-solid", link: "http://www.baidu.com"}],
            blockContents:[]
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
a {
    text-decoration: none;
}

.block {
    margin: 40px auto 10px;
    padding-bottom: 2px;
    width: calc(100% - 20px);
    border-radius: 10px;
    box-shadow: 0 0 15px #ddd;
}

.block-title {
    position: relative;
    top: -20px;
    left: 3%;
    width: 100px;
    height: 2em;
    line-height: 2em;
    text-align: center;
    justify-content: center;
    background: #c6d3e3;
    border-radius: 5px;
    box-shadow: 4px 4px 10px #c6d3e3;
    font-size: x-large;
    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    letter-spacing: 4px;
    font-weight: 450;
    color: #fff;
    cursor: pointer;

}

.block-context {
    position: relative;
    top: -10px;
    margin: 10px auto;
    width: calc(100% - 30px);
    background: #fff;
}

.content{
    padding: 0 10px 0;
    margin-right: 20px;
    margin-bottom: 10px;
    display: inline-block;
    border: 1px #ccc solid;
    line-height: 2em;
    border-radius: 4px;
    box-shadow: 0 0 5px #ccc;
    cursor: pointer;


}

</style>


