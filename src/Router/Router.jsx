import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../pages/Users";
import User from "../Components/User";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/user/:id" element={<User />} />
        </Routes>
    );
};

export default Router;
