import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Chat from "../views/Chat.vue";
import { projectAuth } from "../firebase/config";

const authRequire = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log(user);
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    beforeEnter: authRequire,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
