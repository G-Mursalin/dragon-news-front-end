import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Category from "./../../Pages/Category/Category";
import News from "../../Pages/News/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/api/v1/news"),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/news/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/news/${params.id}`),
      },
    ],
  },
]);
