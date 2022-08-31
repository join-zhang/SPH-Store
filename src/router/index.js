// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";

// 通过use 让Vue使用插件

Vue.use(VueRouter);

// 引入路由配置
import routes from "@/router/routes";
// 引入store
import store from "@/store";
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
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

// 配至路由
let router = new VueRouter({
  // 配置路由
  routes,
  // 切换的滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 };
  },
});
// 全局路由守卫 (前置守卫)
router.beforeEach(async (to, from, next) => {
  // to: 可以获取到你要跳转到那个路由信息
  // from: 可以获取到你从哪个路由器而来的信息
  // next: 放行的函数   next()放行
  // next("/login")    放行到指定的位置  next(false)

  // next()
  // 用户登录了就会有token,未登录就没有token
  let token = store.state.user.token;
  // 用户信息
  let name = store.state.user.userInfo.name;
  // 用户已经登录的情况
  if (token) {
    // 用户登录还想跳转login   拒绝跳转  停留在首页
    if (to.path == "/login" || to.path == "/register") {
      next("/home");
    } else {
      // 登录了但是去的不是login [home, search , detail , shopcart]
      if (name) {
        // 登录了且拥有用户信息 则放行
        next();
      } else {
        // 没有用户信息了,派发action 让仓库存储用户信息 再跳转
        //在路由跳转之前获取路由的信息
        try {
          // 获取用户信息成功
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          // token 失效了获取不到用户信息 从新登录
          // 清除token
          await store.dispatch("userLogout");
          next("/login");
        }
      }
    }
  } else {
    // 用户未登录的情况
    // 未登录不能跳转交易相关  支付相关[pay, paysuccess]   不能去个人中心
    // 未登录去上面的这些路由
    let toPath = to.path;
    if (toPath.indexOf("/trade") != -1 || toPath.indexOf("/pay") != -1 || toPath.indexOf("/center") != -1) {
      // 把未登录的时候 想去而没有去成的信息  存储于地址栏中[路由]
      next(`/login?redirect=`+toPath);
      
    } else {
      next();
    }
  }
});

export default router;
