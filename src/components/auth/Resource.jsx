import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Button,
  Chip,
  Grid,
  TextField,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const dummyData = [
  {
    name: "Sarah Johnson",
    role: "Cloud Solutions Architect",
    status: "Available",
    skills: ["Security", "Cloud", "AWS", "Azure"],
    experience: "12 years",
    rating: 4.9,
    location: "San Francisco, CA",
    email: "sarah.j@rfppro.com",
    phone: "+1 (555) 123-4567",
  },
  {
    name: "Michael Lee",
    role: "Full Stack Developer",
    status: "Busy",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    experience: "7 years",
    rating: 4.7,
    location: "New York, NY",
    email: "m.lee@rfppro.com",
    phone: "+1 (555) 987-6543",
  },
  {
    name: "Emily Carter",
    role: "UI/UX Designer",
    status: "Limited",
    skills: ["Figma", "Wireframing", "Prototyping", "Branding"],
    experience: "5 years",
    rating: 4.8,
    location: "Austin, TX",
    email: "e.carter@rfppro.com",
    phone: "+1 (555) 222-1133",
  },
  {
    name: "James Mitchell",
    role: "DevOps Engineer",
    status: "Busy",
    skills: ["Docker", "Kubernetes", "CI/CD", "Linux"],
    experience: "10 years",
    rating: 4.6,
    location: "Seattle, WA",
    email: "j.mitchell@rfppro.com",
    phone: "+1 (555) 443-9988",
  },
  {
    name: "Sarah Johnson",
    role: "Cloud Solutions Architect",
    status: "Available",
    skills: ["Security", "Cloud", "AWS", "Azure"],
    experience: "12 years",
    rating: 4.9,
    location: "San Francisco, CA",
    email: "sarah.j@rfppro.com",
    phone: "+1 (555) 123-4567",
  },
  {
    name: "Michael Lee",
    role: "Full Stack Developer",
    status: "Busy",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    experience: "7 years",
    rating: 4.7,
    location: "New York, NY",
    email: "m.lee@rfppro.com",
    phone: "+1 (555) 987-6543",
  },
  {
    name: "Emily Carter",
    role: "UI/UX Designer",
    status: "Limited",
    skills: ["Figma", "Wireframing", "Prototyping", "Branding"],
    experience: "5 years",
    rating: 4.8,
    location: "Austin, TX",
    email: "e.carter@rfppro.com",
    phone: "+1 (555) 222-1133",
  },
  {
    name: "James Mitchell",
    role: "DevOps Engineer",
    status: "Busy",
    skills: ["Docker", "Kubernetes", "CI/CD", "Linux"],
    experience: "10 years",
    rating: 4.6,
    location: "Seattle, WA",
    email: "j.mitchell@rfppro.com",
    phone: "+1 (555) 443-9988",
  },
];

const statusColor = {
  "In Progress": "#1976d2",
  Limited: "#ffa600",
  Busy: "#6e0404",
  Available: "#2e7d32",
};
const color = [
  "#2563eb",
  "#9411b4ff",
  "#04b961ff",
  "#ba6702ff",
  "#8c03baff",
  "#dc1170ff",
  "#2e7d32",
  "#3b3939ff",
];

