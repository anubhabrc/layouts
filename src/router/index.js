import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import MainLayout from "../structure/MainLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import BlogPost from "../pages/BlogPost/BlogPost";

const rootRoute = createRootRoute({
  component: MainLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog-post",
  component: BlogPost,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  blogPostRoute,
]);
const router = createRouter({ routeTree });
export default router;
