<template>
	<div>
		<detail-nav-bar :currentIndex="currentIndex"/>
		<!-- 详情页面轮播图 -->
		<detail-swiper :topImages="selecttopImages" class="activeStyle"/>
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
				topAllImages:[
					{imgId:1,imgs:['https://s11.mogucdn.com/mlcdn/c45406/180923_55hde511dkb0cc4h2g98kbhb2bjlj_640x960.jpg_640x960.v1cAC.70.webp','https://s11.mogucdn.com/mlcdn/c45406/180923_3l1bek12dldh32678e4l437eb7cg3_640x960.jpg_640x960.v1cAC.70.webp']},
					{imgId:2,imgs:['https://img.alicdn.com/imgextra/i1/2104668892/O1CN012oJb6s2FYaQqOW1CR-2104668892.jpg_430x430q90.jpg']}
					],
				selecttopImages:[],
				getTopImage:null
			}
		},
		computed:{
			//获取到用户指定的头部数据
			// getTopImagefun:function(){
			// 	console.log(this.topAllImages[0].imgId==this.id)
			// 	console.log(this.id)
			// 	console.log(this.topAllImages[0].imgId)
			// 	for(let i=0;i<this.topAllImages.length;i++){
			// 		if(this.topAllImages[i].imgId==this.id){ 
			// 			return this.topAllImages[i].imgs;
			// 		}else{
			// 			console.log("条件不满足")
			// 		}
			// 	}
			// }
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
			}
		},
		mounted(){

		},
		created(){

		},
		activated() {
			this.id=this.$route.params.id;
			this.getTopImagefun()
			console.log("当前数组数据："+this.selecttopImages)
			console.log("处于活动状态   "+this.id)
		},
		deactivated() {
			this.selecttopImages=[]
			this.id=0;
			console.log("离开页面")
		},
		beforeDestroy:function(){
			console.log("销毁前调用")
		},
		components:{
			DetailNavBar,
			getDetail,
			DetailSwiper
		}
	}
</script>

<style scoped>
	.activeStyle{
		height:300px;
	}
</style>
