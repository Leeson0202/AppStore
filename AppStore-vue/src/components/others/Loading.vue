<template>
    <div class='is-loading' :style="showStyle">
        <img :src="require('@/assets/loading.svg')">
        <div>正在加载中</div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;

export default {
    name: "Loading",
    components: {},
    data() {
        //这里存放数据
        return {
            showStyle: {
                display: 'block'
            }
        };
    },
    props: ['tag'],
    //监听属性 类似于data概念
    computed: {
    },
    //监控data中的数据变化
    watch: {
        tag(val, old) {
            console.log('loading: ', val)
            if (val) {
                this.showStyle.display = 'block'
            } else {
                this.showStyle.display = 'none'
            }
        }
    },
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        console.log("lodaing init:", this.tag)
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
.is-loading {
    text-align: center;
    width: 100%;
    height: 500px;
}

@keyframes imgRotate {

    100% {
        transform: rotate(360deg);
    }

}

.is-loading > img {
    display: inline-block;
    margin-top: 100px;
    width: 5em;
    animation: imgRotate 1s linear;
    animation-iteration-count: 100000;
    -webkit-animation-iteration-count: 100000;
}
</style>


