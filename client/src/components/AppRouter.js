import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const { user } = useContext(Context);

    return (
        <Routes>
            {user.isAuth &&
                authRoutes.map(({ path, component }) => (
                    <Route key={path} path={path} element={component} exact />
                ))}
            {publicRoutes.map(({ path, component }) => (
                <Route key={path} path={path} element={component} exact />
            ))}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
