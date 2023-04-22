<template>
    <div class="author-card">
        <img
            class="author-head-icon"
            src="https://img2.woyaogexing.com/2019/08/24/98f42cdb173b48a983e928920f42ad4e!600x600.jpeg"
            alt="">
        <div class="author-info">
            <div class="author-name">
                <span>Leeson</span>
                <img :src="require('@/assets/gz.svg')"
                     style="float:left; height: 1.2em; margin-left: 5px "
                />
            </div>
            <div class="author-des">
                分你一个耳机，然后开启心动模式
            </div>
        </div>
        <div style="width: 100%"></div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;

export default {
    name: "AuthorCard",
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
.author-card {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

img {
    float: left;
    height: calc(100%);
    max-height: 90px;

    border-radius: 50%;
}

.author-info {
    width: calc(100% - 70px);
    margin: 4px 0 0 10px;
    float: left;
    overflow: hidden;
}

.author-name {
    float: none;
    width: 100%;
    height: auto;
    overflow: hidden;
}

.author-name > * {
    float: left;
}

.author-name > span {
    display: inline-block;
    color: #000;
    font-size: large;
    overflow: hidden;
}


.author-des {
    height: 40px;
    font-size: 0.7em;

}
</style>


