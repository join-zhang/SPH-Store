<template>
  <div>
    <!-- 使用三级联动的全局组件:已经全局注册了,不需要引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
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

// console.log(this);
export default {
  name: "",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
};
</script>

<style>
</style>