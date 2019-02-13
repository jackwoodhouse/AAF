import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Login from './components/login.vue';
import dash from './views/dash.vue';


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Login },
    { path: '/dash', component: dash },
];

const router = new VueRouter({
    routes,
});
new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
