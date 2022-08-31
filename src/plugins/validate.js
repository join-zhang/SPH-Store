//  vee-validate 插件表单验证区
import Vue from "vue";
//引入插件
import veeValidate from "vee-validate";

// 引入中文提示信息
import zh_CN from "vee-validate/dist/locale/zh_CN"
// 使用插件
Vue.use(veeValidate);

// 表单验证
veeValidate.Validator.localize('zh_CN',{
    messages:{
        ...zh_CN.messages,
        is:(filed)=> `${filed}必须与密码相同`  // 修改内置规则的message,让确认密码和密码相同
    },
    attributes:{ // 给校验的field 属性名映射中文名称
        phone:"手机号",
        code:'验证码',
        password:'密码',
        password1:'确认密码',
        agree:'协议'
    }
})

// 自定义校验规则
veeValidate.Validator.extend("agree",{
    validate: value => value,
    getMessage:field => field + "必须同意"
})