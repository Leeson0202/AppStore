<template>
    <div class='publish-context'>
        <div class="labels">
            <span>请选择标签：</span>
            <!--            labels：&nbsp;-->
            <el-tag class="label" closable size="medium" type="success" :disable-transitions="false"
                    v-for="type in checkedTypes"
                    :key="type"
                    @close="closeLabel(type)">
                &nbsp;&nbsp;{{ typeNames[type] }}&nbsp;&nbsp;
            </el-tag>
            <el-tag class="label" closable size="medium" type="warning" :disable-transitions="false"
                    v-for="label in checkedLabels"
                    :key="label"
                    @close="closeLabel(label)">
                &nbsp;&nbsp;{{ labelNames[label] }}&nbsp;&nbsp;
            </el-tag>
            <el-tag size="medium" type="info"
                    style="cursor: pointer; user-select: none; background: #fdfdfd;"
                    @click="addLabel"
            >&nbsp;&nbsp;+&nbsp;&nbsp;
            </el-tag>
            <el-dialog title="添加标签" :visible.sync="labelFormTag" :modal="false">
                <el-form :model="labelForm">
                    <el-form-item label="活动区域" label-width="100px">
                        <el-select v-model="labelForm" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="labelFormTag = false">取 消</el-button>
                    <el-button type="primary" @click="labelFormTag = false">确 定</el-button>
                </div>
            </el-dialog>

        </div>
        <div class="links">
            <div>
                <span>下载链接</span>
                <button class="add-button">+</button>
                <div class="link" v-for="(link,key) in links" :key="key">
                    <el-input v-model="link.name"></el-input>
                    <el-input v-model="link.link"></el-input>
                </div>
            </div>
        </div>
        <div>
            <h2>应用描述</h2>
            <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入相关描述"
                v-model="description">
            </el-input>
        </div>

        <div>
            <h2>应用介绍</h2>
            <PublishEditor/>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;
import {mapState, mapActions, mapMutations} from 'vuex'
import PublishEditor from "@/components/editor/PublishEditor";

export default {
    name: "PublishContext",
    components: {PublishEditor},
    data() {
        //这里存放数据
        return {
            checkedTypes: ["mac"],
            checkedLabels: ['tool'],
            labelForm: ['mac'],
            typeForm: ['tool'],
            labelFormTag: false,

            links: [],
            description: "",

        };
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('DownloadAbout', ['labelNames', 'typeNames'])
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        addLabel() {
            console.log('addLabel')
            this.labelFormTag = true;

        },
        closeLabel(key) {
            if (this.checkedTypes.indexOf(key) >= 0)
                this.checkedTypes.splice(this.checkedTypes.indexOf(key), 1);
            if (this.checkedLabels.indexOf(key) >= 0)
                this.checkedLabels.splice(this.checkedLabels.indexOf(key), 1);
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
.publish-context {
    overflow: hidden;
}

span {
    font-size: 13px;
    color: #666;
}

.labels, .links {
    background: rgba(255, 255, 255, 0.9);
    margin-top: 10px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 0 1px #aaaaaa;
    font-size: 13px;
    color: #666;
}

.label {
    margin-right: 10px;

}

.add-button {
    float: right;
    border-radius: 5px;
    border: #ddd 1px solid;
    color: #aaa;
    background: #fdfdfd;
    cursor: pointer;
}


</style>


