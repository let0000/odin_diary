import { createRouter, createWebHistory } from "vue-router";
import DiaryListView from "../views/DiaryListView.vue";
import DiaryDetailView from "../views/DiaryDetailView.vue";
import DiaryCreateView from "../views/DiaryCreateView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DiaryListView,
  },
  {
    path: "/detail",
    name: "DiaryDetailView",
    component: DiaryDetailView,
  },
  {
    path: "/create",
    name: "DiaryCreateView",
    component: DiaryCreateView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
