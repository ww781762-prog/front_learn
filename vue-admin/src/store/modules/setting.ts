import {defineStore} from "pinia";

let  useLayOutSettingStore = defineStore("SettingStore",{
    state: () => {
        return {
            fold: false, //用户控制菜单折叠还是收起控制
            refsh: true
        }
    },
})

export default useLayOutSettingStore;