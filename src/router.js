// import employeeDetails from '/components/employeeDetails.vue'
// import employmentInformation from '/components/employmentInformation.vue'
// import bankDetails from '/components/bankDetails.vue'
import Vue from "vue";
import VueRouter from 'vue-router'


Vue.use(VueRouter);
const DialogBox = () => import('@/components/dialogBox.vue')
const employeeDetails = () => import('@/components/employeeDetails.vue')
const employmentInformation = () => import('@/components/employmentInformation.vue')
const bankDetails = () => import('@/components/bankDetails.vue')

const routers = [
    {
        path: '/employeeDetails',
        component: employeeDetails
    },
    {
        path: '/',
        component: DialogBox
    },
    {
        path: '/employmentInformation',
        component: employmentInformation

    },
    {
        path: 'bankDetails',
        component: bankDetails
    }
]

const router = new VueRouter({ routers })
export default router
