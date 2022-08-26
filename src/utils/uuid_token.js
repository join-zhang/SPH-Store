import {v4 as uuidv4} from "uuid"
export const getUUID = ()=>{
    // 要生成一个随机的字符串,且每次执行不能发生变化,游客身份持久化存储
    // 先从本地存储获取uuid (看本地存储是否有)
    let uuid_token = localStorage.getItem("UUIDTOKEN")
    // 如果没有uuid
    if(!uuid_token){
        // 生成游客临时身份
        uuid_token = uuidv4();
        // 本地存储一次  放入localStorage
        localStorage.setItem("UUIDTOKEN",uuid_token)
    }
    return uuid_token
}