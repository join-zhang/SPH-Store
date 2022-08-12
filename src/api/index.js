//当前模块:API 进行统一管理
import requests  from "./request";
// /api/product/getBaseCategoryList get请求 无参数


export const reqCategoryList = ()=>{
    // 定义函数 发送请求返回接结果Promise对象
    // console.log("请求成功");
   return  requests({
        url:"/product/getBaseCategoryList",
        method:"get"
    })
}