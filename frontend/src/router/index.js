import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import CAPortal from "@/components/CAPortal.vue";
import EBPortal from "@/components/EBPortal.vue";
import ComPortal from "@/components/ComPortal.vue";
import Team from "@/components/TeamPage.vue";
import Registration from "@/components/Registration.vue";
import WelcomePage from "@/components/WelcomePage.vue";
import Payment from "@/components/payment.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/ca-portal", name: "CAPortal", component: CAPortal },
  { path: "/eb-portal", name: "EBPortal", component: EBPortal },
  { path: "/committees", name: "Committees", component: ComPortal },
  { path: "/team", name: "TeamPage", component: Team },
  { path: "/register", name: "Registration", component: Registration },
  { path: "/welcome", name: "WelcomePage", component: WelcomePage },
  { path: "/payment", name: "Payment", component: Payment },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
