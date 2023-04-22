<template>
    <div v-show="this.itemTag" class="card-main">
        <div class="card-left">
            <div class="card-context" v-html="cardArticle">
            </div>
        </div>
        <div class="card-right">
            <AuthorCard class="AuthorCard"/>
            <div class="card-comment">
                <h2>留言</h2>
                <el-input type="textarea"
                          size="small"
                          :rows="2"
                          v-model="commentText"
                          placeholder="请输入内容"></el-input>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;
import AuthorCard from "@/components/author/AuthorCard";

export default {
    name: "ItemMain",
    components: {AuthorCard},
    props: ['card', 'itemTag'],
    data() {
        //这里存放数据
        return {
            commentText: "",
        };
    },
    //监听属性 类似于data概念
    computed: {
        cardDescription() {
            if (!this.card) return null;
            return this.card.description;
        },

        cardArticle() {
            if (!this.card) return null;
            return this.card.article.replaceAll("https://oss.tqlcool.com", "");
        },
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
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

.card-main {
    padding: 20px 0 10px 0;
    width: 100%;
    min-height: calc(100% - 120px);
    overflow: hidden;
    color: #4b5765;
}

.card-left {
    margin-left: 10px;
    padding: 10px 20px 10px 20px;
    float: left;
    width: calc(100% - 380px);
    /*background: rgba(230, 230, 230, 0.15);*/
    border-radius: 10px;
    box-shadow: 0 0 10px #eee;
    transition-duration: 0.3s;
}


.card-right {
    margin-right: 10px;
    padding: 10px 20px 10px 20px;
    float: right;
    width: 270px;
    /*background: rgba(230, 230, 230, 0.15);*/
    border-radius: 10px;
    box-shadow: 0 0 10px #eee;
    transition-duration: 0.3s;

}

.AuthorCard {
    height: 60px;
}

.card-context >>> article pre code {
    word-wrap: break-word;
    white-space: pre-wrap;
}

.card-context >>> article > * {
    line-height: 1.8em;
}

.card-context >>> article h2 {
    font-size: 2em;
}

.card-context >>> article p {
    text-indent: 2em;
}

.card-context >>> article p,
.card-context >>> article ul,
.card-context >>> article ol {
    font-size: 16px;
}

.card-context >>> article .wp-block-pandastudio-single {
    display: none;
}

@media screen and (max-width: 860px) {
    .card-left, .card-right {
        float: none;
        margin: auto;
        width: calc(100% - 60px);
        transition-duration: 0.3s;

    }

    .card-right {
        margin-top: 20px;
    }

}

.card-comment > h2 {
    margin-bottom: 10px;
}
</style>


