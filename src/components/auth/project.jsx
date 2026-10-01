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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const dummyData = [
  {
    title: "Cloud Infrastructure Services RFP",
    company: "Acme Corporation",
    status: "In Progress",
    progress: 65,
    completed: 8,
    total: 12,
    owner: "Sarah Johnson",
    due: "Nov 15, 2025",
  },
  {
    title: "Cybersecurity Assessment & Implementation",
    company: "TechStart Inc.",
    status: "Draft",
    progress: 45,
    completed: 7,
    total: 15,
    owner: "Michael Chen",
    due: "Nov 22, 2025",
  },
  {
    title: "Enterprise Software Development",
    company: "Global Finance Ltd.",
    status: "Packaged",
    progress: 85,
    completed: 9,
    total: 10,
    owner: "Emily Rodriguez",
    due: "Dec 1, 2025",
  },
  {
    title: "Data Analytics Platform",
    company: "HealthCare Systems",
    status: "Generated",
    progress: 100,
    completed: 14,
    total: 14,
    owner: "David Kim",
    due: "Oct 28, 2025",
  },
  {
    title: "Mobile Application Development",
    company: "Retail Solutions Co.",
    status: "In Progress",
    progress: 55,
    completed: 6,
    total: 11,
    owner: "Jessica Martinez",
    due: "Nov 30, 2025",
  },
  {
    title: "AI/ML Integration Services",
    company: "Innovation Labs",
    status: "Packaged",
    progress: 90,
    completed: 12,
    total: 13,
    owner: "Robert Thompson",
    due: "Oct 20, 2025",
  },
  {
    title: "Cloud Infrastructure Services RFP",
    company: "Acme Corporation",
    status: "In Progress",
    progress: 65,
    completed: 8,
    total: 12,
    owner: "Sarah Johnson",
    due: "Nov 15, 2025",
  },
  {
    title: "Cybersecurity Assessment & Implementation",
    company: "TechStart Inc.",
    status: "Draft",
    progress: 45,
    completed: 7,
    total: 15,
    owner: "Michael Chen",
    due: "Nov 22, 2025",
  },
  {
    title: "Enterprise Software Development",
    company: "Global Finance Ltd.",
    status: "Packaged",
    progress: 85,
    completed: 9,
    total: 10,
    owner: "Emily Rodriguez",
    due: "Dec 1, 2025",
  },
  {
    title: "Data Analytics Platform",
    company: "HealthCare Systems",
    status: "Generated",
    progress: 100,
    completed: 14,
    total: 14,
    owner: "David Kim",
    due: "Oct 28, 2025",
  },
  {
    title: "Mobile Application Development",
    company: "Retail Solutions Co.",
    status: "In Progress",
    progress: 55,
    completed: 6,
    total: 11,
    owner: "Jessica Martinez",
    due: "Nov 30, 2025",
  },
  {
    title: "AI/ML Integration Services",
    company: "Innovation Labs",
    status: "Packaged",
    progress: 90,
    completed: 12,
    total: 13,
    owner: "Robert Thompson",
    due: "Oct 20, 2025",
  },
];

const statusColor = {
  "In Progress": "#1976d2",
  Draft: "#ffa600",
  Packaged: "#9c27b0",
  Generated: "#2e7d32",
};

