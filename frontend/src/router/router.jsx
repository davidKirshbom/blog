import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage";
import ErrorPage from "../components/pages/ErrorPage";
import PostsPage from "../components/pages/PostsPage";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/layout/Layout";
import PostPage from "../components/pages/PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    key: "layout",
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            key: "posts",
            exact: true,
            element: (
              //wrapper div to state browser router do render state
              <div>
                <PostsPage loggedUser={false} />
              </div>
            ),
          },
          {
            path: "/user/posts",
            key: "users_posts",
            exact: true,
            element: <PostsPage loggedUser={true} />,
          },
          {
            path: "/post/:postId",
            key: "post",
            element: <PostPage loggedUser={true} />,
          },
        ],
      },
      {
        path: "/login",
        key: "login",
        element: <LoginPage />,
      },
      {
        path: "/*",
        key: "error",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
