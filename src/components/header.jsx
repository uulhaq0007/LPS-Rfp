import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Button,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  Tooltip,
} from "@mui/material";
import { Upload } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[300], 0.3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[300], 0.5),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "250px",
  [theme.breakpoints.down("sm")]: {
    width: "150px",
  },
  display: "flex",
  alignItems: "center",
  padding: "0 8px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
  fontSize: 10,
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [theme, setTheme] = useState("light");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleTheme = () => {
    const body = document.body;

    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      setTheme("dark");
    } else if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");
      setTheme("light");
    } else {
      body.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <AppBar
      position='static'
      color='inherit'
      sx={{
        boxShadow: "none",
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        maxHeight: "40px",
        minHeight: "40px",
      }}
      elevation={0}>
      <Toolbar
        size='small'
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "0 !important",
          padding: "8px 16px",
        }}>
        {/* Left: Search */}
        <Search
          sx={{
            backgroundColor: "transparent",
            border: "1px solid var(--border)",
            borderRadius: 0.7,
          }}>
          <SearchIcon sx={{ fontSize: 12 }} />
          <StyledInputBase
            sx={{
              color: "var(--text)",
            }}
            placeholder='Search RFPs or Projects'
          />
        </Search>

        {/* Right: Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant='outlined'
            size='small'
            startIcon={<Upload />}
            sx={{
              borderRadius: 0.7,
              fontSize: "0.5rem",
              lineHeight: 1.2,
              padding: "2px 10px",
            }}>
            Upload RFP
          </Button>

          <IconButton
            sx={{ p: 0 }}
            onClick={toggleTheme}>
            {theme === "light" ? (
              <DarkModeOutlinedIcon
                sx={{ fontSize: 18, color: "var(--icon-color)" }}
              />
            ) : (
              <WbSunnyOutlinedIcon
                sx={{ fontSize: 18, color: "var(--icon-color)" }}
              />
            )}
          </IconButton>

          <IconButton sx={{ p: 0 }}>
            <NotificationsNoneIcon
              sx={{ fontSize: 18, color: "var(--icon-color)" }}
            />
          </IconButton>

          <Tooltip
            title='Account settings'
            onClick={handleMenu}>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              gap={1.5}
              sx={{ cursor: "pointer" }}>
              <IconButton
                onClick={handleMenu}
                size='small'
                sx={{ p: 0 }}>
                <Avatar sx={{ width: 24, height: 24, fontSize: 8 }}>UH</Avatar>
              </IconButton>
              <Box>
                <Typography
                  variant='h6'
                  fontWeight={600}
                  sx={{ fontSize: 12, lineHeight: 1.2 }}>
                  Usman Ul Haq
                </Typography>
                <Typography
                  variant='body2'
                  color='gray'
                  sx={{ fontSize: 10, lineHeight: 1.2 }}>
                  Member{" "}
                </Typography>
              </Box>
              <KeyboardArrowDownIcon
                sx={{ fontSize: 18, color: "#898585ea" }}
              />
            </Box>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              sx: { pt: 0, pb: 0, p: 0 },
            }}
            PaperProps={{
              sx: {
                minWidth: 130,
                mt: 0.5,
                borderRadius: 0.5,
                boxShadow: 3,
                backgroundColor: "var(--bg)",
                color: "var(--text)",
                border: "1px solid var(--border)",
              },
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}>
            <MenuItem
              sx={{
                fontSize: 11,
                py: 0.8,
                borderBottom: "1px solid var(--border)",
              }}>
              My Account
            </MenuItem>

            <MenuItem
              sx={{
                fontSize: 11,
                py: 0.5,
                m: 0.5,
                borderRadius: 0.5,
                "&:hover": {
                  backgroundColor: "#0d9488",
                  color: "#fff",
                },
              }}>
              Profile
            </MenuItem>

            <MenuItem
              sx={{
                fontSize: 11,
                py: 0.5,
                m: 0.5,
                borderRadius: 0.5,
                "&:hover": {
                  backgroundColor: "#0d9488",
                  color: "#fff",
                },
              }}>
              Setting
            </MenuItem>

            <MenuItem
              sx={{
                fontSize: 11,
                py: 0.8,
                color: "red",
                borderTop: "1px solid var(--border)",
                "&:hover": {
                  backgroundColor: "#a22525ff",
                  color: "#ffffffff",
                },
              }}
              onClick={handleClose}>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