export default function Resource() {
  const [activeBtn, setActiveBtn] = useState("all");

  const buttons = [
    { id: "all", label: "All" },
    { id: "Security", label: "Security" },
    { id: "Cloud ", label: "Cloud" },
    { id: "AI/ML", label: "AI/ML" },
    { id: "Finance", label: "Finance" },
    { id: "Project Management", label: "Project Management" },
  ];
  return (
    <Box
      height={"100%"}
      backgroundColor='var(--page-bg)'
      color='var(--text)'
      p={3}>
      <Box
        display='flex'
        justifyContent='space-between'
        p={0}
        m={0}
        alignItems='center'>
        <Box
          display={"flex"}
          flexDirection={"column"}>
          <Typography
            variant='h7'
            fontWeight={600}>
            Resource Center
          </Typography>
          <Typography
            variant='body2'
            fontSize={11}
            color='var(--subtext)'
            fontWeight={100}>
            Browse and connect with expert team members
          </Typography>
        </Box>
        <Box
          display='flex'
          gap={2}>
          <Button
            variant='contained'
            size='small'
            startIcon={<AddOutlinedIcon />}
            sx={{
              borderRadius: 0.5,
              fontSize: "0.6rem",
              padding: "3px 6px",
            }}>
            Add Resource
          </Button>
        </Box>
      </Box>

      {/* Search */}
      <Box
        mt={2}
        mb={2}>
        {/* Search + New Response Button */}
        <Box
          display='flex'
          flexDirection={"Column"}
          gap={1}>
          <Box flex={1}>
            <TextField
              fullWidth
              placeholder='Search Resource .....'
              InputProps={{
                startAdornment: (
                  <SearchIcon style={{ marginRight: 4, fontSize: 14 }} />
                ),
                sx: {
                  height: 24,
                  fontSize: "8px",
                  padding: "0px !important",
                  paddingLeft: "12px !important",
                  border: "1px solid var(--border)",
                },
              }}
              inputProps={{
                style: {
                  fontSize: "12px",
                  padding: "6px 8px",
                },
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: 24,
                  fontSize: "10px",
                  borderRadius: 0.5,
                },
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "10px",
                  opacity: 0.7,
                },
              }}
            />
          </Box>
          <Box
            mt={0}
            display='flex'
            alignItems='center'
            height={"24px"}
            gap={0.5}>
            {buttons.map((btn) => (
              <Button
                key={btn.id}
                variant={activeBtn === btn.id ? "contained" : "outlined"}
                size='small'
                onClick={() => setActiveBtn(btn.id)}
                sx={{
                  textTransform: "none",
                  fontSize: "10px",
                  borderRadius: 0.5,
                  height: "100%",
                  padding: "0px 10px",
                  margin: 0,

                  backgroundColor:
                    activeBtn === btn.id ? "#1976d2" : "transparent",
                  color: activeBtn === btn.id ? "#fff" : "inherit",
                  "&.Mui-focusVisible": { outline: "none" },
                  "&:focus": { outline: "none" },
                  "&:focus-visible": { outline: "none" },
                  "&:hover": {
                    backgroundColor: "#0d9488",
                    color: "#ffffff",
                  },
                }}>
                {btn.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          maxHeight: "80vh",
          overflowY: "auto",
          pb: 2,
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#bdbdbd",
          },
        }}>
        <Grid
          container
          spacing={1}>
          {dummyData.map((data, index) => (
            <Grid
              display='flex'
              item
              width={{ xs: "100%", md: "49%", lg: "32.5%" }}
              key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--card-bg)",
                  boxShadow: "none",
                  color: "var(--text)",
                }}>
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: 2,
                  }}>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}>
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        fontSize: 14,
                        backgroundColor: color[index % color.length],
                        color: "#ffff",
                      }}>
                      {data.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </Avatar>

                    <Chip
                      label={data.status}
                      size='small'
                      sx={{
                        padding: "0 5px",
                        margin: 0,
                        height: 18,
                        borderRadius: "4px",
                        backgroundColor: `${statusColor[data.status]}20`,
                        color: statusColor[data.status],
                        "& .MuiChip-label": {
                          padding: 0,
                          fontSize: "10px",
                          lineHeight: 1,
                        },
                      }}
                    />
                  </Box>
                  <Box
                    pb={1}
                    borderBottom={"1px solid var(--border)"}>
                    <Typography
                      mt={1}
                      fontSize={14}
                      fontWeight={600}>
                      {data.name}
                    </Typography>
                    <Typography
                      fontSize={11}
                      color='gray'>
                      {data.role}
                    </Typography>

                    {/* Skills */}
                    <Box
                      mt={1}
                      display='flex'
                      gap={1}
                      flexWrap='wrap'>
                      {data.skills.map((skill, i) => (
                        <Chip
                          key={i}
                          label={skill}
                          size='small'
                          sx={{
                            height: 20,
                            fontSize: "10px",
                            color: "var(--text)",
                            border: "1px solid var(--border)",
                            borderRadius: "3px",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Experience + Rating */}
                  <Box
                    mt={2}
                    display='flex'
                    color='var(--subtext)'
                    justifyContent='space-between'>
                    <Typography fontSize={11}>
                      Experience: {data.experience}
                    </Typography>
                    <Typography fontSize={11}>
                      ⭐Rating: {data.rating}
                    </Typography>
                  </Box>

                  {/* Location */}
                  <Box
                    mt={1}
                    display='flex'
                    alignItems='center'
                    color='var(--subtext)'
                    gap={1}>
                    <LocationOnOutlinedIcon sx={{ fontSize: 16 }} />
                    <Typography fontSize={11}>{data.location}</Typography>
                  </Box>

                  {/* Email */}
                  <Box
                    mt={1}
                    display='flex'
                    alignItems='center'
                    color='var(--subtext)'
                    gap={1}>
                    <EmailOutlinedIcon sx={{ fontSize: 16 }} />
                    <Typography fontSize={11}>{data.email}</Typography>
                  </Box>

                  {/* Phone */}
                  <Box
                    mt={1}
                    display='flex'
                    alignItems='center'
                    color='var(--subtext)'
                    gap={1}>
                    <CallOutlinedIcon sx={{ fontSize: 16 }} />
                    <Typography fontSize={11}>{data.phone}</Typography>
                  </Box>

                  {/* Buttons */}
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    mt={1}
                    pt={1}
                    borderTop={"1px solid var(--border)"}>
                    <Button
                      variant='outlined'
                      sx={{
                        width: "49%",
                        borderColor: "var(--border)",
                        color: "var(--text)",
                        "&:hover": {
                          backgroundColor: "#0d9488",
                          color: "#fff",
                        },
                        borderRadius: 0.5,
                        fontSize: "0.6rem",
                        padding: "3px 6px",
                      }}>
                      Contact{" "}
                    </Button>
                    <Button
                      variant='contained'
                      sx={{
                        width: "49%",
                        borderRadius: 0.5,
                        fontSize: "0.6rem",
                        padding: "3px 6px",
                      }}>
                      View Profile{" "}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
