import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LayoutStyled from "./LayoutStyled";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const MyVenuesPage = lazy(
  () => import("../../pages/MyVenuesPage/MyVenuesPage")
);
const CreateVenuePage = lazy(
  () => import("../../pages/CreateVenuePage/CreateVenuePage")
);
const VenueDetailedPage = lazy(
  () => import("../../pages/VenueDetailedPage/VenueDetailedPage")
);

const Layout = (): JSX.Element => {
  return (
    <Suspense>
      <LayoutStyled>
        <Routes>
          <Route path="/" element={<Navigate to={"/register"} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/my-venues" element={<MyVenuesPage />} />
          <Route path="/new-venue" element={<CreateVenuePage />} />
          <Route path="/venues/:venueId" element={<VenueDetailedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </LayoutStyled>
    </Suspense>
  );
};

export default Layout;
