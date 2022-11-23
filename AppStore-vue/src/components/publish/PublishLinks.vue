<template>
    <div class='links'>
        <el-table
            size="mini"
            :data="this.links"
            style="width: 100%">
            <el-table-column
                label="软件版本"
                prop="name"
            width="200">
            </el-table-column>
            <el-table-column
                label="下载链接"
                prop="link">
            </el-table-column>
            <el-table-column
                align="right"
            width="150">
                <template slot="header" slot-scope="scope">
                    <el-button size="mini" @click="dialogFormVisible = true">添加</el-button>
                </template>
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">修改
                    </el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- link Form -->
        <el-dialog title="添加链接" :visible.sync="dialogFormVisible" :modal="false" :width="dialogWidth">
            <el-form :model="form" label-position="top">
                <el-form-item label="应用版本" prop="name" :label-width="formLabelWidth"
                >
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="下载链接" prop="link" :label-width="formLabelWidth">
                    <el-input v-model="form.link" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="conform('form')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;
import {mapState, mapMutations} from 'vuex'

export default {
    name: "PublishLinks",
    components: {},
    data() {
        //这里存放数据
        return {
            index: -1, // 如果为 -1 表示添加，如果 >=0 修改
            dialogFormVisible: false,
            formLabelWidth: '50px',
            dialogWidth: '40%',
            form: {name: null, link: null},
        };
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('PublishAbout', ['links'])
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        ...mapMutations('PublishAbout', ['ADDLink', 'RMLink', 'UPDATELink']),
        cacuWidth(e) {
            if (e < 700) {
                this.dialogWidth = '70%'
            } else if (e < 800) {
                this.dialogWidth = '65%';
            } else if (e < 900) {
                this.dialogWidth = '60%';
            } else if (e < 1080) {
                this.dialogWidth = '55%';
            } else if (e < 1200) {
                this.dialogWidth = '50%';
            } else {
                this.dialogWidth = '40%';
            }
        },
        conform() {
            if (this.form.name == null || this.form.link == null) {
                this.$message({message: '链接标题或URL不能为空', type: 'warning'});
                return;
            }

            this.dialogFormVisible = false;
            let copy = {}
            Object.assign(copy, this.form)
            if (this.index >= 0) {
                console.log([this.index, copy])
                this.UPDATELink([this.index, copy])
            } else {
                this.ADDLink(copy)
            }
            this.form.name = "";
            this.form.link = "";
            this.index = -1;


        },
        handleEdit(index, row) {
            console.log(index, row)
            this.index = index;
            this.form.name = row.name;
            this.form.link = row.link
            this.dialogFormVisible = true;
        },
        handleDelete(idx, row) {
            this.RMLink(idx);
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.cacuWidth(document.body.clientWidth);
        window.onresize = () => {
            return (() => {
                this.cacuWidth(document.body.clientWidth);
            })()
        }

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
.links {
    background: rgba(255, 255, 255, 0.9);
    /*margin-top: 10px;*/
    padding: 0 10px;
    border-radius: 4px;
    box-shadow: 0 0 1px #EBEEF5;
    font-size: 13px;
    color: #666;
}

</style>


