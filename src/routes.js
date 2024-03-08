import { Navigate, useRoutes, Route } from "react-router-dom";
import Land from "./pages/Land";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Land />,
    },
  ]);

  return routes;
}
