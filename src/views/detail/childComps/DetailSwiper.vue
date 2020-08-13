!<template>
    <swiper>
        <swiper-item v-for="item in topImages">
            <img :src="item"/>
        </swiper-item>
    </swiper>
</template>

<script type="text/ecmascript-6">
    import {Swiper, SwiperItem} from 'components/common/swiper';

    export default {
        name:'DetailSwiper',
        props:{
            topImages:{
                defalut(){
                    []
                }
            }
        },
        components:{
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>
</style>
