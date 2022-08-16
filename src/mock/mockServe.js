// 引入mock
import  Mock  from "mockjs";

// 把JSON格式的数据引入
import banner from "./banner.json"
import floor from "./floor.json"

Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})