import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App";
import Users from "./components/Users/Users";
import Home from "./components/Home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <Users />, loader: async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!res.ok) throw new Error("Failed to load users");
            return res.json();
          } 
    }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);