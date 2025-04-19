import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../layouts/Header/Header";
import BGMain from "../assets/images/background/bg-main.jpeg";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";

export const Route = createRootRoute({
  component: RootComponent,
});

const authRoute = createRoute({
  getParentRoute: () => Route,
  path: "/auth",
  component: AuthPage,
  validateSearch: (search) => {
    const tab = search.tab || "login";
    return {
      tab,
    };
  },
});

const homeRoute = createRoute({
  getParentRoute: () => Route,
  path: "/",
  component: HomePage,
});

function RootComponent() {
  return (
    <div
      className="min-h-screen h-full mt-32 flex flex-col"
      style={{ backgroundImage: `url(${BGMain})` }}
    >
      <Header />
      <div className="flex-1 h-full">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  );
}

export const routeTree = Route.addChildren([authRoute, homeRoute]);
