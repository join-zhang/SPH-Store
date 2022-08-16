// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";

// 通过use 让Vue使用插件

Vue.use(VueRouter);

// 引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";

// 重写 Router.push方法
// 先把VueRouter原型对象的push||replace,先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push || replace
// 第一个参数:告诉原来的push方法,往哪里跳(传递哪些参数)
// 第二个参数:成功的回调
// 第三个参数:失败的回调
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    //call || apply:
    // 相同点:  都可以调用函数一次,都可以篡改函数的上下文一次
    // 不同点:  call 与apply 传递参数: call 用逗号隔开 apply方法执行:传递数组
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function(location,resolve,reject){
  if (resolve && reject){
      originReplace.call(this,location,reject)
  }else{
    originReplace.call(this,location,()=>{},()=>{})
  }
}

// 配至路由
export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      name: "search",
      path: "/search/:keyWord?",
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
  ],
});
