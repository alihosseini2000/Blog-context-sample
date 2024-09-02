import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SidebarProvider } from "./Context/sidebarContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BlogsProvider } from "./Context/blogContext.jsx";
import { UserProvider } from "./Context/userContext.jsx";
import { ComponentProvider } from "./Context/commentContext.jsx";
import Blog from "./routes/blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "blog/:id",
    element: <Blog />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <BlogsProvider>
        <UserProvider>
          <ComponentProvider>
            <RouterProvider router={router} />
          </ComponentProvider>
        </UserProvider>
      </BlogsProvider>
    </SidebarProvider>
  </React.StrictMode>
);
