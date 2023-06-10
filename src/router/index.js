import Vue from "vue";
import { makeFirstLetterUppercase } from "@/helpers/stringOptimisers";

/*                                   Routing                                  */
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView";
import TasksView from "@/views/TasksView";
/* -------------------------------------------------------------------------- */

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  linkActiveClass: "active-page",
  linkExactActiveClass: "exact-active-page",
});

router.beforeEach((to, from, next) => {
  document.title = `eQuota Jira Clone - ${makeFirstLetterUppercase(to.name)}`;
  next();
});

export default router;
