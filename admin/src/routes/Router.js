import {
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
    HomeFooterPage
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
        { path: "/homepages/footer", element: <HomeFooterPage /> },

        //           { path="" element={<DashboardPage />} />
        //   { path="/login" elemen={<LoginPage />} />
        //   { path="/register" elemen={<SignupPage />} />
        //   { path="/tours/all" elemen={<TourPage />} />
        //   { path="/tours/add" elemen={<TourAddPage />} />
        //   { path="/tours/category" elemen={<TourCategoryPage />} />
        //   { path="/tours/description" elemen={<TourDescriptionpage />} />
        //   { path="/tours/ticket/add" elemen={<TourTicketAddPage />} />
        //   { path="/tours/ticket/edit" elemen={<TourTicketEditPage />} />
        //   { path="/tours/edit" elemen={<TourEditPage />} />

        //   { path="/homepages/logo" elemen={<HomeLogoPage />} />
        //   { path="/homepages/helpline" elemen={<HomeHelplinePage />} />
        //   { path="/homepages/social" elemen={<HomeSocialPage />} />
        //   { path="/homepages/banner" elemen={<HomeBannerPage />} />
        //   { path="/homepages/banner/add" elemen={<HomeAddBannerPage />} />
        //   {
        //     path="/homepages/banner/edit"
        //     elemen={<HomeUpdateBannerPage />}
        //   />
        //   { path="/homepages/card" elemen={<HomeCardPage />} />
        //   { path="/homepages/card/add" elemen={<HomeAddCardPage />} />
        //   {
        //     path="/homepages/Bestselling"
        //     elemen={<HomeBestSellingPage />}
        //   />
        //   { path="/homepages/topselling" elemen={<HomeTopSellingPage />} />
        //   { path="/homepages/blog" elemen={<HomeBlogPage />} />
        //   { path="/homepages/blog/add" elemen={<HomeAddBlogPage />} />
        //   { path="/homepages/blog/edit" elemen={<HomeUpdateBlogPage />} />
        //   { path="/homepages/footer" elemen={<HomeFooterPage />} />
        //   { path="/homepages/footer/add" elemen={<HomeAddFooterPage />} />

        //   { path="/general/country" elemen={<GeneralCountry />} />
      ],
    },
  ];
  
  export default ThemeRoutes;