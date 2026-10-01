import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../components/auth/LoginPage";
import SignupPage from "../components/auth/SignupPage";
import ForgotPasswordPage from "../components/auth/ForgetPassowrd";
import Projects from "../components/auth/project";
import Dashboard from "../components/auth/DashBoard";
import MainLayout from "../layouts/MainLayout";
import Template from "../components/auth/Template";
import KnowledgeHub from "../components/auth/KnowlegeHub";
import Resource from "../components/auth/Resource";
import Composer from "../components/auth/Composer";

const AuthPage = () => {
  return (
    <Routes>
      {/* AUTH PAGES */}
      <Route
        path='/login'
        element={<LoginPage />}
      />
      <Route
        path='/signup'
        element={<SignupPage />}
      />
      <Route
        path='/forgot-password'
        element={<ForgotPasswordPage />}
      />

      {/* MAIN LAYOUT (SIDEBAR + HEADER) */}
      <Route
        path='/'
        element={<MainLayout />}>
        <Route
          path='dashboard'
          element={<Dashboard />}
        />
        <Route
          path='projects'
          element={<Projects />}
        />
        <Route
          path='Template'
          element={<Template />}
        />
        <Route
          path='KnowledgeHub'
          element={<KnowledgeHub />}
        />
        <Route
          path='composer'
          element={<Composer />}
        />
        <Route
          path='Resources'
          element={<Resource />}
        />
      </Route>

      {/* 404 NOT FOUND PAGE */}
      <Route
        path='*'
        element={
          <h1 style={{ textAlign: "center", marginTop: "50px" }}>
            404 - Page Not Found
          </h1>
        }
      />
    </Routes>
  );
};

export default AuthPage;
