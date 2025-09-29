import {createRouter, createWebHistory} from "vue-router"
import News from "@/components/News.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Detail from "@/components/Detail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            redirect:'/about'
        },
        {
            path: "/home",
            component: Home,
        },
        {
            path: "/news",
            component: News,
            // 使用 params 参数，props:true 或者 props(route){return return route.params} 都可以
            // children: [
            //     {name: "detail", path: "detail/:id/:title/:content", component: Detail,props:true},
            // ],
            // 使用 query 参数，只能是props(route){return route.query}
            children: [
                {name: "detail", path: "detail", component: Detail,props(route){return route.query}},
            ],
        },
        {
            path: "/about",
            component: About,
        }
    ]
})
export default router;