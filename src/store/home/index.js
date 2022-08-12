import { reqCategoryList } from "@/api";
//  search 模块的数据
const state = {
  // state中的数据默认初始值别瞎写,服务器返回的是对象就写对象 (根据接口返回值初始化)
  categoryList:[]
};
const actions = {
  // 通过API里面的函数调用,向服务器发送请求,获取服务器的数据
  async categoryList({commit}){
    let result =  await reqCategoryList()
    // console.log(result);
    if (result.code===200){
      commit("CATEGORYLIST",result.data)
    }
  }
};
const mutations = {
  CATEGORYLIST(state,categoryList){
    state.categoryList = categoryList
  }
};
const getters = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
