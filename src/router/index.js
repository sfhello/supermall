import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//const tabbar = ()=>import('../components/tabbar')

const Home = ()=>import('views/home/Home');
const Category=()=>import('views/category/Category');
const Cart=()=>import('views/cart/cart');
const Profile =()=>import('views/profile/Profile');
const Detail =()=>import('views/detail/Detail');

Vue.use(Router)

const router = [
  {
    path:'*',
    redirect:'/home'
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    meta:{
      title:'首页'
    },
    component:Home
  },
  {
    path:'/Category',
    meta:{
      title:'分类'
    },
    component:Category
  },
  {
    path:'/Profile',
    meta:{
      title:'我的'
    },
    component:Profile
  },
  {
    path:'/Cart',
    meta:{
      title:'购物车'
    },
    component:Cart
  },
	{
    path:'/Detail/:id',
    meta:{
      title:'详情'
    },
		component:Detail
	}
]

var RouterConfig = {
  routes:router,
  mode:'history'
}
const newrouter = new Router(RouterConfig)
newrouter.beforeEach((to,from,next)=>{
  window.document.title=to.meta.title;
  next();
})
export default newrouter
