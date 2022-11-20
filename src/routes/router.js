import { createRouter, createWebHistory } from "vue-router";
// import Home from "./Views/Home.vue";
import Home from "../components/HomeComponent.vue";
import Ejercicio1 from "../components/Ejercicio1Component.vue";
import Ejercicio2 from "../components/Ejercicio2Component.vue";
import Ejercicio3 from "../components/Ejercicio3Component.vue";
import Ejercicio4 from "../components/Ejercicio4Component.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/ejercicio1", component: Ejercicio1 },
  { path: "/ejercicio2", component: Ejercicio2 },
  { path: "/ejercicio3", component: Ejercicio3 },
  { path: "/ejercicio4", component: Ejercicio4 }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;