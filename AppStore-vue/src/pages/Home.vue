<template>
    <div class="Home">
        <!-- 推荐轮播图 -->
        <Swrapper :apps="apps"></Swrapper>

        <!-- 热门-->
        <div class="hot">
            <!--应用下载榜首-->
            <div class="app-top">
                <span>下载榜单</span>
                <el-tabs tab-position="top" style="height: 200px; ">
                    <el-tab-pane label="今日">
                        <el-col style="margin-top: 6px" :span="24" v-for="(item, index) in apps" :key="index"
                                :offset="0">
                            <el-image class="top-icon"
                                      :src="getIcon(item.icon)"
                                      alt=""></el-image>
                            <div style="float: left; height: 100%;margin-left: 10px; width: calc(100% - 70px);">
                                <span class="item-name"> {{ item.name }}</span></div>
                            <hr>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="本周">配置管理</el-tab-pane>
                    <el-tab-pane label="本月">角色管理</el-tab-pane>
                    <el-tab-pane label="本季">定时任务补偿</el-tab-pane>
                </el-tabs>

            </div>

        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import Swrapper from "@/components/home/Swrapper";
import SwrapperAbout from "@/store/module/home/SwrapperAbout";


export default {
    name: "Home",
    components: {Swrapper},
    data() {
        //这里存放数据
        return {
            activeName: 'first',
            src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
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


.hot {
    width: 100%;
    height: 600px;
    background-color: #f3f3f3;
}

.app-top {
    margin: 0 5px 0 5px;
    height: 100%;
    width: 36%;
    max-width: 250px;
    overflow: scroll;
}

.app-top > span {
    font-size: 16px;
    font-weight: bold;
}

.app-top::-webkit-scrollbar {
    display: none; /* Chrome Safari */
}


.el-col{
    margin-top: 1px;
}
.top-icon {
    float: left;
    height: 58px;
    width: 58px;
    border-radius: 4px;

}

.item-name {
    font-size: 14px;
    line-height: 60px;
}

hr {
    margin: 0;
    width: 100%;
    background-color: #adaaaa;
    height: 1px;
    border: none;
}
</style>