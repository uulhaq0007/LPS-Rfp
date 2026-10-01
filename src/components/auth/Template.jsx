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
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const dummyData = [
  {
    title: "Cloud Infrastructure Services RFP",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    status: "In Progress",
    progress: 65,
    Section: 8,
    total: 12,
    owner: "Sarah Johnson",
    due: "Nov 15, 2025",
  },
  {
    title: "Cybersecurity Assessment & Implementation",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    status: "Draft",
    progress: 45,
    Section: 7,
    total: 15,
    owner: "Michael Chen",
    due: "Nov 22, 2025",
  },
  {
    title: "Enterprise Software Development",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    status: "Packaged",
    progress: 85,
    Section: 9,
    total: 10,
    owner: "Emily Rodriguez",
    due: "Dec 1, 2025",
  },
  {
    title: "Data Analytics Platform",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    status: "Generated",
    progress: 100,
    Section: 14,
    total: 14,
    owner: "David Kim",
    due: "Oct 28, 2025",
  },
  {
    title: "Mobile Application Development",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    status: "In Progress",
    progress: 55,
    Section: 6,
    total: 11,
    owner: "Jessica Martinez",
    due: "Nov 30, 2025",
  },
  {
    title: "AI/ML Integration Services",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    status: "Packaged",
    progress: 90,
    Section: 12,
    total: 13,
    owner: "Robert Thompson",
    due: "Oct 20, 2025",
  },
  {
    title: "Cloud Infrastructure Services RFP",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    status: "In Progress",
    progress: 65,
    Section: 8,
    total: 12,
    owner: "Sarah Johnson",
    due: "Nov 15, 2025",
  },
  {
    title: "Cybersecurity Assessment & Implementation",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    status: "Draft",
    progress: 45,
    Section: 7,
    total: 15,
    owner: "Michael Chen",
    due: "Nov 22, 2025",
  },
  {
    title: "Enterprise Software Development",
    status: "Packaged",
    progress: 85,
    Section: 9,
    total: 10,
    owner: "Emily Rodriguez",
    due: "Dec 1, 2025",
  },
  {
    title: "Data Analytics Platform",
    description:
      "It is a long nd,jads,mna k;ahfoaihesf njfjslkflkshf  ;asndadsadjqndshc lahdsahs  kjfhalkjshf ",
    status: "Generated",
    progress: 100,
    Section: 14,
    total: 14,
    owner: "David Kim",
    due: "Oct 28, 2025",
  },
  {
    title: "Mobile Application Development",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    status: "In Progress",
    progress: 55,
    Section: 6,
    total: 11,
    owner: "Jessica Martinez",
    due: "Nov 30, 2025",
  },
  {
    title: "AI/ML Integration Services",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    status: "Packaged",
    progress: 90,
    Section: 12,
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

export default function Template() {
  const [activeBtn, setActiveBtn] = useState("all");

  const buttons = [
    { id: "all", label: "All" },
    { id: "Technical", label: "Technical" },
    { id: "Pricing ", label: "Pricing" },
    { id: "Compliance", label: "Compliance" },
  ];
  return (
    <Box
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
            Response Templates{" "}
          </Typography>
          <Typography
            variant='body2'
            fontSize={11}
            color='var(--subtext)'
            fontWeight={100}>
            Reusable templates to speed up your RFP response creation{" "}
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
            Create Template
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
          alignItems='center'
          gap={1}>
          <Box flex={1}>
            <TextField
              fullWidth
              placeholder='Search Templates .....'
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
                  padding: "0px 0px",
                  margin: 0,
                  "&:hover": { backgroundColor: "#0d9488" },
                  backgroundColor:
                    activeBtn === btn.id ? "#1976d2" : "transparent",
                  color: activeBtn === btn.id ? "#fff" : "inherit",
                  "&.Mui-focusVisible": { outline: "none" },
                  "&:focus": { outline: "none" },
                  "&:focus-visible": { outline: "none" },
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
          {dummyData.map((item, index) => (
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
                  {/* img + Status */}
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    mb={1}>
                    <DescriptionOutlinedIcon
                      fontSize='large'
                      sx={{ color: "#2563eb" }}
                    />
                    <Chip
                      label={item.status}
                      size='small'
                      sx={{
                        height: 18,
                        borderRadius: "4px",
                        backgroundColor: `${statusColor[item.status]}20`,
                        color: statusColor[item.status],
                        "& .MuiChip-label": {
                          padding: "0px 4px",
                          fontSize: "10px",
                          lineHeight: 1,
                        },
                      }}
                    />
                  </Box>

                  {/* Title + Description */}
                  <Box
                    display='flex'
                    flexDirection='column'
                    flex={1}
                    mb={1}>
                    <Typography
                      variant='h6'
                      fontSize={12}
                      fontWeight={500}>
                      {item.title}
                    </Typography>

                    <Typography
                      flex={1}
                      variant='body2'
                      fontSize={11}
                      color='text.secondary'
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}>
                      {!item.description?.trim()
                        ? "Detailed Not Provided."
                        : item.description}
                    </Typography>
                  </Box>

                  {/* Sections + Modified */}
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    mb={1}>
                    <Typography
                      variant='body2'
                      fontSize={10}
                      color='text.secondary'>
                      Sections: {item.Section}
                    </Typography>
                    <Typography
                      variant='body2'
                      fontSize={10}
                      color='text.secondary'>
                      Modified: {item.due}
                    </Typography>
                  </Box>

                  {/* Buttons */}
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    gap={1}>
                    <Button
                      variant='contained'
                      sx={{
                        width: "66%",
                        borderRadius: 0.5,
                        fontSize: "0.7rem",
                        padding: "4px 8px",
                      }}>
                      Use Template
                    </Button>
                    <Button
                      variant='outlined'
                      sx={{
                        width: "33%",
                        borderRadius: 0.5,
                        fontSize: "0.7rem",
                        padding: "4px 8px",
                        "&:hover": {
                          backgroundColor: "#0d9488",
                          color: "#fff",
                        },
                      }}>
                      Preview
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
