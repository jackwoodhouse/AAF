import Vue from 'vue';

import { router } from './routers/router';


import App from './App.vue';

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
