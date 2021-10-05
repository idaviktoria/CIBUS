import Index from "./index.js";


const routes = [
    {path: '/',      component: Index},
    {path: '/index', component: Index}
];


const router = new VueRouter({routes});

const app = new Vue({
    router: router,
}).$mount('#app')

