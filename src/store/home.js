import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";
//  search 模块的数据
const state = {
  // state中的数据默认初始值别瞎写,服务器返回的是对象就写对象 (根据接口返回值初始化)
  categoryList: [],
  // 轮播图数据
  bannerList: [],
  floorList:[]
};
const actions = {
  // 通过API里面的函数调用,向服务器发送请求,获取服务器的数据
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    // console.log(result);
    if (result.code === 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  // 获取首页轮播图的数据
  async getBannerList() {
    let result = await reqGetBannerList();
    if (result.code === 200) {
      this.commit("GETBANNERLIST", result.data);
    }
  },
  // 获取Floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if(result.code === 200){
      // 提交mutation
      commit("GETFLOOTLIST",result.data)
    }
  },
};

const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOOTLIST(state,floorList){
    state.floorList = floorList
  }
};
const getters = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
