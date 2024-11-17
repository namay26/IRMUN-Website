import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import CAPortal from "@/components/CAPortal.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/ca-portal", name: "CAPortal", component: CAPortal },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
