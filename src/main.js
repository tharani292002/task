import Vue from "vue";
// import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
// import router from './router'
import VueRouter from 'vue-router'
// import Routes from '/.routes'


// import UUID from "vue-uuid";


// import employeeDetails from './components/employeeDetails.vue'
// import employmentInformation from './components/employmentInformation.vue'
// import bankDetails from './components/bankDetails.vue'


Vue.use(ElementUI, { locale });
Vue.use(ElementUI);
// Vue.use(router);
Vue.use(VueRouter);

// Vue.use(UUID);

Vue.config.productionTip = false

const DialogBox = () => import('@/components/dialogBox.vue')
const employeeDetails = () => import('@/components/employeeDetails.vue')
const employmentInformation = () => import('@/components/employmentInformation.vue')
const bankDetails = () => import('@/components/bankDetails.vue')

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/employees',
            component: employeeDetails
        },
        {
            path: '/',
            component: DialogBox
        },
        {
            path: '/employee',
            component: employmentInformation

        },
        {
            path: '/bankDetails',
            component: bankDetails
        }
    ]
});


new Vue({
    el: "#app",
    router: router,
    render: h => h(App),
})


// new Vue({ render: h => h(App) }, router).$mount('#app')