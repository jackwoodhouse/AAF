import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import Axios from 'axios';
import Login from '../components/login.vue';
import dash from '../views/dash.vue';
import edit from '../views/edit.vue';


Vue.prototype.$axios = Axios;

Vue.use(VueMaterial);

Vue.use(Router);


export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Login },
        { path: '/dash/', component: dash },
        { path: '/edit/*', component: edit },

    ],
});
