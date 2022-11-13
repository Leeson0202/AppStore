<template>
    <div class='downloadItem'>
        <is-loading :tag="!this.itemTag"></is-loading>

    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;
import {mapState, mapActions} from 'vuex'
import Loading from "@/components/others/Loading";

export default {
    name: "DownloadItem",
    components: {'isLoading':Loading},
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('DownloadItemAbout', ['itemTag', 'card']),
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        ...mapActions('DownloadItemAbout', ['GetCard']),
        watchQuery() {
            if (this.$route.query.id === null)
                return;
            this.GetCard(this.$route.query.id);
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.watchQuery();

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
.downloadItem{
    width: 100%;
    height: calc(100% - 120px);
}

</style>