export default function Projects() {
  const [activeBtn, setActiveBtn] = useState("all");

  const buttons = [
    { id: "all", label: "All" },
    { id: "Draft", label: "Draft" },
    { id: "Packaged", label: "Packaged" },
    { id: "Generated", label: "Generated" },
  ];
  return (
    <Box
      p={3}
      sx={{
        backgroundColor: "var(--page-bg)",
        color: "var(--text)",
      }}>
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
            RFP Projects
          </Typography>

          <Typography
            variant='body2'
            fontSize={11}
            sx={{ color: "  var(--subtext)" }}
            fontWeight={100}>
            Manage and track all your RFP responses
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
            New Response
          </Button>
        </Box>
      </Box>

      {/* Search */}
      <Box
        mt={2}
        mb={2}>
        <Box
          display='flex'
          alignItems='center'
          gap={1}>
          <Box flex={1}>
            <TextField
              fullWidth
              placeholder='Search RFPs or Projects...'
              InputProps={{
                startAdornment: (
                  <SearchIcon style={{ marginRight: 4, fontSize: 14 }} />
                ),
                sx: {
                  height: 24,
                  fontSize: "8px",
                  padding: "0px !important",
                  paddingLeft: "12px !important",
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
                  borderRadius: 0.5,
                  fontSize: "10px",
                  color: "var(--text)",
                  "& fieldset": {
                    border: "1px solid var(--border)",
                  },
                  "&:hover fieldset": {
                    borderColor: "var(--text)",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "var(--subtext)",
                  fontSize: "10px",
                },
              }}
            />
          </Box>

          {/* Filter Buttons */}
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
                  padding: "0px 6px",
                  "&:hover": { backgroundColor: "#0d9488" },

                  backgroundColor:
                    activeBtn === btn.id
                      ? "var(--sidebar-active-bg)"
                      : "transparent",
                  color:
                    activeBtn === btn.id
                      ? "var(--sidebar-active-text)"
                      : "var(--text)",
                  borderColor: "var(--border)",
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
            backgroundColor: "var(--border)",
          },
        }}>
        <Grid
          container
          spacing={1}>
          {dummyData.map((item, index) => (
            <Grid
              item
              width={{ xs: "100%", lg: "49.5%" }}
              key={index}>
              <Card
                sx={{
                  borderRadius: "8px !important",
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--card-bg)",
                  boxShadow: "none",
                  color: "var(--text)",
                }}>
                <CardContent>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    mb={0.5}>
                    <Typography
                      variant='h6'
                      fontSize={12}
                      fontWeight={600}>
                      {item.title}
                    </Typography>

                    <Chip
                      label={item.status}
                      size='small'
                      sx={{
                        padding: "0 5px",
                        margin: 0,
                        height: 18,
                        borderRadius: "4px",
                        backgroundColor: `${statusColor[item.status]}20`,
                        color: statusColor[item.status],

                        "& .MuiChip-label": {
                          padding: 0,
                          fontSize: "10px",
                          lineHeight: 1,
                        },
                      }}
                    />
                  </Box>

                  <Typography
                    variant='body2'
                    fontSize={11}
                    sx={{ color: "var(--subtext)" }}>
                    {item.company}
                  </Typography>

                  {/* Progress & Footer */}
                  <Box mt={0.5}>
                    <Box
                      display='flex'
                      justifyContent='space-between'>
                      <Typography
                        variant='body2'
                        fontSize={10}
                        fontWeight={400}>
                        Progress
                      </Typography>
                      <Typography
                        variant='body2'
                        fontSize={10}
                        fontWeight={400}>
                        {`${((item.completed / item.total) * 100).toFixed(
                          0
                        )} %`}
                      </Typography>
                    </Box>

                    <LinearProgress
                      variant='determinate'
                      value={item.progress}
                      sx={{
                        height: 6,
                        borderRadius: 5,
                        mt: 0.5,
                        backgroundColor: "var(--border)",
                      }}
                    />

                    <Typography
                      variant='body2'
                      mt={0.5}
                      fontSize={10}>
                      {item.completed} of {item.total} sections completed
                    </Typography>
                  </Box>

                  {/* Owner + Due */}
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    color={"gray"}
                    mt={1}>
                    <Box
                      display='flex'
                      alignItems='center'
                      fontSize='10px'
                      gap={0.2}>
                      <Typography
                        variant='body2'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        gap={0.5}
                        fontSize='10px'
                        lineHeight={1}>
                        <PersonOutlinedIcon sx={{ fontSize: 14 }} />
                        {item.owner}
                      </Typography>
                    </Box>

                    <Box
                      display='flex'
                      alignItems='center'
                      fontSize='10px'
                      gap={0.2}>
                      <Typography
                        variant='body2'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        gap={0.5}
                        fontSize='10px'
                        lineHeight={1}>
                        <CalendarMonthIcon sx={{ fontSize: 14 }} />
                        Due: {item.due}
                      </Typography>
                    </Box>
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
                      View Details
                    </Button>
                    <Button
                      variant='contained'
                      sx={{
                        width: "49%",
                        borderRadius: 0.5,
                        fontSize: "0.6rem",
                        padding: "3px 6px",
                      }}>
                      Continue Response
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
