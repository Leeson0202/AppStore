<template>
    <div class="PublishLabels">
        <el-collapse @change="handleChange">
            <el-collapse-item title="一致性 Consistency" name="1">
                <template slot="title">
                    <span style="user-select: none; font-size: 14px; color: #666;">&nbsp;&nbsp;标签：</span>
                    <!--            labels：&nbsp;-->
                    <el-tag class="label" closable size="medium" type="success" :disable-transitions="false"
                            v-for="type in this.checkedTypes"
                            :key="type"
                            @click.stop
                            @close="RMType(type)">
                        {{ typeNames[type] }}
                    </el-tag>
                    <el-tag class="label" closable size="medium" type="warning" :disable-transitions="false"
                            v-for="label in this.checkedLabels"
                            :key="label"
                            @click.stop
                            @close="RMLabel(label)">
                        {{ labelNames[label] }}
                    </el-tag>

                </template>
                <div style="display: inline-block; width: 48px; height: 10px"></div>
                <el-tag class="label" size="medium" type="success" :disable-transitions="false"
                        v-for="(type,key) in this.typeNames"
                        v-show="key!=='all'"
                        v-if="checkedTypes.indexOf(key)<0"
                        :key="key+1"
                        @click="ADDTypes(key)">
                    &nbsp;&nbsp;{{ typeNames[key] }}&nbsp;&nbsp;
                </el-tag>
                <el-tag class="label" size="medium" type="warning"
                        v-for="(label,key) in this.labelNames"
                        v-show="key!=='all'"
                        v-if="checkedLabels.indexOf(key)<0"
                        :key="key+2"
                        @click="ADDLabels(key)">
                    &nbsp;&nbsp;{{ labelNames[key] }}&nbsp;&nbsp;
                </el-tag>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'

export default {
    name: "PublishLabels",
    components: {},
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('PublishAbout', ['checkedTypes', 'checkedLabels']),
        ...mapState('DownloadAbout', ['typeNames', 'labelNames']),
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        ...mapMutations('PublishAbout', ['ADDTypes', 'ADDLabels', 'RMType', 'RMLabel']),
        handleChange() {
            console.log("handleChange")
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
.PublishLabels {
    background: rgba(255, 255, 255, 0.9);
    margin-top: 5px;
    padding: 0 10px;
    border-radius: 4px;
    color: #666;
}

.label {
    margin-right: 10px;

}

.el-tag {
    user-select: none;
    cursor: pointer;
    font-weight: 400;
}

</style>


