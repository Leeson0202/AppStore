<template>
    <el-menu :default-active="activeIndex" ref="elMenu" class="el-menu-demo"
             mode="horizontal" @select="handleSelect">

        <span v-on:click="handleSelect('home',['home'])">Coder's AppStore</span>

        <el-menu-item index="center">
            个人中心
        </el-menu-item>

        <el-menu-item index="publish">
            我的发布
        </el-menu-item>


        <el-submenu index="navigation">
            <template slot="title">网站导航</template>
            <el-menu-item index="programme">编程</el-menu-item>
            <el-menu-item index="MBA">考研</el-menu-item>
            <el-menu-item index="CSE">考公</el-menu-item>
            <el-menu-item index="edit">剪辑</el-menu-item>
        </el-submenu>

        <el-submenu index="download">
            <template slot="title">下载软件</template>
            <el-submenu index="label">
                <template slot="title">分类</template>
                <el-menu-item v-for="(item, key) in this.labelNames"
                              :key="key"
                              :index="key"
                              v-show="key!=='all'">{{ item }}
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-for="(item, key) in this.typeNames"
                          :key="key"
                          :index="key"
                          v-show="key!=='all'"
            >{{ item }}
            </el-menu-item>
        </el-submenu>

        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item>
            <el-input class="search-input" v-model="input" placeholder="搜索"></el-input>
            <i class="el-icon-search search-image"></i>
        </el-menu-item>


    </el-menu>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'


export default {
    name: 'Header',
    data() {
        return {
            activeIndex: 'home',
            navDic: {
                "navigation": "edit",
                "download": "mac",

            },
            input: ""
        };
    },
    computed: {
        ...mapState('DownloadAbout', ['typeNames', "labelNames"]),
    },
    methods: {
        ...mapActions('DownloadAbout', ['GetTypes', "GetLabels"]),

        // 更新header的 index
        selectItem() {
            //判断当前页面的位置
            let index = '';
            if (this.$route.name === 'download')
                index = this.$route.query.type ? this.$route.query.type : 'mac';
            else if (this.$route.name === 'navigation') {
                index = this.$route.query.type ? this.$route.query.type : 'mac';
            } else {
                index = this.$route.name;
            }
            this.$refs.elMenu.activeIndex = index;
        },
        // 处理header选择
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
            // console.log(this.$router.history.current.name);
            this.activeIndex = keyPath[keyPath.length - 1];
            // console.log("handleSelect: ", keyPath);

            let type = undefined;
            let labels = [];
            // 如果是download
            if (keyPath[0] === 'download') {
                // console.log(keyPath[keyPath.length-1]);
                // console.log(Object.keys(this.typeNames))
                if (Object.keys(this.typeNames).indexOf(keyPath[keyPath.length - 1]) >= 0) {
                    // 判断是否在type里面
                    type = keyPath[keyPath.length - 1];
                    labels.push("all")
                } else if (Object.keys(this.labelNames).indexOf(keyPath[keyPath.length - 1]) >= 0) {
                    // 判断是否在label里面
                    labels.push(keyPath[keyPath.length - 1]);
                    type = "all"
                }
            } else if (keyPath[0] === 'navigation') {
                type = keyPath[keyPath.length - 1];
            }
            // 进入相应页面
            this.$router.push({
                name: keyPath[0],
                query: {
                    "type": type,
                    "label": labels,
                    t: Date.now()
                }
            })

        }
    },

    mounted() {
        // 初始化
        this.selectItem();
    },
    watch: {
        '$route'(to, from) {
            this.selectItem()
        }
    },
    created() {
        this.GetTypes("");
        this.GetLabels("");
    },
    updated() {
        // console.log("update")
        // this.selectItem();
    }

}
</script>

<style scoped>
.el-menu-demo > li, .el-menu-demo > el-input {
    float: right;
}

.el-input__inner {
    height: 35px;
}

.el-menu-demo > span {
    float: left;
    font-size: large;
    font-weight: bold;
}

.el-menu-item, template, span {
    user-select: none;
}

.search-image {
    display: none;
}

.search-input {
    display: block;
}

@media screen and (max-width: 880px) {
    /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
    .search-image {
        display: inline;
    }

    .search-input {
        display: none;
    }
}


</style>