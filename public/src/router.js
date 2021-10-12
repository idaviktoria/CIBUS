import Navigation from "./navigation.js";
import FooterSection from "./footer.js";
import Index from "./index.js";

const routes = [
    {path: '/',      component: Index},
    {path: '/index', component: Index}
];


const router = new VueRouter({routes});

const app = new Vue({
    router: router,
    components:{
        Navigation,
        FooterSection,
    },
    template: `
    <div>
        <navigation></navigation>
        <router-view></router-view>
        <footer-section></footer-section>
    </div>
    `
}).$mount('#app')

