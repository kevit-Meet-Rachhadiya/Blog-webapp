import Header from "./components/Header";
import Blogs from "./components/blogs";
import Writeblog from "./components/Writeblog";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Blogs />
          <Header />
        </div>
      ),
    },
    { path: "/WriteBlog", element: <Writeblog /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
