import {
  LoginPage,
  SignupPage,
  DashboardPage,
  TourAddPage,
  TourCategoryPage,
  TourDescriptionpage,
  TourEditPage,
  TourPage,
  TourTicketAddPage,
  TourTicketEditPage,
  
  HomeLogoPage,
  HomeHelplinePage,
  HomeBannerPage,
  HomeAddBannerPage,
  HomeUpdateBannerPage,
  HomeCardPage,
  HomeSocialPage,
  HomeAddCardPage,
  HomeBestSellingPage,
  HomeTopSellingPage,
  HomeBlogPage,
  HomeAddBlogPage,
  HomeUpdateBlogPage,
  HomeFooterPage,
  HomeAddFooterPage,

  GeneralCountry,
} from "../pages/Heros";
import MainLayout from "./MainLayout";

const ThemeRoutes = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "", element: <DashboardPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <SignupPage /> },
      { path: "/tours/all", element: <TourPage /> },
      { path: "/tours/add", element: <TourAddPage /> },
      { path: "/tours/category", element: <TourCategoryPage /> },
      { path: "/tours/description", element: <TourDescriptionpage /> },
      { path: "/tours/ticket/add", element: <TourTicketAddPage /> },
      { path: "/tours/ticket/edit", element: <TourTicketEditPage /> },
      { path: "/tours/edit", element: <TourEditPage /> },

      { path: "/homepages/logo", element: <HomeLogoPage /> },
      { path: "/homepages/helpline", element: <HomeHelplinePage /> },
      { path: "/homepages/social", element: <HomeSocialPage /> },
      { path: "/homepages/banner", element: <HomeBannerPage /> },
      { path: "/homepages/banner/add", element: <HomeAddBannerPage /> },
      { path: "/homepages/banner/edit", element: <HomeUpdateBannerPage /> },
      { path: "/homepages/card", element: <HomeCardPage /> },
      { path: "/homepages/card/add", element: <HomeAddCardPage /> },
      { path: "/homepages/Bestselling", element: <HomeBestSellingPage /> },
      { path: "/homepages/topselling", element: <HomeTopSellingPage /> },
      { path: "/homepages/blog", element: <HomeBlogPage /> },
      { path: "/homepages/blog/add", element: <HomeAddBlogPage /> },
      { path: "/homepages/blog/edit", element: <HomeUpdateBlogPage /> },
      { path: "/homepages/footer", element: <HomeFooterPage /> },
      { path: "/homepages/footer/add", element: <HomeAddFooterPage /> },

      { path: "/general/country", element: <GeneralCountry /> },
    ],
  },
];

export default ThemeRoutes;
