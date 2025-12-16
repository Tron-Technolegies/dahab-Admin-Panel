import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { action as AddMiningMinerAction } from "./components/Admin/mining/miners/AddNewMiner";
import { loader as EditMiningMinerLoader } from "./components/Admin/mining/miners/EditMiningMiner";
import { action as EditMiningMinerAction } from "./components/Admin/mining/miners/EditMiningMiner";
import {
  AddEventPage,
  AddInventoryItem,
  AddNewBlog,
  AddNewDataPage,
  AddNewProduct,
  AddRepairMiner,
  AdminBlogPage,
  AdminEventPage,
  AdminInventoryPage,
  AdminLayout,
  AdminMessages,
  AdminNotification,
  AdminProductPage,
  AdminRepairPage,
  AdminSingleBlogPage,
  AlertPage,
  AuthLayout,
  DashboardPage,
  DataPage,
  EditAdminBlog,
  EditDataPage,
  EditProduct,
  ErrorPage,
  ForgotPassword,
  LoginPage,
  MiningPage,
  NavigationPage,
  RemoveMiners,
  RepairSectionsPage,
  ResetPassword,
  SingleError,
  SingleInventoryItem,
  SingleProductPage,
} from "./pages";
import {
  AddNewMiner,
  AddNewVoucher,
  EditMiningMiner,
  EditVoucher,
  SingleMiningMiner,
} from "./components";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <NavigationPage />, errorElement: <ErrorPage /> },
    {
      path: "/admin",
      element: <AdminLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "dashboard",
          element: <DashboardPage />,
        },
        {
          path: "products",
          element: <AdminProductPage />,
        },
        {
          path: "products/new",
          element: <AddNewProduct />,
        },
        {
          path: "products/:id",
          element: <SingleProductPage />,
        },
        {
          path: "products/:id/edit",
          element: <EditProduct />,
        },
        {
          path: "blogs",
          element: <AdminBlogPage />,
        },
        {
          path: "blogs/new",
          element: <AddNewBlog />,
        },
        {
          path: "blogs/:id",
          element: <AdminSingleBlogPage />,
        },
        {
          path: "blogs/:id/edit",
          element: <EditAdminBlog />,
        },
        {
          path: "data",
          element: <DataPage />,
        },
        {
          path: "data/new",
          element: <AddNewDataPage />,
        },
        {
          path: "data/:id/edit",
          element: <EditDataPage />,
        },
        {
          path: "repair",
          element: <AdminRepairPage />,
        },
        {
          path: "repair/new",
          element: <AddRepairMiner />,
        },
        {
          path: "repair/remove",
          element: <RemoveMiners />,
        },
        {
          path: "repair/status/:id",
          element: <RepairSectionsPage />,
        },
        {
          path: "inventory",
          element: <AdminInventoryPage />,
        },
        {
          path: "inventory/new",
          element: <AddInventoryItem />,
        },
        {
          path: "inventory/alert",
          element: <AlertPage />,
        },
        {
          path: "inventory/:id",
          element: <SingleInventoryItem />,
        },
        {
          path: "mining",
          element: <MiningPage />,
        },
        {
          path: "mining/miner/new",
          element: <AddNewMiner />,
          action: AddMiningMinerAction,
        },
        {
          path: "mining/miner/edit/:id",
          element: <EditMiningMiner />,
          loader: EditMiningMinerLoader,
          action: EditMiningMinerAction,
        },
        {
          path: "mining/miner/:id",
          element: <SingleMiningMiner />,
        },
        {
          path: "mining/voucher/new",
          element: <AddNewVoucher />,
        },
        {
          path: "mining/voucher/edit/:id",
          element: <EditVoucher />,
        },
        {
          path: "notifications",
          element: <AdminNotification />,
        },
        {
          path: "messages",
          element: <AdminMessages />,
          errorElement: <SingleError />,
        },
        {
          path: "events",
          element: <AdminEventPage />,
        },
        {
          path: "events/new",
          element: <AddEventPage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "login", element: <LoginPage /> },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
