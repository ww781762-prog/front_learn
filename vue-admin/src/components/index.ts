import SvgIcon from './SvgIcon/index.vue';

const AllGlobalComponents:any = {SvgIcon};
export default {
    install(app:any){
        Object.keys(AllGlobalComponents).forEach((key:string) => {
            app.component(key, AllGlobalComponents[key]);
        })
    }
}