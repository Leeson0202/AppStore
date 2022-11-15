<template>
    <el-container id="app-body">
        <el-header>
            <HeaderVue></HeaderVue>
        </el-header>
        <el-container class="main-container">
            <el-aside v-if="aside" width="200px">Aside</el-aside>
            <el-main>
                <router-view :key="$route.path + $route.query.t"></router-view>
                <Footer></Footer>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderVue from "./pages/Header.vue";
import Footer from "@/pages/Footer";

export default {
    name: "App",
    components: {
        HeaderVue,
        Footer,

    },
    data() {
        return {
            aside: false,
        }
    },
    computed: {}
};
</script>

<style>


.el-container {
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.el-header {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
    /*border-bottom: 0.5px solid rgb(199, 193, 193);*/
}

.main-container {
    height: calc(100% - 60px);
    overflow: hidden;
}

.el-aside {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #fff;
    color: #333;
    text-align: left;
    padding-top: 0;
    padding-bottom: 0;
    min-height: calc(100% - 60px);
}


.el-main::-webkit-scrollbar {
    display: none; /* Chrome Safari */
}

#app-body {
    margin: auto;
    width: 80%;
    transition-duration: 1s;
}

@media screen and (max-width: 1060px) {
    #app-body {
        width: 100%;
        transition-duration: 1s;

    }
}


</style>
