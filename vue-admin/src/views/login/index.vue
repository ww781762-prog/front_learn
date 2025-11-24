<template>
<div class="login_container">
<el-row>
<!--  xs 屏幕小于多少的直线-->
  <el-col :span="12" :xs="0"></el-col>
  <el-col :span="12" :xs="24">
    <el-form ref="loginForms" :model="loginForm" :rules="rules" class="login_form">
      <h1>Hello</h1>
      <h2>欢迎来到硅谷真源</h2>
      <el-form-item prop='username'>
        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item prop='password'>
        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" class="login_button" type="primary" size="default" @click="login" >登陆</el-button>
      </el-form-item>
    </el-form>

  </el-col>
</el-row>
</div>
</template>

<script setup lang="ts">
import { User,Lock } from '@element-plus/icons-vue'
import {reactive,ref} from 'vue'
import useUserStore from "@/store/modules/user.ts";
import {useRoute, useRouter} from 'vue-router';
import {ElNotification} from "element-plus";
import {getTime} from "@/utils/time.ts";
let loginForm= reactive({
 username: '',
 password: ''
})

let loading = ref(false);
let useStore= useUserStore()
let $router = useRouter()
let loginForms = ref()
let $route=useRoute()
let redirect: any = $route.query.redirect
const login = async ()=>{
  loading.value = true
  try{
    await loginForms.value.validate()
    await  useStore.userLogin(loginForm)
    $router.push({path:redirect||'/'});
    ElNotification({
      type: "success",
      message:"登陆成功",
      title:"HI," + getTime()
    })
    loading.value = false
  }catch(error){
    loading.value = false
    if (error instanceof Error){
      ElNotification({
        type: 'error',
        message: (error as Error).message,
      })
    }
  }
}
const validatorUserName=(_rule:any,value:any,callback:any)=>{
  if (value.length>=5){
    callback()
  }else {
    callback(new Error("账户密码至少五位"))
  }
}
const validatorPassword=(_rule:any,value:any,callback:any)=>{
  if(value.length>=6){
    callback()
  }else {
    callback(new Error("密码至少六位"))
  }
}
const  rules={
  username:[
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
    { trigger: 'change', validator: validatorUserName },
  ],
  password:[
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change' }
    { trigger: 'change', validator: validatorPassword },
  ]
}

</script>


<style scoped>

.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
  .login_form{
    position: relative;
    width: 60%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 80px;
    h1{
      color: #fff;
      font-size: 40px;
    }
    h2 {
      color: #fff;
      font-size: 20px;
      margin: 20px 0px;
    }
    .login_button{
      width: 100%;
      margin: 0 auto;

    }
  }
}

</style>