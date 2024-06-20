import Ecommerce from "../pages/ECommerce";
import LayoutDefault from "../layout/LayoutDefault";
import BookRoom from "../pages/BookRoom";
import Dashboard from "../pages/Dashboard";
import CreateRoom from "../pages/CreateRoom";
import { patch } from "../utils/request";
import ListRoom from "../pages/ListRoom";


export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/book-room",
        element: <BookRoom />,
      },
      {
        path: "/e-commerce",
        element: <Ecommerce />,
      },
      {
        path:"/create-room",
        element: <CreateRoom/>
      },
      {
        path:"/list-room",
        element: <ListRoom/>
      }
    ],
  },
];
