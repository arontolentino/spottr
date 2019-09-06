import Vue from "vue";
import Router from "vue-router";
import Entries from "./views/Entries.vue";
import AddEntry from "./views/AddEntry.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/entries",
      name: "entries",
      component: Entries
    },
    {
      path: "/entries/add",
      name: "add-entr",
      component: AddEntry
    }
  ]
});
