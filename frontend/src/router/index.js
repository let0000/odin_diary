import { createRouter, createWebHistory } from "vue-router";
import DiarySplashView from "../views/DiarySplashView";
import DiaryListView from "../views/DiaryListView.vue";
import DiaryDetailView from "../views/DiaryDetailView.vue";
import DiaryCreateView from "../views/DiaryCreateView.vue";
import DiaryUpdateView from "../views/DiaryUpdateView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DiarySplashView,
  },
  {
    path: "/list",
    name: "DiaryListView",
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
  {
    path: "/update",
    name: "DiaryUpdateView",
    component: DiaryUpdateView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
