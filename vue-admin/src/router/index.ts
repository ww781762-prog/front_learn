import {createRouter, createWebHashHistory} from 'vue-router'
import {constantRouter} from "@/router/routers.ts";

let router= createRouter({
    history: createWebHashHistory(),
    routes: constantRouter
})

export default router;