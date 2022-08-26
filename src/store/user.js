import { reqGetCode, reqUserRegister, reqUserLogin } from "@/api";
// 注册和登录仓库
const state = {
  code: "",
  token:''
};
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    // 手机号带给服务器,服务器给手机号发送短信
    //  获取验证码这个接口, 把验证码返回的    正常情况下是后台把验证码发送到用户手机上[省钱]
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("GETCODE", result.data);
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  // 用户注册
  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  //用户登录[token]
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data);
    // 服务器下发token , 用户的唯一标识
    // 将来经常通过带token 找服务器要用户的信息展示
    if (result.code == 200) {
      commit("USERLOGIN",result.data.token)
      return 'ok'
    }else{
        return Promise.reject(new Error('failed'))
    }
  },
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state,token){
    state.token = token
  }
};
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
