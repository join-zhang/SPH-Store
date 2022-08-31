import Vue from "vue";
import App from "./App.vue";
// 引入element-ui
import { Button,MessageBox } from "element-ui";
// 三级联动组件--全局组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"
// 第一个参数 全局组件的名字,第二个参数:哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
// 注册element-ui
Vue.component(Button.name,Button)
// 引入路由
import router from "@/router";
// 引入仓库
import store from "@/store";
// 引入mockServe.js  ---mock数据
import "./mock/mockServe"
// 引入swiper样式
import "swiper/css/swiper.css"
// 统一接口 api文件里面的全部接口
import * as API from "@/api"

// import loadimage from "@/assets/lazy.jpeg"
import loadimage from "@/assets/lazy.jpg"
// 引入懒加载插件
import VueLazyload from 'vue-lazyload'
// 注册插件 只要使用了use  实际上是调用了install方法
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadimage,
  attempt: 1
})
// element组件挂载在原型上 
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.config.productionTip = false;
// 引入表单校验插件
import "@/plugins/validate"
new Vue({
  render: (h) => h(App),
  // 配置全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由: 底下的路由是key Value 一致省略v router小写
  // 注册路由信息:
 router, 
  // 注册仓库:组件实例对象上会多一个属性
  store,
}).$mount("#app");
