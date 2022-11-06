<template>
    <div>
        <carousel-3d :autoplay="true" :autoplay-timeout="3000" :display="5">
            <slide v-for="(photo,i) in photos" :index="i" :key="i">
                <template slot-scope="{index,isCurrent,leftIndex,rightIndex}">
                    <img class="spin_img" :src="photo.url" :data-index="index"
                         :class="{current: isCurrent, onLeft:(leftIndex>=0), onRight:(rightIndex>=0)}">
                </template>
            </slide>
        </carousel-3d>
        
    </div>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d'

export default {
    name: 'Swrapper',
    components: {
        Carousel3d,
        Slide,
    },
    data() {
        return {
            photos: [
                {url: 'http://www.fjjgdj.gov.cn/images/2021-07/24/68d8b282-9951-4120-8981-cd30d0730be1.jpg',},
                {url: 'http://www.fjjgdj.gov.cn/images/2021-07/06/22378766-6709-4b31-80af-b641ccf9829d.jpg',},
                {url: 'http://www.fjjgdj.gov.cn/images/2021-08/13/81f2483d-a16c-47d7-8eed-5bc576eb5110.jpg',},
                {url: 'http://www.fjjgdj.gov.cn/images/2021-07/02/da802d9b-85b4-4e95-a982-3dcabb5fd95e.jpg',},
                {url: 'http://www.fjjgdj.gov.cn/images/2021-07/16/65de3133-e528-4936-8f62-3c2be189761e.jpg',}],
        }
    },
}
</script>
<style scoped>
.badge_img {
    height: 60px;
}

.spin_img {
    width: 100%;
    height: 100%;
}
</style>