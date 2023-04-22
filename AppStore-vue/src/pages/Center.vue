<template>
    <div class="Center">
        <div class="background-block"
        style="background-image: url('/public/assets/img/code.jpg')">
        </div>

        <SimpleIntroduce></SimpleIntroduce>

        <div class="center-main">
            <div class="table left-table">
                <span class="title">商城</span>
                <div class="shopping">
                    <el-row>
                        <el-col :span="12">
                            <div class="icon-card">
                                <img class="create-icon"
                                     src="https://static.nowcoder.com/fe/file/site/www-web/prod/1.0.198/imageAssets/11054f17f1cdf89c8752.png"
                                     alt="">
                                <span>充值</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="icon-card">
                                <img class="create-icon"
                                     src="https://static.nowcoder.com/fe/file/site/www-web/prod/1.0.198/imageAssets/e3019e1e4422eed85ced.png"
                                     alt="">
                                <span>钱包</span>
                            </div>
                        </el-col>
                    </el-row>

                </div>
                <span class="title">创作</span>
                <div class="success-block">
                    <el-row>
                        <el-col :span="8">
                            <div class="icon-card">
                                <img class="create-icon"
                                     src="https://static.nowcoder.com/fe/file/site/www-web/prod/1.0.198/imageAssets/5f3cba21e3788b7c2f64.png"
                                     alt="">
                                <span>写笔记</span>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="icon-card">
                                <img class="create-icon"
                                     src="https://static.nowcoder.com/fe/file/oss/1663211275469KLCEW.png"
                                     alt="">
                                <span>发软件</span>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="icon-card">
                                <img class="create-icon"
                                     src="https://static.nowcoder.com/fe/file/oss/1663211391562CIOLJ.png"
                                     alt="">
                                <span>写策略</span>
                            </div>
                        </el-col>
                    </el-row>

                </div>
                <span class="title">我的专栏</span>
                <div class="l_block">
                    <div class="contents-l" v-for="(item,i) in contentsL" :key="i">
                        <span class="content-left">{{ item.title }}</span>
                        <span class="content-right">{{ item.sum }}篇</span>
                    </div>
                </div>
            </div>
            <!-- right-->
            <div class="table right-table">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="最近" name="first">
                        <ColLabel :data="Cols[0]"></ColLabel>
                    </el-tab-pane>

                    <el-tab-pane label="文章" name="second">
                        <ColLabel :data="Cols[1]"></ColLabel>
                    </el-tab-pane>

                    <el-tab-pane label="问答" name="third">
                        <ColLabel :data="Cols[0]"></ColLabel>
                    </el-tab-pane>
                    <el-tab-pane label="视频" name="fourth">
                        <ColLabel :data="Cols[1]"></ColLabel>
                    </el-tab-pane>
                    <el-tab-pane label="反馈" name="fifth">
                        <ColLabel :data="Cols[0]"></ColLabel>
                    </el-tab-pane>
                    <el-tab-pane label="收藏" name="sixth">
                        <ColLabel :data="Cols[1]"></ColLabel>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div style="clear:both "></div>
        </div>

    </div>
</template>

<script>
import SimpleIntroduce from "@/components/center/SimpleIntroduce.vue";
import ColLabel from "@/components/center/ColLabel.vue";

