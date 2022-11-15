<template>
    <div class='downloadTable'>
        <IsLoading :tag="!this.tag"></IsLoading>
        <div v-if="tag" class="downloadTList">
            <DownloadCard class="DownloadCard" v-for="card in this.cards"
                          :key="card.id"
                          :card="card"
                          :handelClicked="handleChangeItem"
            />
        </div>
        <el-pagination
            background
            :page-size="20"
            layout="total, prev, pager, next"
            :current-page="this.page"
            :total="total"
            @current-change="handleChangePage"
        >
        </el-pagination>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;
import {mapActions, mapMutations, mapState} from 'vuex'
import DownloadCard from "@/components/downlowad/DownloadCard";
import Loading from "@/components/others/Loading";

export default {
    name: "DownloadTable",
    components: {DownloadCard, IsLoading: Loading},
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('DownloadCardsAbout', ['tag', 'type', 'label', "cards", "page", "total"]),
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        ...mapActions('DownloadCardsAbout', ['GetCards']),
        ...mapMutations('DownloadCardsAbout', ['SETPage']),
        handleChangeItem(id) {
            console.log("click", id)
            this.$router.push({
                name: 'app',
                query: {
                    id: id,
                    t: Date.now()
                }
            })
        },
        handleChangePage(page) {
            this.$router.push({
                name: 'download',
                query: {
                    type: this.type,
                    label: this.label,
                    page: page,
                    t: Date.now()
                }
            })
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
.downloadTable {
    margin: 20px 0 0 0;
    width: 100%;
    height: calc(100% - 120px);
}


.downloadTList {
    margin: 0;
    padding: 0 0 20px 0;
    width: 100%;
    overflow: hidden;

}

.DownloadCard {
    width: calc(100% / 3);
    float: left;
    transition-duration: 0.3s;
}

@media screen and (max-width: 1400px) {
    .DownloadCard {
        width: calc(50%);
        transition-duration: 0.3s;
    }
}

@media screen and (max-width: 650px) {
    .DownloadCard {
        width: calc(100%);
        transition-duration: 0.3s;
    }
}

.el-pagination {
    margin: 10px 0 10px 0;
    text-align: center;
}


</style>


