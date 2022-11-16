<template>
    <div class='itemHead' v-show="itemTag">
        <div class="cover">
            <div class="item-icon">
                <img :src="cardImg" alt="加载失败">
            </div>
            <div class="head-main">
                <div class="app-title"> {{ cardName }}</div>
                <div style="margin-top: 20px"/>
                <el-button type="primary" round
                           size="small">
                    &nbsp;&nbsp;下载&nbsp;&nbsp;
                </el-button>
<!--                <i class="el-icon-star-off" style="font-size: xx-large; color: red;"/>-->

            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;

export default {
    name: "ItemHead",
    components: {},
    props: ['card', 'itemTag'],
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {
        cardName() {
            if (!this.card) return null;
            return this.card.name;
        },
        cardImg() {
            if (!this.card) return null;
            return this.card.icon.replace("https://oss.tqlcool.com", "")
        },
    },
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
.itemHead {
    margin: auto;
    width: calc(100% - 20px);
    height: 200px;

    background: -webkit-linear-gradient(
        left, #F0C6B5, #BB5571
    );
    border-radius: 10px;
    box-shadow: 0 0 10px #eee;
}

/*毛玻璃*/
.cover {
    height: 100%;
    width: 100%;
    /*毛玻璃*/
    /*backdrop-filter: blur(1px);*/
    border-radius: 10px;
}

.item-icon {
    height: 100%;
    float: left;

}

.item-icon > img {
    /*box-shadow: 0 0 5px #fff;*/
    margin-left: 20px;
    height: 80%;
    border-radius: 18px;
    position: relative;
    top: 10%;

}

.head-main {
    float: right;
    width: calc(100% - 230px);
    padding: 20px 0 20px 10px;
}

.app-title {
    margin-top: 5px;
    font-size: xx-large;
    height: 1.5em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>


