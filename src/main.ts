import "./styles.css";

/* -----------------------------------------------------------------------------
* Routes
*/
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from "./components/routes/Home.vue";
import Recipe from "./components/routes/Recipe.vue";

const routes = [
    { path: "/",        name: "home",    component: Home, },
    { path: "/recipes", name: "recipes", component: Recipe, }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

/* -----------------------------------------------------------------------------
 * App
 */
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
