import Home from "/src/components/home/Home";
import { useRoutes } from "react-router-dom";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return routes;
}
