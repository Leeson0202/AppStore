<template>
    <div class='publish-context'>
        <!--label-->
        <div class="icon-header">
            <div style="width: calc(100% - 220px);float: left;">
                <PublishLabels/>
                <!--description-->
                <div style="width: 100%;margin: 10px 0 0 10px">
                    <span class="h-span">&nbsp;&nbsp;应用描述：</span>
                    <el-input
                        style="margin-top: 6px; font-weight: 500"
                        type="textarea"
                        :rows="3"
                        placeholder="请输入相关描述"
                        v-model="description">
                    </el-input>
                </div>

            </div>
            <div
                class="icon-div">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="icon" :src="icon" class="avatar" alt="">
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
        return {}
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState('DownloadAbout', ['labelNames', 'typeNames']),
        ...mapState('PublishAbout', ['description']),
        // vuex 双向绑定
        description: {
            get() {
                return this.$store.state.PublishAbout.description;
            },
            set(newVal) {
                this.$store.commit('PublishAbout/SETDescription', newVal);
            }
        },
        icon: {
            get() {
                return this.$store.state.PublishAbout.icon;
            },
            set(newIcon) {
                this.$store.commit('PublishAbout/SETIcon', newIcon);

            }
        }
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
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

.icon-header {
    width: calc(100% - 20px);
    margin-top: 5px;
    min-height: 178px;
    overflow: auto;
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 0 10px #ebeef5;
}

.icon-div {
    width: 178px;
    height: 178px;
    overflow: hidden;
    float: right;
    background: #f5f5f5;
    justify-content: center;
    border-radius: 16px;
    margin-right: 4px;
    box-shadow: 0 0 10px #f5f5f5;
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

.h-span {
    font-size: 14px;
    font-weight: 500;
    color: #666;
    user-select: none;
}

</style>


