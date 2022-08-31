<template>
  <div>
    <!-- 使用三级联动的全局组件:已经全局注册了,不需要引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from "@/pages/Home/LIstContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
// 引入mapState
import {mapState} from "vuex"

// console.log(this);
export default {
  name: "",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  mounted(){
    // floor组件  派发floor 
    this.$store.dispatch("getFloorList")
    // 获取登录的用户信息  在首页展示
    // this.$store.dispatch("getUserInfo")
  },
  computed:{
    ...mapState({
      floorList:(state)=>{
        return state.home.floorList
      }
    })
  }
};
</script>

<style>
</style>