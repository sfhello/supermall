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
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/Category',
    component:Category
  },
  {
    path:'/Profile',
    component:Profile
  },
  {
    path:'/Cart',
    component:Cart
  },
	{
		path:'/Detail/:id',
		component:Detail
	}
]
export default new Router({
  routes:router,
  model:'history'
})
