import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import NewsLayout from "../Layouts/NewsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path:"",
        element:<Navigate to={"category/:01"}></Navigate>
      },
      {
        path: "/category/:id",
        element: <NewsLayout></NewsLayout>,
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ],
  },
  {
    path: "/news",
    element: <h2>News layout</h2>,
  },
  {
    path: "auth",
    element: <h1>login</h1>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
