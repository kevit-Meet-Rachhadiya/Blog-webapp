// import Header from "./components/Header";
import Blogs from "./components/blogs";
import Writeblog from "./components/Writeblog";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login";

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: (
        <div>
          <Blogs />
          {/* <Header /> */}
        </div>
      ),
    },
    { path: "/WriteBlog", element: <Writeblog /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
