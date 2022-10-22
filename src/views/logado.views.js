import React from "react";
import {Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import SignUp from "../components/SignUp";
import CoinSearch from "../components/CoinSearch";

export default function LogadoViews() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/coinsearch" element={<CoinSearch/>}/>
    </Routes>
  );
}