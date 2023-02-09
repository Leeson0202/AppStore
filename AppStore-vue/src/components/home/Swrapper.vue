<template>
    <div id="Swraper">
        <el-carousel :interval="4000" type="card" height="160px">
            <el-carousel-item v-for="(item,key) in apps" :key="key">
                <div class="swrapperContainer"
                     style="width: calc(100% - 170px); margin-left: 20px; margin-right: 10px">
                    <div class="swrapper-tittle">
                        <span class="medium">{{ item.name }}</span>
                    </div>
                    <div class="item-description" style="margin-top: 10px; ">
                        <span>{{ item.description }}</span>
                    </div>
                </div>
                <div class="swrapperContainer" style="width: 140px; height: 100%">
                    <img class="swrapperIcon" :src="getIcon(item.icon)" alt="hello">
                </div>
            </el-carousel-item>
        </el-carousel>

    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;

export default {
    name: "Swrapper",
    components: {},
    props: ['apps'],
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

        getIcon(icon) {
            return icon.replace("https://oss.tqlcool.com", "");

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
#Swraper {
    margin: 12px auto auto;
    width: 80%;
}

@media screen and (max-width: 900px) {
    #Swraper {
        width: 90%;
    }
}

@media screen and (max-width: 800px) {
    #Swraper {
        width: 95%;
    }
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.swrapperIcon {
    width: 120px;
    height: 120px;
    margin: 20px 0 0;
    border-radius: 8px;
}

.el-carousel__container div {
    border-radius: 6px;
}

.swrapperContainer {
    float: left;
    height: 100%;
}

.swrapper-tittle {
    line-height: 18px;
    margin-top: 16%;
    font-size: 18px;
    font-weight: bold;
}
.item-description{
    font-size: 12px;
}
</style>


