import React from "react";
import {Routes, Route } from "react-router-dom";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default function AuthViews() {
  return(
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  );
}