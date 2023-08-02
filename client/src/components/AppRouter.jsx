import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Shop from "../pages/Shop";
import AdminPage from "../pages/AdminPage";
import Bascet from "../pages/Bascet";
import Auth from "../pages/Auth";
import { publicRoutes } from "../routes";
import {
  ADMIN_ROUTE,
  BASCET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import DevicePage from "../pages/DevicePage";
import { Context } from "..";

const AppRouter = () => {
  const {user} = useContext(Context)
  console.log(user)
  return (
    <>
      {user.isAuth ? (
        <Routes>
          <Route path={ADMIN_ROUTE} element={<AdminPage />} />
          <Route path={BASCET_ROUTE} element={<Bascet />} />
          <Route path={SHOP_ROUTE} element={<Shop />} />
          <Route path={LOGIN_ROUTE} element={<Auth />} />
          <Route path={REGISTRATION_ROUTE} element={<Auth />} />
          <Route path={DEVICE_ROUTE + "/:id"} element={<DevicePage />} />
          <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={SHOP_ROUTE} element={<Shop />} />
          <Route path={LOGIN_ROUTE} element={<Auth />} />
          <Route path={REGISTRATION_ROUTE} element={<Auth />} />
          <Route path={DEVICE_ROUTE + "/:id"} element={<DevicePage />} />
          <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
