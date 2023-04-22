<template>
    <div class="Navigation">
        <div class="block" v-for="(item, index) in this.blockTitle" :key="index">
            <a :href="item.link">
                <div class="block-title">
                    <icon :class="item.icon"></icon>
                    <span>{{ blockTitle[index].name }}</span>
                </div>
            </a>
            <div class="block-context">
                <el-row :gutter="gutter">
                    <el-col :span="4" v-for="(content,i) in blockContents[item.tag]" :key="i">
                        <a :href="content.href" target="_blank">
                            <div class="grid-content">{{ content.name }}</div>
                        </a>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from ‘《组件路径》‘;

// 编程 Program
// 考研 KaoYan
// 考公 KaoGong
// 剪辑 Cut

import Program from "@/components/navigation/Program";

export default {
    name: "Navigation",
    components: {Program},
    data() {
        //这里存放数据
        return {
            gutter: 20,
            icon: '<icon className="el-icon-s-platform"></icon>',
            blockTitle: [
                {
                    name: "编程",
                    tag: "Program",
                    icon: "el-icon-s-platform",
                    link: "http://www.baidu.com"
                },
                {
                    name: "考研",
                    tag: "KaoYan",
                    icon: "el-icon-edit",
                    link: "http://www.baidu.com"
                },
                {
                    name: "考公",
                    tag: "KaoGong",
                    icon: "el-icon-s-claim",
                    link: "http://www.baidu.com"
                },
                {
                    name: "剪辑",
                    tag: "Cut",
                    icon: "el-icon-video-camera-solid",
                    link: "http://www.baidu.com"
                }],
            blockContents: {
                Program: [
                    {name: "GitHub", href: "https://github.com"},
                    {name: "Gitee", href: "https://gitee.com"},
                    {name: "CSDN", href: "https://www.csdn.net"},
                    {name: "牛客网", href: "https://www.nowcoder.com/"},
                    {name: "LeetCode", href: "https://leetcode-cn.com"},
                    {name: "菜鸟教程", href: "https://www.runoob.com"},
                    {name: "程序员客栈", href: "https://www.proginn.com"},
                    {name: "开源中国", href: "https://www.oschina.net"},
                    {name: "InfoQ", href: "https://www.infoq.cn"},
                    {name: "51CTO", href: "https://www.51cto.com"},
                    {name: "编程导航", href: "https://www.code-nav.cn"},
                    {name: "知乎", href: "https://www.zhihu.com"},
                    // 前端
                    {name: "VUE", href: "https://cn.vuejs.org"},
                    {name: "React", href: "https://zh-hans.reactjs.org"},
                    {name: "uni-app", href: "https://uniapp.dcloud.net.cn"},
                    {name: "Element", href: "https://element.eleme.io"},
                    {name: "Ant Design", href: "https://ant.design/index-cn/"},
                    {name: "Bootstrap", href: "https://www.bootcss.com"},
                    // 后端
                    {name: "Alibaba Java", href: "https://developer.aliyun.com/graph/java"},
                    {name: "Java 全栈技术", href: "https://www.pdai.tech"},
                    {name: "Java Guide", href: "https://github.com/Snailclimb/JavaGuide"},
                    {name: "Spring", href: "https://spring.io"},
                    {name: "MyBatis", href: "https://mybatis.org/mybatis-3/zh/getting-started.html"},
                    {name: "Spring Cloud", href: "https://spring.io/projects/spring-cloud"},
                    // 工具
                    {name: "Python", href: "https://www.python.org/"},
                    {name: "SQL", href: "https://www.runoob.com/sql/sql-intro.html"},
                    {name: "Redis", href: "https://redis.io/"},
                    {name: "MarkDown", href: "https://www.docker.com"},
                    {name: "Maven", href: "https://maven.apache.org/"},
                    {name: "Docker", href: "https://www.docker.com"},

                ],
                KaoYan: [
                    {name: "招生信息网", href: "https://yz.chsi.com.cn"},
                    {name: "中国教育在线", href: "https://kaoyan.eol.cn"},
                    {name: "考研真题", href: "https://kaoyan.eol.cn/shiti/"},
                    {name: "新东方考研", href: "https://kaoyan.koolearn.com/"},
                    {name: "文都考研", href: "https://kaoyan.wendu.com/"},
                    {name: "考研云", href: "https://www.kaoyany.top/"},
                    //资料
                    {
                        name: "考研数学",
                        href: "https://www.bilibili.com/video/BV1E24y1q76g/?spm_id_from=333.337.search-card.all.click&vd_source=c57db76bb6f89f430d3d266482d2ab3b"
                    },
                    {
                        name: "考研英语",
                        href: "https://www.bilibili.com/video/BV1TQ4y1D7dG/?spm_id_from=333.337.search-card.all.click&vd_source=c57db76bb6f89f430d3d266482d2ab3b"
                    },
                    {
                        name: "考研政治",
                        href: "https://www.bilibili.com/video/BV1b14y1K7wo/?spm_id_from=333.337.search-card.all.click&vd_source=c57db76bb6f89f430d3d266482d2ab3b"
                    },
                    {
                        name: "计算机网络",
                        href: "https://www.bilibili.com/video/BV19E411D78Q/?spm_id_from=333.337.search-card.all.click&vd_source=c57db76bb6f89f430d3d266482d2ab3b"
                    },
                    {
                        name: "操作系统",
                        href: "https://www.bilibili.com/video/BV1YE411D7nH/?spm_id_from=333.337.search-card.all.click&vd_source=c57db76bb6f89f430d3d266482d2ab3b"
                    },
                    {
                        name: "数据结构",
                        href: "https://www.bilibili.com/video/BV1b7411N798/?spm_id_from=333.337.search-card.all.click"
                    },
                ],
                KaoGong: [
                    {name: "中国国家图书馆", href: "http://www.nlc.cn"},
                    {name: "中国教育公务员网", href: "https://gongwuyuan.eol.cn/guojia/"},
                    {name: "公务员考试网", href: "https://www.chinagwy.org/"},
                    {name: "国家公务员局", href: "http://www.scs.gov.cn/"},
                    {name: "中公网校", href: "https://www.eoffcn.com/"},
                    {name: "华图在线", href: "https://v.huatu.com/"},
                ],
                Cut: [
                    // 学习
                    {name: "剪映", href: "https://www.capcut.cn/learning"},
                    {name: "万兴猫影", href: "https://miao.wondershare.cn/"},
                    {name: "抖助理", href: "https://www.douzhuli.shop/"},
                    {name: "虎课网", href: "https://huke88.com/"},
                    {name: "包图网", href: "https://ibaotu.com/shipin/?spm=zhjj2"},
                    {name: "新片场", href: "https://stock.xinpianchang.com/"},
                    {name: "爱给网", href: "https://www.aigei.com/"},
                    {name: "Pexels", href: "https://www.pexels.com/zh-cn/"},
                    // 视频
                    {name: "简视频", href: "https://www.aewz.com/"},
                    {name: "爱给网", href: "https://www.aigei.com/"},
                    {name: "Mixkit", href: "https://mixkit.co/"},
                    {name: "pixabay", href: "https://pixabay.com/"},
                    {name: "讯飞听见", href: "https://www.iflyrec.com/"},
                    {name: "潮点视频", href: "https://shipin520.com/"},
                    // 图片
                    {name: "万图聚", href: "https://www.wantuju.com/?r=15078"},
                    {name: "videvo", href: "hhttps://www.videvo.net/"},
                    {name: "openfootage", href: "https://www.openfootage.net/"},
                    {name: "coverr", href: "https://coverr.co/"},
                    {name: "mazwai", href: "https://mazwai.com/"},
                    {name: "FMA", href: "https://freemusicarchive.org/home"},
                ]
            }
        };
    }
    ,
//监听属性 类似于data概念
    computed: {}
    ,
//监控data中的数据变化
    watch: {}
    ,
//方法集合
    methods: {}
    ,
//生命周期 - 创建完成（可以访问当前this实例）
    created() {

    }
    ,
//生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.gutter = document.body.clientWidth > 800 ? 20 : document.body.clientWidth > 720 ? 10 : 6;
        window.onresize = () => {
            return (() => {
                this.gutter = document.body.clientWidth > 800 ? 20 : document.body.clientWidth > 720 ? 10 : 6;
            })();
        };
    }
    ,
    beforeCreate() {
    }
    , //生命周期 - 创建之前
    beforeMount() {
    }
    , //生命周期 - 挂载之前
    beforeUpdate() {
    }
    , //生命周期 - 更新之前
    updated() {
    }
    , //生命周期 - 更新之后
    beforeDestroy() {
    }
    , //生命周期 - 销毁之前
    destroyed() {
    }
    , //生命周期 - 销毁完成
    activated() {
    }
    , //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
