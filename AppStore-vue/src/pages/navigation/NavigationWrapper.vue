<template>
    <div class="wrap">
        <div class="wrap-item" v-for="(item, i) in cimgs" :key="i" :class="[index === i ? 'active': '']">
            <img :src="item" alt="1"/>
        </div>
        <button @click="goPre" class="btn" id="leftBtn"></button>
        <button @click="goNext" class="btn" id="rightBtn"></button>
    </div>
</template>

<script>
export default {
    name: 'Wrapper',
    data() {
        return {
            index: 0,
            timer: '',
            cimgs: [
                'https://up.iosdesk.com/pic_source/31/6a/45/316a45e3e1c6ed980a050f53aafbf128.jpg',
                'https://up.iosdesk.com/pic_source/2b/0a/59/2b0a590ea0eebb1beba5c1e0cdcc133b.jpg',
                'https://up.iosdesk.com/pic_source/c0/2a/71/c02a716f8f66d4d0bbe9c7f75bcc883f.jpg',
                'https://up.iosdesk.com/pic_source/fb/66/70/fb667045101b6ab6353517f60b3464e3.jpg'

            ],
        }
    },
    //  通过props向子组件传递数据
    props: [],
    created() {
        this.goAuto()
    },
    methods: {
        goPre() {
            this.clear()
            // console.log(this.index)
            if (this.index >= 1) {
                this.index--
            } else {
                this.index = 3
            }
            this.goAuto()
        },
        goNext() {
            this.clear()
            // console.log(this.index)
            if (this.index < 3) {
                this.index++
            } else {
                this.index = 0
            }
            this.goAuto()
        },
        // 自动跑
        goAuto() {
            this.timer = setInterval(this.goNext, 2000)
        },
        //  关闭自动跑
        clear() {
            clearInterval(this.timer)
        }
    }
}
</script>

<style lang="less" scoped>
* {
    padding: 0;
    margin: 0;
}

.wrap {
    position: relative;
    height: 230px;
    width: 100%;
    margin-bottom: 10px;

    > .active {
        z-index: 10;
    }

    > .btn {
        position: absolute;
        height: 100%;
        width: 50%;
        top: 0;
        z-index: 15;
        opacity: 0;
    }

    > #leftBtn {
        left: 0;
    }

    > #rightBtn {
        right: 0;
    }

    > .wrap-item {
        width: 100%;
        height: 100%;
        position: absolute;

        > img {
            width: 100%;
            height: 100%;
            z-index: 7;
            position: absolute;
        }
    }
}
</style>
