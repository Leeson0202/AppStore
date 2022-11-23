<template>
    <div class='publish-context'>
        <!--label-->
        <div class="icon-header">
            <div style="width: calc(100% - 220px);float: left;">
                <PublishLabels/>
                <!--description-->
                <div style="width: 100%;margin: 10px 0 0 10px">
                    <span style="font-size: 14px;color: #666;">&nbsp;&nbsp;应用描述：</span>
                    <el-input
                        style="margin-top: 5px; font-weight: 500"
                        type="textarea"
                        :rows="3"
                        placeholder="请输入相关描述"
                        v-model="description">
                    </el-input>
                </div>

            </div>
            <div style="width: 178px; float: right;background: #eee;justify-content: center;">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>

        </div>
        <!--links-->
        <h2>应用链接</h2>
        <PublishLinks/>


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
import PublishLabels from "@/components/publish/PublishLabels";
import PublishLinks from "@/components/publish/PublishLinks";


export default {
    name: "PublishContext",
    components: {PublishEditor, PublishLabels, PublishLinks},
    data() {
        //这里存放数据
        return {
            description: "",
        }
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('DownloadAbout', ['labelNames', 'typeNames']),
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
.publish-context {
    overflow: hidden;
}

.icon-header {
    width: calc(100% - 20px);
    min-height: 178px;
    overflow: auto;
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 0 10px #ebeef5;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.PublishLabels {
    display: inline-block;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
}

span {
    font-size: 14px;
    color: #666;
    user-select: none;
}

</style>


