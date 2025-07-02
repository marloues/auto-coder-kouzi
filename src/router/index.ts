import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "koziSpace",
      component: () => import("../views/kouzi/KoziSpaceView.vue")
    },

  ],
});

export default router;
