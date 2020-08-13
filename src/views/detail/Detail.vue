<template>
	<div>
		<detail-nav-bar :currentIndex="currentIndex"/>
		<!-- 详情页面轮播图 -->
		<detail-swiper :topImages="selecttopImages"/>
	</div>
</template>

<script>
	import DetailNavBar from 'views/detail/childComps/DetailNavBar';
	import DetailSwiper from 'views/detail/childComps/DetailSwiper';
	import {getDetail} from 'network/detail';
	export default{
		name:"Detail",
		data(){
			return{
				id:null,
				currentIndex:0,
				topAllImages:[{imgId:1,imgs:['https://s11.mogucdn.com/mlcdn/c45406/180923_55hde511dkb0cc4h2g98kbhb2bjlj_640x960.jpg_640x960.v1cAC.70.webp','https://s11.mogucdn.com/mlcdn/c45406/180923_3l1bek12dldh32678e4l437eb7cg3_640x960.jpg_640x960.v1cAC.70.webp']}],
				selecttopImages:[],
				getTopImage:null
			}
		},
		methods:{
			//获取到用户指定的头部数据
			getTopImagefun:function(){
				console.log(this.topAllImages[0].imgId==this.id)
				console.log(this.id)
				console.log(this.topAllImages[0].imgId)
				for(let i=0;i<this.topAllImages.length;i++){
					if(this.topAllImages[i].imgId==this.id){ 
						
						this.selecttopImages=this.topAllImages[i].imgs;
					}else{
						console.log("条件不满足")
					}
				}
				//console.log(this.selecttopImages)
			}
		},
		mounted(){
			this.id=this.$route.params.id;
			this.getTopImagefun()
		},
		created(){
			this.id=this.$route.params.id;
			//this.getTopImagefun()
			console.log("数据为==="+ this.selecttopImages)
			// //根据id请求详细数据
			// getDetail(this.id).then(res=>{
			// 	//console.log(res)
			// 	//获取不到数据，所以数据写死
			// 	//this.topImages=[]
			// })
		},
		activated() {
			this.id=this.$route.params.id;
			console.log("处于活动状态   "+this.id)
		},
		deactivated() {
			this.selecttopImages=[]
			this.id=0;
		},
		components:{
			DetailNavBar,
			getDetail,
			DetailSwiper
		}
	}
</script>

<style scoped>
</style>
