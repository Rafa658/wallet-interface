import React from "react";
import { Route, Routes } from "react-router-dom";
import Aside from "./Views/Aside/Aside";
import Positions from "./Views/Positions/Table";
import Cards from './Views/Cards/Cards'

const RoutesElement = () => {

    return (
        <Routes>
            <Route path='/' element={<Cards/>}/>
        </Routes>
    )
}

export default RoutesElement