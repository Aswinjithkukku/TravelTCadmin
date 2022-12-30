import React from "react";
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
import { Route, Routes } from "react-router-dom";

function AdminRouter() {
  return (
    <div>
      <MainLayout />
      <main className="ml-[16em]">
        <Routes>
          <Route path="" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/tours/all" element={<TourPage />} />
          <Route path="/tours/add" element={<TourAddPage />} />
          <Route path="/tours/category" element={<TourCategoryPage />} />
          <Route path="/tours/description" element={<TourDescriptionpage />} />
          <Route path="/tours/ticket/add" element={<TourTicketAddPage />} />
          <Route path="/tours/ticket/edit" element={<TourTicketEditPage />} />
          <Route path="/tours/edit" element={<TourEditPage />} />

          <Route path="/homepages/logo" element={<HomeLogoPage />} />
          <Route path="/homepages/helpline" element={<HomeHelplinePage />} />
          <Route path="/homepages/social" element={<HomeSocialPage />} />
          <Route path="/homepages/banner" element={<HomeBannerPage />} />
          <Route path="/homepages/banner/add" element={<HomeAddBannerPage />} />
          <Route
            path="/homepages/banner/edit"
            element={<HomeUpdateBannerPage />}
          />
          <Route path="/homepages/card" element={<HomeCardPage />} />
          <Route path="/homepages/card/add" element={<HomeAddCardPage />} />
          <Route
            path="/homepages/Bestselling"
            element={<HomeBestSellingPage />}
          />
          <Route path="/homepages/topselling" element={<HomeTopSellingPage />} />
          <Route path="/homepages/blog" element={<HomeBlogPage />} />
          <Route path="/homepages/blog/add" element={<HomeAddBlogPage />} />
          <Route path="/homepages/blog/edit" element={<HomeUpdateBlogPage />} />
          <Route path="/homepages/footer" element={<HomeFooterPage />} />
          <Route path="/homepages/footer/add" element={<HomeAddFooterPage />} />

          <Route path="/general/country" element={<GeneralCountry />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminRouter;
