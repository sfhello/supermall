!<template>
    <div class="tab-bar-item" @click="clickBar">
        <div  v-if="!isActive">
          <slot name="item-ioc"></slot>
        </div>
        <div v-else>
          <slot name="item-ioc-active"></slot>
        </div>
        <div :style="activeStyle">
          <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
      path:'',
      activeColor:{
        type:String,
        defalut:'red'  
      }
    },
    data(){
      return{
        //isActive:true
      }
    },
    methods:{
      clickBar(){
        this.$router.replace(this.path);
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !==-1;
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    }
}
</script>

<style scoped>
  @import"~assets/css/base.css";
  .tab-bar-item{
    flex: 1;
    text-align:center;
    height: 40px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px ;
    height: 24px;
    vertical-align: middle;
  }
  .active{
    color: red;
  }
</style>
