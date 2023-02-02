import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Category from "./../../Pages/Category/Category";
import News from "../../Pages/News/News";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Profile from "../../Pages/Profile/Profile";
import ForgotPassword from "../../Pages/ForgotPassword/ForgotPassword";
import Trending from "../../Pages/Trending/Trending";
import Bookmarks from "../../Pages/Bookmarks/Bookmarks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://dragon-news.onrender.com/api/v1/news"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("https://dragon-news.onrender.com/api/v1/news"),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news.onrender.com/api/v1/news/category/${params.id}`
          ),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://dragon-news.onrender.com/api/v1/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/terms-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/trending",
        element: (
          <PrivateRoute>
            <Trending />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://dragon-news.onrender.com/api/v1/news/trending"),
      },
      {
        path: "/bookmarks",
        element: (
          <PrivateRoute>
            <Bookmarks />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
