import React, {useEffect} from "react";
import {Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AddInfo from "../views/AddInfo"; 
import ShowPortfolio from "../views/ShowPortfolio"; 

// import { Navigate, useNavigate } from 'react-router-dom';


const RouteConfig = () =>{
    const navigate = useNavigate();

    return(
        <Routes>
            <Route path="/" element={<AddInfo />} />
            <Route path="/showportfolio" element={<ShowPortfolio />} />

        </Routes>
    );
};

export default RouteConfig; 