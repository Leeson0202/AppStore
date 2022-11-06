<template>
    <el-container>
        <el-header>
            <HeaderVue></HeaderVue>
        </el-header>
        <el-container>
            <el-aside v-if="aside" width="200px">Aside</el-aside>
            <el-main>
                <!--                <keep-alive>-->
                <router-view :key="$route.path + $route.query.t"></router-view>
                <!--                </keep-alive>-->
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderVue from "./components/Header.vue";

export default {
    name: "App",
    components: {
        HeaderVue,
    },
    data() {
        return {
            aside: false,
        }
    },
    computed: {

    }
};
</script>

<style scoped>
.el-header {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
    /*border-bottom: 0.5px solid rgb(199, 193, 193);*/
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
    line-height: normal;
}

.el-container {
    height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

.el-main {
    padding-top: 0;
    padding-bottom: 0;
}
</style>
