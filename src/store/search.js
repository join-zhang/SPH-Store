import {reqGetSearchInfo} from "@/api"

//  search 模块的数据
const state = {
  // 仓库的初始状态
  searchList:{}
};
const actions = {
  // 获取Search模块的数据
  async getSearchList({commit} , params={}){
    // params是当用个派发action时候,dispatch的第二个参数传递过来,至少是个空对象
   let result = await reqGetSearchInfo(params)
   if(result.code === 200){
      commit("GETSEARCHLIST",result.data)
   }
  }
};
const mutations = {
  GETSEARCHLIST(state,searchList){
    state.searchList = searchList
  }
};
// 计算属性 为了简化仓库数据而生
const getters = {
  // 当前形参,当前仓库中的state 小state 并非大仓库的state
  goodsList(state){
    return state.searchList.goodsList || []
  },
  trademarkList(state){
    return state.searchList.trademarkList  || []
  },
  attrsList(state){
    return  state.searchList.attrsList  || []
  }
};
export default {
  state,
  actions,
  mutations,
  getters,
};
