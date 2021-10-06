import Navigation from "./navigation.js";
import Index from "./index.js";


const routes = [
    {path: '/',      component: Index},
    {path: '/index', component: Index}
];


const router = new VueRouter({routes});

const app = new Vue({
    router: router,
    components:{
        Navigation
    },
    template: `
    <div>
        <navigation></navigation>
        <router-view></router-view>
    </div>
    `
}).$mount('#app')

