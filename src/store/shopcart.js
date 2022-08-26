import { reqCartList, reqDeleteCartById, reqUpDateCheckById } from "@/api";
const state = {
  cartList: [],
};
const actions = {
  // 获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList({});
    // 测试是否能获取个人的购车数据
    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  // 删除购物车某个产品
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  // 修改购物车某一个产品的选中状态
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpDateCheckById(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      return new Promise.reject(new Error("failed"));
    }
  },
  // 删除全部勾选的产品
  deleteAllCheckedCart({dispatch,getters}){
    // context: 小仓库  , commit 提交mutations  修改state  getters[计算属性] dispatch[派发action]  state[当前仓库的数据]
    // 获取购物车中的全部产品
    let PromiseAll = []
    getters.cartList.cartInfoList.forEach(item =>{
     
      let promise =  item.isChecked == 1 ?  dispatch("deleteCartListBySkuId",item.skuId) : ""
      // 将每一次返回的promise 添加到数组当中
      PromiseAll.push(promise)

    })
    return Promise.all(PromiseAll)
   
  },
  // 修改产品全部的状态   
  updateAllCartIsChecked({dispatch,state} , isChecked){
    // 数组存
    let promiseAll = []
      state.cartList[0].cartInfoList.forEach(item =>{
      let promise =   dispatch("updateCheckedById",{skuId:item.skuId,isChecked})
      promiseAll.push(promise)
      })
      // 最终返回结果
      return Promise.all(promiseAll)
  }
};

const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
