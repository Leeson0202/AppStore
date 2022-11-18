<template>
    <div class='itemHead' v-show="itemTag">
        <!-- 悬浮 -->

        <transition-group name="lyric">
            <div class="download-cover"
                 :key="1"
                 v-if="downloadCoverTag"
                 @click="handelDownload">
                <div class="download-cover-item"
                     @click.stop>
                    <div style="font-size: larger; border-bottom: #ddd 0.5px solid; padding-bottom: 5px">下载</div>
                    <div class="download-links">
                        <div v-for="(link,key) in card.links" :key="key">
                            <a :href="link.link.indexOf('http')===0 ? link.link : link.link.substring(link.link.indexOf('http'),link.link.length)"
                               target="_blank">
                                {{ link.name }}
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </transition-group>
        <!-- 主体 -->
        <div class="cover">
            <div class="item-icon">
                <img :src="cardImg" alt="加载失败">
            </div>
            <div class="head-main">
                <div class="app-title"> {{ cardName }}</div>
                <div class="type-label" style="margin-top: 20px">
                    <div class="label" v-for="type in cardTypes"
                         :style="labelStyle(1)"
                    >
                        <span>&nbsp;&nbsp;{{ typeNames[type] }}&nbsp;&nbsp;</span>

                    </div>
                    <div class="label" v-for="label in cardLabels"
                         :style="labelStyle(2)">
                        <span>&nbsp;&nbsp;{{ labelNames[label] }}&nbsp;&nbsp;</span>
                    </div>
                </div>
                <div/>
                <el-button type="primary" round
                           size="small"
                           @click="handelDownload">
                    &nbsp;&nbsp;&nbsp;&nbsp;下载&nbsp;&nbsp;&nbsp;&nbsp;
                </el-button>
                <!--                <i class="el-icon-star-off" style="font-size: xx-large; color: red;"/>-->

            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;
import {mapState} from 'vuex'

export default {
    name: "ItemHead",
    components: {},
    props: ['card', 'itemTag'],
    data() {
        //这里存放数据
        return {
            downloadCoverTag: false,
        };
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('DownloadAbout', ['typeNames', 'labelNames']),
        cardName() {
            if (!this.card) return null;
            return this.card.name;
        },
        cardImg() {
            if (!this.card) return null;
            return this.card.icon.replace("https://oss.tqlcool.com", "")
        },
        cardTypes() {
            if (!this.card) return null;
            return this.card.types;

        },
        cardLabels() {
            if (!this.card) return null;
            return this.card.labels;
        },
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handelDownload() {
            this.downloadCoverTag = !this.downloadCoverTag;


        },
        labelStyle(key) {
            let map = {
                1: ['#837adc', '131,122,220'],
                2: ['#20a0ff', '32,160,255'],
                3: ['#ff8400', '155,132,0'],
            }
            let style = map[key]
            return {
                'color': style[0],
                'background': 'rgba(' + style[1] + ', 0.1)',
                // 'background-color': 'transparent',
                // 'opacity': 0.5,
                // 'filter': 'alpha(Opacity=80)',
                // 'filter': 'blur(0.8px)'
            }
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

.head-main > * {
    float: none;
}

.app-title {
    margin-top: 5px;
    font-size: xx-large;
    height: 1.5em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.type-label {
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;
}

.label {
    float: left;
    margin: 0 5px 0 0;
    padding: 5px 10px 5px 10px;
    border-radius: 1em;
    font-weight: 500;
    font-size: 1em;
    user-select: none;
}

.download-cover {
    background: rgba(255, 255, 255, 50%);
    position: absolute;
    width: calc(100% - 60px);
    min-width: 620px;
    min-height: calc(100% - 80px);
    z-index: 100;
    justify-content: center;
    transition-duration: 1s;
}

.lyric-enter,
.lyric-leave-to {
    opacity: 0;
}

.lyric-enter-to,
.lyric-leave {
    opacity: 1;

}

.lyric-enter-active,
.lyric-leave-active {
    transition: all 0.6s;
}

@media screen and (min-width: 1100px ) {

    .download-cover {
        width: calc(90% - 60px);
        transition-duration: 1s;
    }
}

@media screen and (min-width: 1200px ) {

    .download-cover {
        width: calc(80% - 60px);
        transition-duration: 1s;
    }
}

.download-cover-item {
    margin: calc(30% - 100px) auto auto;
    min-width: 160px;
    width: 40%;
    height: 200px;
    background: rgb(255, 255, 255);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 16px #ccc;
}

.download-links {
    margin-top: 20px;


}

.download-links a {
    color: #333333;
    margin: 5px 0;
    box-sizing: border-box;
    font-size: 13px;
    line-height: 32px;
    padding: 4px 20px;
    /*background: rgba(32, 160, 255, 0.1);*/
    border-radius: 10px;
    border: #aaaaaa 0.5px solid;

}

a {
    text-decoration: none;
    color: #333;
}

a:hover, a:visited, a:link, a:active {
    color: #333;
}


</style>


