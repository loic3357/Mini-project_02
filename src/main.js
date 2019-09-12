import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
//import router from './router'
import VueRouter from 'vue-router';
import routes from './router';
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
    render: h => h(App),
    router,
    vuetify
}).$mount('#app');