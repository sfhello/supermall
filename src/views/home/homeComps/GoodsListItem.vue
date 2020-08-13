!<template>
  <div class="goods">
      <div class="goods-info" v-for="item in goodslistinfo" @click="itemClick(item.id)">
            <img :src="item.img" @load="ImageLoad"/>
            <p>{{item.title}}</p>
            <div class="labelbox">
                <label class="two">原价：{{item.orprice}}</label>
                <label class="one">现售价：{{item.price}}</label>
            </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name:'GoodsListItem',
        props:{
            goodslistinfo:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
                ImageLoad(){//使用事件总线($bus)监听图片的load事件
                    this.$bus.$emit('itemImageLoad');
                },
				//首页商品点击事件
				itemClick(id){
					// console.log("click start"+id)
					this.$router.push('/Detail/'+id);
				}
        }
    }
</script>

<style scoped>
    .goods{
        display:flex;
        flex-wrap: wrap;
        justify-content:space-around;
        padding-left: 1px;
        padding-bottom: 40px;
    }
    .goods-info{
        /* display:flex; */
        width:170px;
        align-content: center;
        flex-direction: column;
        padding-bottom: 5px;
    }
    .goods-info img{
        width: 100%;
    }
    .goods-info p{
        align-content: center;
        width:90%;
        font-size:11px;
        overflow: hidden;
        white-space: nowrap;
    }
    .goods-info label{
        font-size:10px;
    }
    .labelbox{
        padding:5px;
        display:flex;
        flex-direction: row-reverse;
        justify-content:space-around;
        font-size: 8px;
        color: red;
    }
</style>
