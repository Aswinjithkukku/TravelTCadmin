import {
  DashboardPage,
  HomePage,
  TourAddPage,
  TourDescriptionpage,
  TourEditPage,
  TourPage,
  TourTicketAddPage
} from "../pages/Heros";
import MainLayout from "./MainLayout";

const ThemeRoutes = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "", element: <DashboardPage /> },
      { path: "/tours/all", element: <TourPage /> },
      { path: "/tours/add", element: <TourAddPage /> },
      { path: "/tours/description", element: <TourDescriptionpage /> },
      { path: "/tours/ticket/add", element: <TourTicketAddPage /> },
      { path: "/homepages", element: <HomePage /> },
      { path: "/tours/edit", element: <TourEditPage /> },
    ],
  },
];

export default ThemeRoutes;
