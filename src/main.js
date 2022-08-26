import Vue from "vue";
import App from "./App.vue";
// 三级联动组件--全局组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"
// 第一个参数 全局组件的名字,第二个参数:哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
// 引入路由
import router from "@/router";
// 引入仓库
import store from "@/store";

// 引入mockServe.js  ---mock数据
import "./mock/mockServe"

// 引入swiper样式
import "swiper/css/swiper.css"

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  // 配置全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  // 注册路由: 底下的路由是key Value 一致省略v router小写
  // 注册路由信息:
  router,
  // 注册仓库:组件实例对象上会多一个属性
  store,
}).$mount("#app");
