import { DashboardPage, TourPage } from "../pages/Heros";
import MainLayout from "./MainLayout";

const ThemeRoutes = [
    {
        path: "",
        element: (
                <MainLayout />
        ),
        children: [
            { path: "", element: <DashboardPage /> },
            { path: "/tours", element: <TourPage /> },

        ]
    }
]

export default ThemeRoutes;