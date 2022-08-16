<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!--在home.search显示  ,    在登录,注册时候隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入Header组件
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 通知vuex发请求,获取数据,存储于仓库之中
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
