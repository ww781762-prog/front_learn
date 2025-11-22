import SvgIcon from './SvgIcon/index.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const AllGlobalComponents:any = {SvgIcon};
export default {
    install(app:any){
        Object.keys(AllGlobalComponents).forEach((key:string) => {
            app.component(key, AllGlobalComponents[key]);
        })
        // 注册图表为全局组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}

