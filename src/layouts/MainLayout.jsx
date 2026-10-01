import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Header from "../components/header";

export default function MainLayout() {
  return (
    <Box display='flex'>
      <Sidebar />
      <Box
        flex={1}
        display='flex'
        // flexGrow={1}
        flexDirection='column'
        maxHeight='100vh'
        overflow='hidden'>
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
}
