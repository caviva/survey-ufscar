import { createRouter, createWebHistory } from 'vue-router'
import StepOne from '../components/StepOne.vue'
import StepTwo from '../components/StepTwo.vue'
import StepThree from '../components/StepThree.vue'
import StepFour from '../components/StepFour.vue'
import StepFive from '../components/StepFive.vue'
import ThankYou from '../components/ThankYou.vue'

const routes = [
  { path: '/', redirect: '/step-one' },
  { path: '/step-one', component: StepOne },
  { path: '/step-two', component: StepTwo },
  { path: '/step-three', component: StepThree },
  { path: '/step-four', component: StepFour },
  { path: '/step-five', component: StepFive },
  { path: '/thank-you', component: ThankYou },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
