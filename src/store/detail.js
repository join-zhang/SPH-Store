import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
// 封装的游客身份的模块uuid  生成随机的字符串(不可以再变化)
import {getUUID} from "@/utils/uuid_token"
const state = {
  goodInfo: {},
  uuid_token:getUUID()
};
const actions = {
  // 获取产品信息的action
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit("GETGOODINFO", result.data);
    }
  },

  //产品添加到购物车中
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    // 发送请求 加入  返回结构
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    //  当前函数返回的是promise对象
    // 判断返回的状态
    if (result.code == 200) {
      return "何林芮ok";
    } else {
      // 代表加入购物车失败
      return Promise.reject(new Error("failed"));
    }
  },
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
// 简化数据而生
const getters = {
  // 路径导航简化的数据
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },
  // 简化产品信息的数据
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  // 简化产品售卖属性
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
