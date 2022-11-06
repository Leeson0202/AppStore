<template>
    <div class='downloadLabel'>

        <ul>
            <span class="labelTag">
                机型</span>
            <li v-for="(name, key) in typeNames" :key="key"
                :class="typeLiClass(key)"
                @click="handelCheckerType(key)">{{ name }}
            </li>
        </ul>

        <div v-show="this.changeTag"></div>
        <div style="height: 10px"></div>
        <ul>
            <span class="labelTag">标签</span>
            <li v-for="(item, key) in labelNames"
                :class="labelLiClass(key)"
                :key="key"
                @click="handelClickedLabel(key)"
            >{{ item }}

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
        return {
            checkedType: '',
            checkedLabel: [],
            changeTag: false
        };
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('DownloadAbout', ['typeNames', "labelNames"]),

    },
    //监控data中的数据变化
    watch: {
    },
    //方法集合
    methods: {
        // type 返回class类型
        typeLiClass(key) {
            if (this.checkedType === key) {
                return 'li-sure';
            }
        },
        // label 返回class类型
        labelLiClass(key) {
            if (!this.checkedLabel) return
            if (this.checkedLabel.indexOf(key) >= 0) {
                return 'li-sure';

            }
        },
        // 点击 type 时
        handelCheckerType(val) {
            this.checkedType = val;
            // console.log(val)
            this.$router.push({
                name: 'download',
                query: {
                    type: this.checkedType,
                    label: this.checkedLabel,
                    t: Date.now()
                }
            })
        },
        // 点击 label 时
        handelClickedLabel(key) {
            // 判断是否为空
            if (!this.checkedLabel) this.checkedLabel = [];
            if (key === 'all') {
                if (this.checkedLabel.indexOf('all') >= 0) return
                this.checkedLabel = [];
                this.checkedLabel.push("all");
            } else {
                // 判断是否有all
                if (this.checkedLabel.indexOf("all") >= 0) this.checkedLabel = [];
                // 判断是否存在该key
                let index = this.checkedLabel.indexOf(key)
                if (index >= 0) { // 有 去掉
                    this.checkedLabel.splice(index, 1);
                } else { //没有 加入
                    this.checkedLabel.push(key);
                }
            }
            // 判断是否为全部
            if (this.checkedLabel.length === Object.keys(this.labelNames).length - 1 || this.checkedLabel.length === 0) {
                this.checkedLabel = [];
                this.checkedLabel.push("all");
            }

            this.$router.push({
                name: "download",
                "query": {
                    type: this.checkedType,
                    label: this.checkedLabel,
                    t: Date.now()
                }
            });

        },
        // 更新函数
        updateLabel() {
            this.checkedLabel = ['all'];
            this.checkedType = "all";
            console.log("label", this.$route.query.label)
            if (this.$route.query.label)
                if (typeof this.$route.query.label === "string") {
                    this.checkedLabel = [];
                    this.checkedLabel.push(this.$route.query.label);

                } else {
                    this.checkedLabel = this.$route.query.label;
                }
            if (this.$route.query.type)
                this.checkedType = this.$route.query.type;
        }

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        console.log("created")

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        console.log("mounted")
        this.updateLabel();
    },
    beforeCreate() {
        console.log("beforeCreate")
    }, //生命周期 - 创建之前
    beforeMount() {
        console.log("beforeMount")

    }, //生命周期 - 挂载之前
    beforeUpdate() {
        console.log("beforeUpdate")
        // this.updateLabel()
    }, //生命周期 - 更新之前
    updated() {
        console.log("updated")

    }, //生命周期 - 更新之后
    beforeDestroy() {
        console.log("beforeDestroy")
    }, //生命周期 - 销毁之前
    destroyed() {
        console.log("destroyed")

    }, //生命周期 - 销毁完成
    activated() {
        console.log("activated")
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
    padding: 20px 0 20px 16px;
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
    color: #929dab;
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


