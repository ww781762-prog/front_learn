<template>
<div class="login_container">
<el-row>
<!--  xs 屏幕小于多少的直线-->
  <el-col :span="12" :xs="0"></el-col>
  <el-col :span="12" :xs="24">
    <el-form class="login_form">
      <h1>Hello</h1>
      <h2>欢迎来到硅谷真源</h2>
      <el-form-item>
        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item>
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
import { useRouter } from 'vue-router';
import {ElNotification} from "element-plus";
let loginForm= reactive({
 username: '',
 password: ''
})

let loading = ref(false);

let useStore= useUserStore()
let $router = useRouter()
const login = async ()=>{
  loading.value = true
  try{
    await  useStore.userLogin(loginForm)
    $router.push("/");
    ElNotification({
          type: "success",
      message:"登陆成功"
        }
    )
    loading.value = false
  }catch(error){
    loading.value = false
    ElNotification({
      type: 'error',
      message:(error as Error).message,
    })
  }
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