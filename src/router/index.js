import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Deals from "../views/Deals.vue";
import NewArrivals from "../views/NewArrivals.vue";
import Login from "../views/Login.vue";
import Cart from "../components/Cart.vue";
import ThankPage from "../views/ThankPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    props: true,
  },
  {
    path: "/thanks",
    name: "ThankPage",
    component: ThankPage,
  },
  {
    path: "/deals",
    name: "Deals",
    component: Deals,
  },
  {
    path: "/newarrivals",
    name: "NewArrivals",
    component: NewArrivals,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
