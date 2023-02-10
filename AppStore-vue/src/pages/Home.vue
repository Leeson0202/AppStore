<template>
    <div class="Home">
        <!-- 推荐轮播图 -->
        <Swrapper :apps="apps"></Swrapper>
        <CodeView></CodeView>
        <div class="video-block" :style="{height: videoHeight + 'px'}">
            <video class="video" x5-playsinline webkit-playsinline="true" playsinline="true" muted="true" autoplay>
                <source :src="require('@/assets/video/Air M2.mp4')">
<!--                <source src="https://www.apple.com.cn/105/media/cn/mac/2022/56a714a6-7476-4896-b369-0ee5fa649290/films/macbook-pro-14-and-16-mac-mini-product/mac-macbook-pro-14-and-16-mac-mini-product-tpl-cn-2022_16x9.m3u8">-->
            </video>

        </div>

    </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import Swrapper from "@/components/home/Swrapper";
import CodeView from "@/components/home/code/CodeView.vue";


export default {
    name: "Home",
    components: {Swrapper, CodeView},
    data() {
        //这里存放数据
        return {
            activeName: 'first',
            src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            videoHeight: 100,
        };
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('SwrapperAbout', ['apps']),
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        ...mapActions('SwrapperAbout', ['GetApps']),
        getIcon(icon) {
            return icon.replace("https://oss.tqlcool.com", "");
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        if (this.apps == null || this.apps.length === 0) {
            this.GetApps();
        }
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.videoHeight = document.getElementsByClassName('video')[0].clientHeight + 60;
        window.onresize = () => {
            return (() => {
                this.videoHeight = document.getElementsByClassName('video')[0].clientHeight;
            })();
        };

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
};
</script>

<style scoped>
.video-block {
    border-radius: 6px;
    overflow: hidden;
    width: 100%;
}

.video {
    display: inline-block;
    border-radius: 6px;
    position: relative;
    width: 100%;
}

.video-top {
    display: inline-block;
    position: relative;
    /*background: #8c939d;*/
    width: 100%;
    border-radius: 6px;
    backdrop-filter: blur(0.5px);

}


</style>