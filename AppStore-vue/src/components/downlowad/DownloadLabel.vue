<template>
    <div class='downloadLabel'>

        <ul>
            <span class="labelTag">
                <i class="el-icon-menu" style="margin-right: 3px"/>机型</span>
            <li v-for="(name, key) in typeNames" :key="key"
                :class="typeLiClass(key)"
                @click="handelCheckerType(key)">{{ name }}
            </li>
        </ul>


        <div style="height: 10px"></div>
        <ul>
            <span class="labelTag">
                <i class="el-icon-collection-tag" style="margin-right: 3px"/>标签</span>
            <li v-for="(name, key) in labelNames"
                :class="labelLiClass(key)"
                :key="key"
                @click="handelClickedLabel(key)"
            >{{ name }}

            </li>
        </ul>


    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
    name: "DownloadLabel",
    components: {},
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('DownloadAbout', ['typeNames', "labelNames",]),
        ...mapState('DownloadCardsAbout', ['tag', 'type', 'label', 'page', 'allPage', 'cards'])
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        ...mapActions('DownloadCardsAbout', ['UpdateCards', 'UpdateByPage']),
        ...mapMutations('DownloadCardsAbout', ['SETType', 'SETLabel', 'SETPage']),

        // type 返回class类型
        typeLiClass(key) {
            return this.type === key ? 'li-sure' : null;
        },
        // label 返回class类型
        labelLiClass(key) {
            return this.label === key ? 'li-sure' : null;
        },
        // 点击 type 时
        handelCheckerType(val) {
            this.$router.push({
                name: 'download',
                query: {
                    type: val,
                    label: this.label,
                    page: 1,
                    t: Date.now()
                }
            })
        },
        // 点击 label 时
        handelClickedLabel(val) {
            this.$router.push({
                name: 'download',
                query: {
                    type: this.type,
                    label: val,
                    page: 1,
                    t: Date.now()
                }
            })
        },
        // 更新函数
        updateDownloadLabel() {
            // 获取 query type
            this.SETType(this.$route.query.type ? this.$route.query.type : "all");
            // 获取 query label
            this.SETLabel(this.$route.query.label ? this.$route.query.label : "all");
            // 获取 query page
            this.SETPage(this.$route.query.page ? parseInt(this.$route.query.page) : 0);
            // console.log(this.type, this.label, this.page)
            // 更新card
            this.UpdateCards();
        }

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        // 初始化的时候进行更新
        this.updateDownloadLabel();
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
        // this.updateLabel();
    }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>


<style scoped>
* {
    font-size: small;
}

.downloadLabel {
    background: #fff;
    padding: 22px 0 16px 16px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 10px 20px #ccc;
}

.labelTag {
    display: inline-block;
    height: 20px;
    width: 72px;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    line-height: 20px;
    background-color: #d4d6dd;
    color: #777;
    /*禁止选中文字*/
    user-select: none;
}

ul {
    margin: 0;
    padding: 0;
}

.li-sure {
    color: #fff;
    background: #20a0ff;
}

li {
    list-style: none;
    display: inline-block;
    width: 80px;
    margin-left: 12px;
    /*background: #666666;*/
    border-radius: 10px;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    user-select: none;
}

li:hover {
    background: rgba(32, 160, 255, .1);
    color: #20a0ff;
}


</style>


