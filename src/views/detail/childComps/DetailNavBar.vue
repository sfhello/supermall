<template>
	<nav-bar>
		<div class="title" slot="center">
			<img slot="left" src="~assets/img/common/back.svg" @click="backClick"/>
			<span v-for="(detailItem,index) in titleInfos" :class="{'active':index===currentIndex}">{{detailItem}}</span>
		</div>
	</nav-bar>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar';
	export default{
		name:"DetailNavBar",
		props:{
			titleInfos: {
				type:Array,
				default: () => {
					 return ['商品', '参数', '评论', '推荐']
				}
			},
			currentIndex:{
				type:Number,
				default:0
			}
		},
		components:{
			NavBar
		},
		data(){
			return{
				
			}
		},
		mounted() {
			
		},
		methods:{
			backClick(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	.title{
		display: flex;
		justify-content: center;
		/* width: 70%; */
		margin: 0 auto;
	}
	.title span{
		flex: 1;
		text-align: center;
	}
	.title img{
		margin-left: 8px;
	}
	.active{
		color: red;
	}
</style>
