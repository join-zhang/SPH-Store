// 对于axios进行二次封装
import axios from "axios"
// 引入进度条
import nprogress from "nprogress"
// 引入进度条样式
import "nprogress/nprogress.css"
// nprogress: start 进度条开始  done: 进度条结束
// 1: 利用axios对象的方法:create 去创建一个axios
const requests = axios.create({
    // 配置对象
    // 配置基础路径,发请求的时候,路径当中会出现api
    baseURL:"/api",
    timeout:5000,
});

// 请求拦截器: 在发送请求之前,请求拦截器可以检测到,可以在请求发出之前做一些事情
requests.interceptors.request.use((config)=>{
    // config: 配置对象,对象了里面有个很重要的属性: header 请求头
    // 进度条开始动
    nprogress.start()
    return config
})

// 响应拦截器: 响应之前,响应拦截器可以检测到,响应发出之前做一些事情
requests.interceptors.response.use((res)=>{
    // 成功的回调函数:服务器相应数据回来之后
    // 进度条结束
    nprogress.done()
    return res.data
},(err)=>{
    // 响应失败的回调函数
    return Promise.reject(new Error("failed 何林芮是傻瓜"))
})

export default requests