export default {
    name: "Center",
    components: {SimpleIntroduce, ColLabel},
    data() {
        return {
            activeName: 'first',
            "backgroundImg": '/public/assets/img/background1.jpg',
            contentsL: [
                {img: "", title: "Java", sum: 10},
                {img: "", title: "Python", sum: 9},
                {img: "", title: "Vue", sum: 17},
                {img: "", title: "Redis", sum: 2},
                {img: "", title: "SQL", sum: 4},
                {img: "", title: "Spring", sum: 7},
                {img: "", title: "Docker", sum: 1},
            ],
            Cols: [
                [
                    {
                        title: "Vue router push跳转相同页面,改变参数未生效问题，进行强制跳转刷新",
                        desc: "Vue router push跳转相同页面,改变参数未生效问题，进行强制跳转刷新",
                        time: "2022/10/25",
                        read: 100,
                        like: 10,
                        comment: 6
                    },
                    {
                        title: "数据库优化策略和注意事项",
                        desc: "为了达到更好的Mysql数据库性能，我们采用的数据库优化。",
                        time: "2022/10/28",
                        read: 231,
                        like: 10,
                        comment: 6
                    },
                    {
                        title: "IP、TCP、UDP、DNS头部格式",
                        desc: "具体解析请点击下方链接",
                        time: "2022/10/29",
                        read: 340,
                        like: 56,
                        comment: 2
                    },
                    {
                        title: "Redis基础 - 2.4五大数据类型 哈希表",
                        desc: "Redis基础 - 2.4五大数据类型 哈希表",
                        time: "2022/10/30",
                        read: 401,
                        like: 14,
                        comment: 5
                    },
                    {
                        title: "Markdown文字显示",
                        desc: "Markdown显示隐藏文字",
                        time: "2022/11/20",
                        read: 175,
                        like: 18,
                        comment: 7
                    },
                ],
                [
                    {
                        title: "Error resolving template template might not exist or might not be accessible",
                        desc: "解决Error resolving template template might not exist or might not be accessible\n" +
                            "可能你的controller注解的问题",
                        time: "2022/10/25",
                        read: 312,
                        like: 15,
                        comment: 6
                    },
                    {
                        title: "Python连接MySQL",
                        desc: "修改数据库后数据进去了但是还没有保持，\n" +
                            "一定要使用connect对象commit()方法\n" +
                            "如果要取消修改，使用connect对象的rollback()方法",
                        time: "2022/10/28",
                        read: 231,
                        like: 10,
                        comment: 6
                    },
                    {
                        title: "IP、TCP、UDP、DNS头部格式",
                        desc: "具体解析请点击下方链接",
                        time: "2022/10/29",
                        read: 340,
                        like: 56,
                        comment: 2
                    },
                    {
                        title: "Redis基础 - 2.4五大数据类型 哈希表",
                        desc: "Redis基础 - 2.4五大数据类型 哈希表",
                        time: "2022/10/30",
                        read: 401,
                        like: 14,
                        comment: 5
                    },
                    {
                        title: "Markdown文字显示",
                        desc: "Markdown显示隐藏文字",
                        time: "2022/11/20",
                        read: 175,
                        like: 18,
                        comment: 7
                    },
                ],
            ]

        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
};
</script>

<style scoped>
.Center {
    margin-top: 10px;
    min-height: calc(100% - 110px);
}

.background-block {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 100%;
    height: 130px;
    overflow: hidden;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;

}

.SimpleIntroduce {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}


.center-main {
    margin-top: 8px;
    min-height: 500px;
}


.table {
    float: left;
    position: relative;
    border-radius: 6px;
    padding: 14px 8px 14px;
    display: inline-block;
    background: #f3f3f3;
}

.left-table {
    width: calc(35% - 40px);
}

.right-table {
    min-height: 500px;
    width: 65%;
    margin-left: 8px;
}

.title {
    display: block;
    margin-left: 10px;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 480;
}

.title:nth-child(n+2) {
    margin-top: 16px;
}

.el-col {
    text-align: center;
}

.icon-card {

    margin-left: 10px;
    display: inline-block;
    width: 50px;
    cursor: pointer;
}

.create-icon {
    width: 50px;
}

.l_block {
    width: calc(100% - 10px);
}

.contents-l {
    padding-left: 10px;
    margin-top: 4px;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
}

.contents-l:hover {
    background: #dddddd;
}

.content-left {
    float: left;
}

.content-right {
    float: right;
    margin-right: 10px;
    font-weight: inherit;
}
</style>