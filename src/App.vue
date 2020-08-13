<template>
  <div id="app">
    <main-tabbar></main-tabbar>
		<!-- 当用户点击其他路由的时候上一个页面不销毁，保持在原来的位置 -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
  </div>
</template>

<script>
  // import TabBar from './components/tabbar/tabbar';
  // import TabBarItem from './components/tabbar/TabBarItem';
  import Home from './views/home/Home';
  import mainTabbar from './components/content/mainTabbar/mainTabbar';
  export default {
    name: 'App',
    components:{
      // TabBar,
      // TabBarItem,
      mainTabbar
    }
  }
</script>

<style lang="less">
// @import "./assets/css/base.css";
    
</style>
