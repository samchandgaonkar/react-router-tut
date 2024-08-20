import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import { Root, loader as rootLoader } from "./routes/root";
import NotFound from "./NotFound";
import Contact from "./routes/contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    loader: rootLoader,
    children: [{
      path: "contacts/:contactId",
      element: <Contact />,
      errorElement: <NotFound />
    }]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);