<template>
    <div class='downloadItem'>
        <is-loading :tag="!this.itemTag"></is-loading>
        <ItemHead :card="card"/>
        <div v-show="this.itemTag" class="card-main">
            <div class="card-left">
                <div class="card-context" v-html="cardArticle">
                </div>
            </div>
            <div class="card-right">
                <div class="card-download">
                    <h2>下载</h2>
                </div>
                <div class="card-comment">
                    <h2>评论</h2>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;
import {mapState, mapActions} from 'vuex'
// import marked from 'marked';
import Loading from "@/components/others/Loading";
import ItemHead from "@/components/downlowad/downloadItem/ItemHead";
import {Markdown} from '@/assets/js/markdown.mini.js';

export default {
    name: "DownloadItem",
    components: {'isLoading': Loading, ItemHead},
    data() {
        //这里存放数据
        return {}
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('DownloadItemAbout', ['itemTag', 'card']),
        cardDescription() {
            if (!this.card) return null;
            return this.card.description;
        },

        cardArticle() {
            if (!this.card) return null;
            let markdown = new Markdown({//创建Markdown对象并传递一个对象，对象中暂时仅支持一个参数mdText
                mdText: this.card.article,
            });
            return markdown.markdown();//解析markdown并返回html代码，可以直接将其输出到网页中
            // return this.card.article.replaceAll("https://oss.tqlcool.com", "").replaceAll('\n', '<br /><br/>').replace('<img', '<br><img');
        },

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
.downloadItem {
    width: 100%;
    min-height: calc(100% - 120px);
    overflow: hidden;
    padding: 20px 0 10px 0;
}


.card-title > div {
    height: 100%;
    float: left;
}


.card-main {
    padding: 20px 0 10px 0;
    width: 100%;
    min-height: calc(100% - 120px);
    overflow: hidden;
}

.card-left {
    margin-left: 10px;
    padding: 10px;
    float: left;
    width: calc(100% - 350px);
    /*background: rgba(230, 230, 230, 0.15);*/
    border-radius: 10px;
    box-shadow: 0 0 10px #eee;
    transition-duration: 0.3s;
}

.card-right {
    margin-right: 10px;
    padding: 10px;
    float: right;
    width: 280px;
    /*background: rgba(230, 230, 230, 0.15);*/
    border-radius: 10px;
    box-shadow: 0 0 10px #eee;
    transition-duration: 0.3s;


}


@media screen and (max-width: 860px) {
    .card-left, .card-right {
        float: none;
        margin: auto;
        width: calc(100% - 40px);
        transition-duration: 0.3s;

    }

    .card-right {
        margin-top: 20px;
    }

}


</style>


