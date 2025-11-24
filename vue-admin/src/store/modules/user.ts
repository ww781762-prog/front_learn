import {defineStore} from "pinia";
import {reqLogin, reqLogout, reqUserInfo} from "@/api/user";
import {GET_TOKEN, REMOVE_TOKEN, SET_TOKEN} from "@/utils/token.ts";
import {constantRouter} from '@/router/routers'
import type {UserState} from "@/store/modules/types/type.ts";

let  useUserStore = defineStore("User",{
     state:():UserState=>{
        return {
            token: GET_TOKEN("TOKEN"),
            menuRoutes: constantRouter, // 菜单
            username: '',
            avatar: ''
        }
     },
    actions:{
        async userLogin(data:any){
            let result:any= await reqLogin(data);

            if (result.code == 200 ){
                this.token= result.data as  string
                SET_TOKEN((result.data as  string))
                return 'ok'
            }else{
                return Promise.reject(new Error(result.message as string))
            }
        },
        async getUserInfo(){
            let result:any= await reqUserInfo();
            if (result.code == 200 ){
                console.log(result.data)
                this.username = result.data.name
                this.avatar = result.data.avatar
            }else{
                return Promise.reject(new Error(result.message as string))
            }
        },
        async logout(){
            let result:any= await reqLogout();
            if (result.code== 200 ){
                this.token=''
                this.username = ''
                this.avatar = ''
                REMOVE_TOKEN("TOKEN")
            }else{
                return Promise.reject(new Error(result.message as string))
            }

        }
    },
    getters:{

    }
})

export default useUserStore;