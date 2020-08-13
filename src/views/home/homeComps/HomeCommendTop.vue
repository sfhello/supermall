!<template>
    <div class="recommendtop">
        <div v-for="img in imgList" class="imgbox">
            <a href="#"><img class="imgTop" :src="img.imgitem"/><p>{{img.txtcontent}}</p></a>
         </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import top1 from 'assets/img/home/recommend-top1.jpg';
    import top2 from 'assets/img/home/recommend-top2.jpg';
    import top3 from 'assets/img/home/recommend-top3.jpg';
    import top4 from 'assets/img/home/recommend-top4.jpg';

    export default {
        name:'HomeCommendTop',
        data(){
            return{
                imgList:[
                    {imgitem:top1,txtcontent:'新人福利'},
                    {imgitem:top2,txtcontent:'上衣推新'},
                    {imgitem:top3,txtcontent:'性感萝莉'},
                    {imgitem:top4,txtcontent:'新人福利'}]
            }
        }
    }
</script>

<style scoped>
    .recommendtop{
        display: flex;
        margin-top: 5px;
        height: 110px;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
        margin-bottom: 15px;
    }
    
    .imgTop{
        border: 1px solid #ffffff;
        width: 70px;
        height: 70px;
        border-radius: 60px;
    }
    .imgbox{
        display: inline-block;
        text-align: center;
        width: 70px;
        flex: 1;
    }
    p{
        font-size: 10px;
    }
</style>
