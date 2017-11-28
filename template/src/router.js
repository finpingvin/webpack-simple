import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  // Example route:
  // { path: '/login', component: Login },
  // Example default route:
  // { path: '*', redirect: '/alerts' }
];
const router = new VueRouter({
  routes
});

export default router;
