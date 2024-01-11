import "./styles.css";

/* -----------------------------------------------------------------------------
* Routes
*/
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from "./routes/Home.vue";
import Recipe from "./routes/Recipe.vue";
import Recipes from "./routes/Recipes.vue";
import Profile from "./routes/Profile.vue";

const routes = [
    { path: "/", name: "home", component: Home, },

    { path: "/recipe/:id", name: "recipe",  component: Recipe, },
    { path: "/recipes",    name: "recipes", component: Recipes, },

    { path: "/profile", name: "profile", component: Profile, },
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
