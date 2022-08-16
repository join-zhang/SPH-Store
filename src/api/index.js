//当前模块:API 进行统一管理
// import { mock } from "mockjs";
import requests  from "./ajax";
// /api/product/getBaseCategoryList get请求 无参数

// 引入mock请求
import mockRequest from "./mockAjax"

export const reqCategoryList = ()=>{
    // 定义函数 发送请求返回接结果Promise对象
    // console.log("请求成功");
   return  requests({
        url:"/product/getBaseCategoryList",
        method:"get"
    })
}

// 获取banner(Home首页轮播图接口)
export const reqGetBannerList = ()=>{
    return mockRequest.get('/banner')
}

// 获取floor组件的数据
export const reqFloorList = ()=> mockRequest.get("/floor")