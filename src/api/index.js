//当前模块:API 进行统一管理
// import { mock } from "mockjs";
import requests from "./ajax";
// /api/product/getBaseCategoryList get请求 无参数
// 引入mock请求
import mockRequest from "./mockAjax";
export const reqCategoryList = () => {
  // 定义函数 发送请求返回接结果Promise对象
  // console.log("请求成功");
  return requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};
// 获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => {
  return mockRequest.get("/banner");
};
// 获取floor组件的数据
export const reqFloorList = () => mockRequest.get("/floor");
// 获取搜索模块的数据 地址:/api/list  请求方式:post  参数:需要带
/* 
带参数
*/
// 当前的接口,给服务器传递参数params,至少是一个空对象
export const reqGetSearchInfo = (params) =>
  requests({
    url: "/list",
    method: "post",
    data: params,
  });
// 获取detail数据 /api/item/{ skuId }
export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });
// 将产品添加到购物车中
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,method:"post"
  });

// 获取购物车列表数据接口
//  URL  /api/cart/cartList
// 
export const  reqCartList = ()=>requests({url:"/cart/cartList",method:"get"})

// 删除购物产品的接口
// URL: /api/cart/deleteCart/{skuId}    method:DELETE
export  const reqDeleteCartById = (skuId)=> requests({url:`/cart/deleteCart/${skuId}`,method:"delete"})

//  URL: /api/cart/checkCart/{skuID}/{isChecked}  method:get 
export const reqUpDateCheckById = (skuId,isChecked)=> requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:"get"})

// 获取验证码的接口
// URL : /api/user/passport/sendCode/{phone} method :get
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:"get"})

// 注册账号接口
// URL:/api/user/passport/register    method:post     phone code password
export const  reqUserRegister = (data)=> requests({url:`/user/passport/register`,data,method:"post"}) 

// 登录接口
// URL :/api/user/passport/login   method:post  phone password 
export const  reqUserLogin = (data)=> requests({url:"/user/passport/login",data,method:'post'})