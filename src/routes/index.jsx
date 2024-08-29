import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Blogs } from "../pages/Blogs";
import { DetailProduct } from "../pages/DetailProduct";
import { About } from "../pages/About";
import BlogDetails from "../pages/BlogDetails";

// Publishes Route user foll all users
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/blogs", component: Blogs },
  { path: "/blogs/:id", component: BlogDetails },
  { path: "/intro", component: About },
  { path: "/product/:id", component: DetailProduct },
];

// Private Route user for registration user
const privateRoutes = [];

export { publicRoutes, privateRoutes };
