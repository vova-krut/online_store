import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop";
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
    const isAuth = false;
    return (
        <Routes>
            {isAuth &&
                authRoutes.map(({ path, component }) => (
                    <Route key={path} path={path} element={component} exact />
                ))}
            {publicRoutes.map(({ path, component }) => (
                <Route key={path} path={path} element={component} exact />
            ))}
            <Route path="*" element={<Shop />} />
        </Routes>
    );
};

export default AppRouter;
