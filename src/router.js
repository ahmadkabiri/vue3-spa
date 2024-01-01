import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";

import TemplateUsers from "./pages/users/Template.vue";
import IndexUsers from "./pages/users/Index.vue";
import ShowUser from "./pages/users/Show.vue";

import TemplatePosts from "./pages/posts/Template.vue";
import IndexPosts from "./pages/posts/Index.vue";
import ShowPost from "./pages/posts/Show.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/users",
    name: "usersTemplate",
    component: TemplateUsers,
    children: [
      { path: "", name: "users", component: IndexUsers },
      { path: ":id", name: "userId", component: ShowUser },
    ],
  },
  {
    path: "/posts",
    name: "postsTemplate",
    component: TemplatePosts,
    children: [
      { path: "", name: "posts", component: IndexPosts },
      { path: ":id", name: "postId", component: ShowPost },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
