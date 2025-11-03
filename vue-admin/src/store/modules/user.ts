import {defineStore} from "pinia";
import type {loginFormData, loginResponseData} from "@/api/user/type.ts";
import {reqLogin} from "@/api/user";

let  useUserStore = defineStore("User",{
     state:()=>{
        return {
            token: localStorage.getItem("token"),
        }
     },
    actions:{
        async userLogin(data:loginFormData){
            let result:loginResponseData= await reqLogin(data);

            if (result.code == 200 ){
                this.token= result.data.token as  string
                localStorage.setItem("token",this.token as "")
                return 'ok'
            }else{
                return Promise.reject(new Error(result.data.message as string))
            }
        }
    },
    getters:{

    }
})

export default useUserStore;