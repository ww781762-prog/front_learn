import router from '@/router'

import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })
//获取用户相关的小仓库内部token数据,去判断用户是否登录成功
import useUserStore from './store/modules/user'
import pinia from './store'
const userStore = useUserStore(pinia)

router.beforeEach(
    async (to:any,from:any,next:any)=>{
        nprogress.start()
        //获取token,去判断用户登录、还是未登录
        const token = userStore.token
        //获取用户名字
        const username = userStore.username
        console.log(username)
        if(token){
            if (to.path == '/login'){
                next({path:'/'})
            }else {
                if (username){
                    next()
                }else {
                    try {
                        await userStore.getUserInfo()
                        next({ ...to })
                    }catch (error){
                        await userStore.logout()
                        next({ path: '/login', query: { redirect: to.path } })
                    }
                }
            }
        }else{
            if (to.path == '/login'){
                next()
            }else {
                next({path:'/login',query:{redirect:to.path}})
            }
        }
    }
)


router.afterEach((to:any,from:any)=>{
    nprogress.done()
})
