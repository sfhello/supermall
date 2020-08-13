!<template>
  <div class="tab-control">
      <div class="tab-control-item" :class="{active: currentIndex === index}" @click="itemClick(index)" v-for="(item,index) in titles" >
            <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
    export default {
        name:'TabControl',
        props:{
            titles:{
                type:Array,
                default:[]
            }
        },
        data(){
            return{
                currentIndex:0
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex = index;
                // 2.发出事件
                this.$emit('itemClick', index)
            }
        }
    }
</script>

<style scoped>
    .tab-control{
        display:flex;
        text-align:center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background-color:pink;
        margin-bottom:2px;
    }
    .tab-control-item{
        flex: 1;
    }
    .tab-control-item span{
        padding:5px;

    }
    .active{
        color: red;
    }
    .active span{
         border-bottom: 2px solid rgb(255, 0, 0);
    }
</style>
