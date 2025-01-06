import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import CAPortal from "@/components/CAPortal.vue";
import EBPortal from "@/components/EBPortal.vue";
import ComPortal from "@/components/ComPortal.vue";
import Team from "@/components/TeamPage.vue";
import WelcomePage from "@/components/WelcomePage.vue";
import Payment from "@/components/payment.vue";
import Form from "@/components/Form.vue";
import Successful from "@/components/Successful.vue";
import Unsuccessful from "@/components/Unsuccessful.vue";
import TermsAndConditions from "@/components/TermsAndConditions.vue";
import FaqPortal from "@/components/FaqPortal.vue";
import RegistrationSuccesful from "@/components/registrationConfirmation.vue"
import AllotmentNotDone from "@/components/AllotmentNotDone.vue";
import AllotmentCheck from "@/components/AllotmentCheck.vue";
import Sponsors from "@/components/Sponsors.vue";
import AllotmentDone from "@/components/AllotmentDone.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/ca-portal", name: "CAPortal", component: CAPortal },
  { path: "/eb-portal", name: "EBPortal", component: EBPortal },
  { path: "/committees", name: "Committees", component: ComPortal },
  { path: "/team", name: "TeamPage", component: Team },
  { path: "/welcome", name: "WelcomePage", component: WelcomePage },
  { path: "/payment", name: "Payment", component: Payment },
  { path: "/register", name: "Form", component: Form },
  { path: "/successful", name: "Successful", component: Successful },
  { path: "/unsuccessful", name: "Unsuccessful", component: Unsuccessful },
  { path: "/termsandconditions", name: "TermsAndConditions", component: TermsAndConditions },
  { path: "/faq", name: "FaqPortal", component: FaqPortal },
  {path: "/reg-confirm", name: "RegistrationSuccessful", component: RegistrationSuccesful},
  {path: "/allotmentnot", name: "AllotmentNotDone", component: AllotmentNotDone},
  {path: "/allotment-check", name: "AllotmentCheck", component: AllotmentCheck},
  {path: "/sponsors", name: "Sponsors", component: Sponsors},
  {path: "/alloted", name: "AllotmentDone", component: AllotmentDone}



];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;
