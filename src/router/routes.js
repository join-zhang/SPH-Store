// 引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
export default [
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      name:"addCartSuccess",
      path: "/addCartSuccess",
      component: AddCartSuccess,
      meta: { show: true },
    },
    {
      path: "/shopcart",
      component: ShopCart,
      meta: { show: true },
    },
    {
      path: "/detail/:skuid",
      component: Detail,
      meta: { show: true },
    },
    {
      name: "search",
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
    },

    // 重定向,项目跑起来的时候,访问,立马让它定向到首页
    {
      path: "*",
      redirect: "/home",
    },
  ]