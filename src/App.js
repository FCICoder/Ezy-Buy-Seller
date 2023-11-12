import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import Clients from "./pages/Clients";
import Dashboard from "./pages/dashboard";
import OrdersPage from "./pages/Orders";
import Products from "./pages/Products";
import ProfilePage from "./pages/Profile";
import Profits from "./pages/Profits";
import Settings from "./pages/Settings";
import MenuContextProvider from "./contexts/Menu";
import PlannerPage from "./pages/Planner";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "orders", element: <OrdersPage /> },
        { path: "clients", element: <Clients /> },
        { path: "profits", element: <Profits /> },
        { path: "planner", element: <PlannerPage /> },
        { path: "settings", element: <Settings /> },
        { path: "Profile", element: <ProfilePage /> },
        { path: "Products", element: <Products /> },
      ],
    },
  ]);
  return (
    <MenuContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </MenuContextProvider>
  );
}

export default App;