a {
    text-decoration: none;
}

.block {
    margin: 50px auto 10px;
    padding-bottom: 2px;
    width: calc(100% - 20px);
    border-radius: 10px;
    box-shadow: 0 0 15px #ddd;
}

.block-title {
    display: inline-block;
    position: relative;
    top: -20px;
    left: 3%;
    width: 100px;
    height: 2em;
    line-height: 2em;
    text-align: center;
    justify-content: center;
    background: #c6d3e3;
    border-radius: 5px;
    box-shadow: 4px 4px 10px #c6d3e3;
    font-size: 18px;
    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    letter-spacing: 4px;
    font-weight: 450;
    color: #fff;
    cursor: pointer;
}

.block-title:hover {
    background: #adc3e0;
}

.block-context {
    position: relative;
    top: -10px;
    margin: 10px auto 0px;
    width: calc(100% - 30px);
    background: #fff;
}

@media screen and (max-width: 1000px) and (min-width: 900px) {
    .block-context {
        width: 90%;
    }
}

@media screen and (min-width: 1000px) and (max-width: 1260px) {
    .block-context {
        width: 80%;
    }
}

@media screen and (min-width: 1260px) {
    .block-context {
        width: 70%;
    }
}

.el-col {
    border-radius: 4px;
    margin-bottom: 20px;
}


.grid-content {
    margin: auto;
    border-radius: 4px;
    min-height: 36px;
    background: #fff;
    border: 1px #ccc solid;
    transition-duration: 0.4s;
    color: black;
    font-size: 14px;
    line-height: 3em;
    text-align: center;
    font-weight: bold;
}

.grid-content:hover {
    transition-duration: 0.4s;
    border: 1px #91c3f8 solid;
    box-shadow: 2px 4px 10px #ddd;
    color: #338dee;
}


</style>


