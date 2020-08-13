!<template>
    <div>
        <div class="home">
            <nav-bar><label slot="center">购物街</label></nav-bar>
        </div>
		<tab-control class="tab-control" :titles="['流行', '新款', '精选']" @itemClick="tabClick" ref="tabControl1" v-show="isTabFixed"></tab-control>
        <!-- @scroll="contentScroll" @pullingUp="loadMore" :pull-up-load="true" :probe-type="3" -->
        <scroll @scroll="contentScroll" @pullingUp="loadMore" :pull-up-load="true" :probe-type="3" class="scrollf" ref="homeScroll">
            <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
            <home-commend-top></home-commend-top>
            <feature-view></feature-view>
            <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @itemClick="tabClick" ref="tabControl2"></tab-control>
            <GoodsListItem :goodslistinfo="showGoodsList"></GoodsListItem>
        </scroll>
		<!-- 回到页面顶部 -->
        <back-top @click.native="backClick" :probe-type=3 v-show="showBackTop"></back-top>
    </div>

</template>

<script type="text/ecmascript-6">
    import NavBar from 'components/common/navbar/NavBar';
    import {getHomeMultidata,getHomeData} from 'network/home';
    import HomeSwiper from './homeComps/HomeSwiper';
    import HomeCommendTop from 'views/home/homeComps/HomeCommendTop';
    import FeatureView from 'views/home/homeComps/FeatureView';
    import TabControl from 'components/content/tabControl/TabControl';
    import Scroll from 'components/common/scroll/Scroll';
    import GoodsListItem from 'views/home/homeComps/GoodsListItem';
    import {NEW, POP, SELL, BACKTOP_DISTANCE} from "@/common/const";
    import BackTop from 'components/content/backTop/BackTop';


    export default {
        name:'Home',
        components:{
            NavBar,
            HomeSwiper,
            HomeCommendTop,
            FeatureView,
            TabControl,
            GoodsListItem,
            Scroll,
            BackTop
        },
        data:function(){
            return {
                banners:[],
                recommend:[],
                keywords:[],
                dKeyword:[],
                goodsList: {
                    'pop': {page: 1, list: [
                        {id:1,title:'小香风时尚套装韩版女不规则拼接破洞马甲条纹衬衫铅脚裤三件套',img:'https://s17.mogucdn.com/mlcdn/c45406/171007_2hal4k4idif0dcfd7hd9l1kka6blf_640x960.jpg_600x800.v1cAC.40.webp',price:70,orprice:79},
                        {id:2,title:'秋装新款清新时尚露肩长袖针织衫上衣+半身长裙子套装',img:'https://s5.mogucdn.com/mlcdn/c45406/170805_4ggf1ffj6161bb48j0iailkhkb744_640x960.jpg',price:91.7,orprice:131},
                        {id:3,title:'秋装女新款纯色系带长袖衬衫+高腰中长款背带半身裙女闺蜜装',img:'https://s5.mogucdn.com/mlcdn/c45406/180921_59bdl36k1l9bl1jf8ddlkgi63cf66_640x960.jpg',price:98,orprice:140},
                        {id:4,title:'秋装新款套装韩版时尚长袖牛仔短外套+高腰短裙半身裙两件套女装',img:'https://s5.mogucdn.com/mlcdn/c45406/171011_3e9bje65kblkb0k5cg99h1dih84ka_640x960.jpg',price:69.3,orprice:99},
                        {id:5,title:'春装新款气质女装两件套裤网红复古衬衫上衣阔腿裤时尚套装女',img:'https://s5.mogucdn.com/mlcdn/c45406/180920_751ce70j73cb8ab5hah71271ai9gg_640x960.jpg',price:89,orprice:127.15},
                        {id:6,title:'秋装新款韩版背心针织毛衣马甲长袖衬衫打底裤三件套省心套装',img:'https://s2.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg_600x800.v1cAC.40.webp',price:75.72,orprice:75.72},
                        {id:7,title:'2020春秋装新款韩版气质女神名媛小香风微胖显瘦职业套装',img:'https://s5.mogucdn.com/mlcdn/c45406/180821_65cg8if8fgb9k20ice7c6eb8c6iki_640x960.jpg',price:85,orprice:121.43},
                        {id:8,title:'夏季新款韩版气质中长款圆领套头短袖T恤秋季高腰收腰开叉不规则半身裙秋装时尚套装两件套女装',img:'https://s11.mogucdn.com/mlcdn/c45406/180605_1fj1b3332c71966kg2g7lddf56a7k_640x960.jpg',price:99,orprice:141.43}]},
                    'new': {page: 1, list: [
                        {id:1,title:'小香风时尚套装韩版女不规则拼接破洞马甲条纹衬衫铅脚裤三件套',img:'https://s17.mogucdn.com/mlcdn/c45406/171007_2hal4k4idif0dcfd7hd9l1kka6blf_640x960.jpg_600x800.v1cAC.40.webp',price:70,orprice:79},
                        {id:2,title:'秋装新款清新时尚露肩长袖针织衫上衣+半身长裙子套装',img:'https://s5.mogucdn.com/mlcdn/c45406/170805_4ggf1ffj6161bb48j0iailkhkb744_640x960.jpg',price:91.7,orprice:131},
                        {id:3,title:'秋装女新款纯色系带长袖衬衫+高腰中长款背带半身裙女闺蜜装',img:'https://s5.mogucdn.com/mlcdn/c45406/180921_59bdl36k1l9bl1jf8ddlkgi63cf66_640x960.jpg',price:98,orprice:140},
                        {id:4,title:'秋装新款套装韩版时尚长袖牛仔短外套+高腰短裙半身裙两件套女装',img:'https://s5.mogucdn.com/mlcdn/c45406/171011_3e9bje65kblkb0k5cg99h1dih84ka_640x960.jpg',price:69.3,orprice:99},
                        {id:5,title:'春装新款气质女装两件套裤网红复古衬衫上衣阔腿裤时尚套装女',img:'https://s5.mogucdn.com/mlcdn/c45406/180920_751ce70j73cb8ab5hah71271ai9gg_640x960.jpg',price:89,orprice:127.15},
                        {id:6,title:'秋装新款韩版背心针织毛衣马甲长袖衬衫打底裤三件套省心套装',img:'https://s2.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg_600x800.v1cAC.40.webp',price:75.72,orprice:75.72},
                        {id:7,title:'2020春秋装新款韩版气质女神名媛小香风微胖显瘦职业套装',img:'https://s5.mogucdn.com/mlcdn/c45406/180821_65cg8if8fgb9k20ice7c6eb8c6iki_640x960.jpg',price:85,orprice:121.43},
                        {id:8,title:'夏季新款韩版气质中长款圆领套头短袖T恤秋季高腰收腰开叉不规则半身裙秋装时尚套装两件套女装',img:'https://s11.mogucdn.com/mlcdn/c45406/180605_1fj1b3332c71966kg2g7lddf56a7k_640x960.jpg',price:99,orprice:141.43}]},
                    'sell': {page: 1, list: [
                        {id:1,title:'小香风时尚套装韩版女不规则拼接破洞马甲条纹衬衫铅脚裤三件套',img:'https://s17.mogucdn.com/mlcdn/c45406/171007_2hal4k4idif0dcfd7hd9l1kka6blf_640x960.jpg_600x800.v1cAC.40.webp',price:70,orprice:79},
                        {id:2,title:'秋装新款清新时尚露肩长袖针织衫上衣+半身长裙子套装',img:'https://s5.mogucdn.com/mlcdn/c45406/170805_4ggf1ffj6161bb48j0iailkhkb744_640x960.jpg',price:91.7,orprice:131},
                        {id:3,title:'秋装女新款纯色系带长袖衬衫+高腰中长款背带半身裙女闺蜜装',img:'https://s5.mogucdn.com/mlcdn/c45406/180921_59bdl36k1l9bl1jf8ddlkgi63cf66_640x960.jpg',price:98,orprice:140},
                        {id:4,title:'秋装新款套装韩版时尚长袖牛仔短外套+高腰短裙半身裙两件套女装',img:'https://s5.mogucdn.com/mlcdn/c45406/171011_3e9bje65kblkb0k5cg99h1dih84ka_640x960.jpg',price:69.3,orprice:99},
                        {id:5,title:'春装新款气质女装两件套裤网红复古衬衫上衣阔腿裤时尚套装女',img:'https://s5.mogucdn.com/mlcdn/c45406/180920_751ce70j73cb8ab5hah71271ai9gg_640x960.jpg',price:89,orprice:127.15},
                        {id:6,title:'秋装新款韩版背心针织毛衣马甲长袖衬衫打底裤三件套省心套装',img:'https://s2.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg_600x800.v1cAC.40.webp',price:75.72,orprice:75.72},
                        {id:7,title:'2020春秋装新款韩版气质女神名媛小香风微胖显瘦职业套装',img:'https://s5.mogucdn.com/mlcdn/c45406/180821_65cg8if8fgb9k20ice7c6eb8c6iki_640x960.jpg',price:85,orprice:121.43},
                        {id:8,title:'夏季新款韩版气质中长款圆领套头短袖T恤秋季高腰收腰开叉不规则半身裙秋装时尚套装两件套女装',img:'https://s11.mogucdn.com/mlcdn/c45406/180605_1fj1b3332c71966kg2g7lddf56a7k_640x960.jpg',price:99,orprice:141.43}]}
                },
                currentType:'pop',
                goodslistinfo:[],
                showBackTop:false,
				isTabFixed:false,
				tabOffsetTop:0
            }
        },
        created(){
            getHomeMultidata().then(res=>{
                this.banners=res.data.banner.list;
                this.recommends=res.data.recommend.list;
                this.keywords = res.data.keywords.list;
                this.dKeyword=res.data.dKeyword.list;
            }).catch(err=>{
                console.log(err);
            }),
            this.getHomeProducts(this.goodsList.pop);
            
        },
        methods:{
            contentScroll(position) {
                // 1.决定tabFixed是否显示
                this.isTabFixed = position.y < -this.tabOffsetTop

                // 2.决定backTop是否显示
                this.showBackTop = position.y < -BACKTOP_DISTANCE
            },
            loadMore() {
                    this.getHomeProducts(this.currentType)
            },
            getHomeProducts(type){
                let currentPage=type.page+1;
                getHomeData(type,currentPage).then(res=>{
                    //暂时不能从网络接口获取数据，数据来自与静态文件    
                    console.log(res);
                })
            },
            
            //事件监听相关方法,防抖函数解决$on频繁刷新的问题
            debounce(fun,delay){
                let timer = null;
                return function(...args){
                    if(timer) clearTimeout(timer)
                    timer=setTimeout(() => {
                        fun.apply(this,args)
                    }, delay);
                }
            },


            tabClick(index){
                switch(index){
                    case 0:
                        this.currentType='pop'
                        this.goodslist=this.goodsList
                        break;
                    case 1:
                        this.currentType='new'
                        break;
                    case 2:
                        this.currentType='sell'
                        break;
                }
                console.log("this is index==="+index)
				this.$refs.tabControl1.currentIndex=index;
				this.$refs.tabControl2.currentIndex=index
            },

            //点击向上箭头回到页面顶部
            backClick(){
                this.$refs.homeScroll.scroll.scrollTo(0,0,1000);

            },
			//监听首页轮播图是否加载完成
			swiperImageLoad(){
				//$el 所有组件都有这个属性，用于获取组件的Html元素
				this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop  //获取tabControl的offsetTop值
				console.log("offsettop=="+this.tabOffsetTop)
			}
        },
        computed:{
            showGoodsList() {
                return this.goodsList[this.currentType].list;
            }
        },
        mounted(){

            //this.debounce(this.$refs.homeScroll.refresh,1000);
            //监听每一张图片的load事件
            // this.$bus.$on('itemImageLoad',()=>{
                    
            //     //console.log(reflush);
            //     //this.$refs.homeScroll.refresh();
            //     this.debounce(this.$refs.homeScroll.refresh,100);
            //     console.log("=========");
            // }); 
        }
    }
</script>

<style scoped>
    .home{
        padding:0;
        margin:0;
        color:white;
        background-color:rgb(243, 56, 87);
        text-align: center;
    }
    .scrollf{
        height: calc(100vh - 86px);
        overflow: hidden;
    }
/* 	.fixed{
		position: fixed;
		left: 0;
		right: 0;
		top: 44px;
	} */
</style>
