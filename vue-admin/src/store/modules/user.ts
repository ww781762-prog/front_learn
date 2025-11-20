import {defineStore} from "pinia";
import type {loginFormData, loginResponseData} from "@/api/user/type.ts";
import {reqLogin} from "@/api/user";
import {GET_TOKEN, SET_TOKEN} from "@/utils/token.ts";

let  useUserStore = defineStore("User",{
     state:()=>{
        return {
            token: GET_TOKEN("TOKEN"),
        }
     },
    actions:{
        async userLogin(data:loginFormData){
            let result:loginResponseData= await reqLogin(data);

            if (result.code == 200 ){
                this.token= result.data.token as  string
                SET_TOKEN((result.data.token as  string))
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