// 引入路由组件
// import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
// 引入二级路由组件
import MyOrder from "@/pages/Center/MyOrder";
import GroupOrder from "@/pages/Center/GroupOrder";
export default [
  {
    path: "/home",
    component: ()=>import("@/pages/Home"),
    meta: { show: true },
  },
  {
    path: "/center",
    component: Center,
    meta: { show: true },

    // 二级路由组件
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { show: true },
  },
  {
    path: "/pay",
    component: Pay,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if(from.path == "/trade"){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: "/trade",
    component: Trade,
    meta: { show: true },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 如果要进入到交易trade页面  必须是从交易页面而来
      if(from.path == "/shopcart"){
        next()
      }else{
        // 如果从其他的路由组件而来 停留到当前
        next(false)
      }
    }
  },
  {
    name: "addCartSuccess",
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
    path: "/search",
    // path: "/search/:keyword?",
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
];
