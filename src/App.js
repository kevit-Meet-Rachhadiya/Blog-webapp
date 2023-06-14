// import Header from "./components/Header";
import Blogs from "./components/blogs";
import Writeblog from "./components/Writeblog";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login";
import SingleBlog from "./components/singleblog";

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: <Blogs />,
    },
    {
      path: "/WriteBlog",
      element: <Writeblog />,
    },
    {
      path: "/singleBlog",
      element: <SingleBlog />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
