import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home/Home";
import AllUsers from "../Page/AllUsers/AllUsers";






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
        path:'/allUser',
        element:<AllUsers />
      }
    ],
  },
]);
export default routes;
