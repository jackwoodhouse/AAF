import Vue from 'vue';
import VueRouter from 'vue-router';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import Axios from 'axios';
import App from './App.vue';
import Login from './components/login.vue';
import dash from './views/dash.vue';

Vue.prototype.$axios = Axios;
Vue.use(VueRouter);
Vue.use(VueMaterial);

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
