import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  Edit as ComposerIcon,
  FolderOpen as ResourcesIcon,
} from "@mui/icons-material";
import DescriptionIcon from "@mui/icons-material/Description";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardOutlinedIcon fontSize='small' />,
  },
  {
    label: "Projects",
    path: "/projects",
    icon: <FolderOpenOutlinedIcon fontSize='small' />,
  },
  {
    label: "Templates",
    path: "/Template",
    icon: <DescriptionOutlinedIcon fontSize='small' />,
  },
  {
    label: "Knowledge Hub",
    path: "/KnowledgeHub",
    icon: <ImportContactsOutlinedIcon fontSize='small' />,
  },
  {
    label: "Composer",
    path: "/composer",
    icon: <ComposerIcon fontSize='small' />,
  },
  {
    label: "Resources",
    path: "/resources",
    icon: <ResourcesIcon fontSize='small' />,
  },
];

const devPages = [
  { label: "Design System", path: "/design-system" },
  { label: "RFP Detail", path: "/rfp-detail" },
  { label: "Wait Screen", path: "/wait-screen" },
  { label: "Confirmation", path: "/confirmation" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 230,
        minWidth: 230,
        background: "var(--bg)",
        borderRight: "1px solid var(--border)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        p: 2,
        color: "var(--text)",
      }}>
      {/* Logo */}
      <Box
        mb={1.5}
        pb={1.5}
        borderBottom={"1px solid var(--border)"}
        display='flex'
        alignItems='center'
        gap={2}>
        <Avatar
          sx={{
            bgcolor: "#3b82f6",
            width: 28,
            height: 28,
            borderRadius: "15%",
          }}>
          <DescriptionIcon sx={{ fontSize: 18, color: "#fff" }} />
        </Avatar>

        <Box>
          <Typography
            variant='h6'
            fontWeight={700}
            sx={{ fontSize: 12, lineHeight: 1.2 }}>
            RFP Pro
          </Typography>
          <Typography
            variant='body2'
            color='gray'
            sx={{
              fontSize: 10,
              lineHeight: 1.2,
              color: "var(--text)",
            }}>
            Vendor Response Platform
          </Typography>
        </Box>
      </Box>

      {/* Main Menu */}
      <List
        mt={1}
        sx={{ p: 0 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                mb: 0.2,
                py: 0.5,
                px: 1,
                borderRadius: 0.7,
                bgcolor: isActive ? "var(--sidebar-active-bg)" : "transparent",
                color: isActive ? "var(--sidebar-active-text)" : "var(--text)",
                fontSize: 10,
                lineHeight: 1.2,
                "&:hover": {
                  bgcolor: isActive
                    ? "var(--sidebar-active-bg)"
                    : "var(--sidebar-hover)",
                },
              }}>
              <Box
                mr={1}
                display='flex'
                alignItems='center'>
                {item.icon}
              </Box>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: 10, lineHeight: 1.2 }}>
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          );
        })}
      </List>

      {/* DEV PAGES */}
      <Box
        mt={1.5}
        pt={1}
        borderTop={"1px solid var(--border)"}>
        <Typography
          variant='caption'
          sx={{
            pl: 1,
            fontSize: 10,
            color: "var(--text)",
            opacity: 0.7,
          }}>
          DEV PAGES
        </Typography>

        <List sx={{ p: 0 }}>
          {devPages.map((page) => (
            <ListItemButton
              key={page.label}
              component={Link}
              to={page.path}
              sx={{
                mb: 0.5,
                py: 0.6,
                px: 1,
                borderRadius: 1,
                justifyContent: "flex-start",

                color: "var(--text)",
                fontSize: 12,
                lineHeight: 1.2,
                "&:hover": { bgcolor: "var(--sidebar-hover)" },
              }}>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: 10, lineHeight: 1.2 }}>
                    {page.label}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
}
