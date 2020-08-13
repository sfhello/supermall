<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img src="~assets/img/tabbar/home.svg" slot="item-ioc">
        <img src="~assets/img/tabbar/home_active.svg" slot="item-ioc-active"> 
        <div slot="item-text">首页</div>
      </tab-bar-item>
       <tab-bar-item path="/category" activeColor="red">
        <img src="~assets/img/tabbar/category.svg" slot="item-ioc">
        <img src="~assets/img/tabbar/category_active.svg" slot="item-ioc-active"> 
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~assets/img/tabbar/shopcart.svg" slot="item-ioc">
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-ioc-active"> 
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img src="~assets/img/tabbar/profile.svg" slot="item-ioc">
        <img src="~assets/img/tabbar/profile_active.svg" slot="item-ioc-active"> 
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
  import TabBar from 'components/common/tabbar/tabbar';
  import TabBarItem from 'components/common/tabbar/TabBarItem';
  export default{
    name:"mainTabbar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>