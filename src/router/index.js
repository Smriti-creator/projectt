import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Internships from "../views/Internships.vue";
import Categories from "../views/Categories.vue";
import Student from "../views/student.vue";
import Employer from "../views/employer.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Privacy from "../views/Privacy.vue";
import Terms from "../views/Terms.vue";
import Post from "../views/Post.vue";
import Details from "../views/Details.vue";
import Apply from "../views/Apply.vue";
import Dashboard from "../views/dashboard.vue";
import Resume from "../views/Resume.vue";
import Application from "../views/Application.vue";
import Login from "../views/login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Blog.vue")
  },
  {
    path: "/internships",
    name: "Internships",
    component: Internships
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories
  },

  {
    path: "/student",
    name: "student",
    component: Student
  },
  {
    path: "/employer",
    name: "employer",
    component: Employer
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/privacy", //privacy policies route
    name: "Privacy",
    component: Privacy
  },
  {
    path: "/terms", //terms and conditions route
    name: "Terms",
    component: Terms
  },
  {
    path: "/post",
    name: "Post",
    component: Post
  },

  {
    path: "/apply", //terms and conditions route
    name: "Apply",
    component: Apply
  },
  { path: "/details", name: "Details", component: Details },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/resume", name: "Resume", component: Resume },
  { path: "/application", name: "Application", component: Application },
  { path: "/login", name: "Login", component: Login }
];

const router = new VueRouter({
  routes
});

export default router;
