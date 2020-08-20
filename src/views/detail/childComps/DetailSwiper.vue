!<template>
    <swiper>
        <swiper-item v-for="(item,index) in topImages" :key="index" v-if="topImages.length>0">
            <img :src="item" id="swiperImg"/>
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
        data(){
            return{
                imgSize:this.topImages.length,
                newImgList:[]
            }
        },
        computed:{
            reComputedTopImg:function(){
                this.newImgList=this.topImages
                console.log(" this.newImgLis=="+ this.topImages)
            }
        },
        methods:{
            reViewSwiper:function(){
                var swiperImg = document.getElementById("swiperImg")
                swiperImg.parentNode.removeChild("swiperImg")
            }
        },
        created(){
        },
        activated(){
            
        },
        deactivated(){
            console.log("topImages==="+this.topImages)
        },
        components:{
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>
</style>
