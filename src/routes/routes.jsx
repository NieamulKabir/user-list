import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home/Home";
import AllUsers from "../Page/AllUsers/AllUsers";
import UserDetails from "../Page/UserDetails";
import AddUserForm from "../Page/AddUserForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/allUser",
        element: <AllUsers />,
      },
      {
        path: "/userDetails/:id",
        element: <UserDetails />,
      },
      {
        path:'/addUser',
        element:<AddUserForm />
      }
    ],
  },
]);
export default routes;
