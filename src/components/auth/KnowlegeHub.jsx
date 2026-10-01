import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Chip,
} from "@mui/material";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
const categories = [
  "All Articles",
  "Getting Started",
  "Best Practices",
  "Technical Guidelines",
  "Pricing & Proposals",
  "Compliance & Legal",
  "Troubleshooting",
];

const quickLinks = ["FAQs", "Video Tutorials", "Documentation"];

const articles = [
  {
    category: "Best Practices",
    title: "How to Write a Winning RFP Response",
    desc: "Learn the key elements that make an RFP response stand out and increase your chances of winning.",
    time: "8 min read",
  },
  {
    category: "Getting Started",
    title: "Understanding RFP Requirements",
    desc: "A comprehensive guide to analyzing and understanding RFP requirements before you start writing.",
    time: "6 min read",
  },
  {
    category: "Pricing & Proposals",
    title: "Pricing Strategy for RFPs",
    desc: "Best practices for developing competitive pricing that wins deals while maintaining profitability.",
    time: "10 min read",
  },
  {
    category: "Compliance & Legal",
    title: "Common Compliance Mistakes to Avoid",
    desc: "Avoid these common compliance errors that can disqualify your proposal.",
    time: "5 min read",
  },
  {
    category: "Best Practices",
    title: "Using Templates Effectively",
    desc: "How to leverage templates to save time while maintaining quality and customization.",
    time: "7 min read",
  },
  {
    category: "Technical Guidelines",
    title: "Technical Writing for RFPs",
    desc: "Guidelines for writing clear, comprehensive technical sections in your proposals.",
    time: "12 min read",
  },
  {
    category: "Best Practices",
    title: "How to Write a Winning RFP Response",
    desc: "Learn the key elements that make an RFP response stand out and increase your chances of winning.",
    time: "8 min read",
  },
  {
    category: "Getting Started",
    title: "Understanding RFP Requirements",
    desc: "A comprehensive guide to analyzing and understanding RFP requirements before you start writing.",
    time: "6 min read",
  },
  {
    category: "Pricing & Proposals",
    title: "Pricing Strategy for RFPs",
    desc: "Best practices for developing competitive pricing that wins deals while maintaining profitability.",
    time: "10 min read",
  },
  {
    category: "Compliance & Legal",
    title: "Common Compliance Mistakes to Avoid",
    desc: "Avoid these common compliance errors that can disqualify your proposal.",
    time: "5 min read",
  },
  {
    category: "Best Practices",
    title: "Using Templates Effectively",
    desc: "How to leverage templates to save time while maintaining quality and customization.",
    time: "7 min read",
  },
  {
    category: "Technical Guidelines",
    title: "Technical Writing for RFPs",
    desc: "Guidelines for writing clear, comprehensive technical sections in your proposals.",
    time: "12 min read",
  },
];

export default function KnowledgeHub() {
  const [activeCat, setActiveCat] = useState("All Articles");

  return (
    <Box
      flex={1}
      height={"calc(100vh - 50px)"}
      display={"flex"}
      flexDirection={"column"}
      sx={{
        padding: 3,
        bgcolor: "var(--page-bg)",
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
            color={"var(--text)"}
            fontWeight={600}>
            Knowledge Hub
          </Typography>
          <Typography
            color={"var(--subtext)"}
            fontSize={11}
            fontWeight={100}>
            Best practices, guides, and helpful resources for creating winning
            RFP responses
          </Typography>
        </Box>
      </Box>
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
              placeholder='Search articles,FAQs and guides ...'
              InputProps={{
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
                  color: "var(--subtext)",
                  fontSize: "10px",
                  opacity: 0.7,
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        container
        display={"flex"}
        flex={1}
        height={"50vh"}
        flexDirection={"row"}
        overflowY={"auto"}
        gap={1}>
        {/* LEFT SIDEBAR */}
        <Grid
          item
          width={"25%"}
          xs={12}
          display={"flex"}
          gap={1}
          flexDirection={"column"}
          md={3}>
          <Card sx={{ p: 1, border: "1px solid var(--border)" }}>
            <Typography
              sx={{ fontSize: 14, fontWeight: 600, mb: 1, ml: 1 }}
              color='text.secondary'>
              Categories
            </Typography>

            <List>
              {categories.map((item) => (
                <ListItemButton
                  key={item}
                  selected={activeCat === item}
                  onClick={() => setActiveCat(item)}
                  sx={{
                    mb: 0.5,
                    py: 0.8,
                    px: 2,
                    borderRadius: 1,
                    justifyContent: "flex-start",

                    bgcolor:
                      activeCat === item
                        ? "var(--sidebar-active-bg) !important"
                        : "transparent",

                    color: activeCat === item ? "#ffffff" : "var(--text)",
                    fontSize: 12,
                    lineHeight: 1.2,
                    "&:hover": { bgcolor: "var(--sidebar-hover)" },
                  }}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ fontSize: 13, lineHeight: 1.4, fontWeight: 500 }}>
                        {item}
                      </Typography>
                    }
                  />
                </ListItemButton>
              ))}
            </List>
          </Card>
          <Card sx={{ p: 1, border: "1px solid var(--border)" }}>
            <Typography
              sx={{ fontSize: 14, fontWeight: 600, mb: 1, ml: 1 }}
              color='text.secondary'>
              Quick Links
            </Typography>

            <List>
              {quickLinks.map((item) => (
                <ListItemButton
                  key={item}
                  selected={activeCat === item}
                  sx={{
                    mb: 0.5,
                    py: 0.8,
                    px: 2,
                    borderRadius: 1,
                    justifyContent: "flex-start",

                    color: "var(--text)",
                    fontSize: 12,
                    lineHeight: 1.2,
                    "&:hover": { bgcolor: "var(--sidebar-hover)" },
                  }}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ fontSize: 13, lineHeight: 1.4, fontWeight: 500 }}>
                        {item}
                      </Typography>
                    }
                  />
                </ListItemButton>
              ))}
            </List>
          </Card>
        </Grid>

        {/* RIGHT CONTENT */}
        <Box
          item
          overflow={"auto"}
          flex={1}
          xs={12}
          md={9}>
          {articles.map((art) => (
            <Card
              key={art.title}
              sx={{
                mb: 1,
                borderRadius: "8px",
                border: "1px solid var(--border)",
                boxShadow: "none",
              }}>
              <CardContent>
                <Typography
                  variant='body2'
                  color={"var(--subtext)"}
                  sx={{
                    display: "flex",
                    gap: "5px",
                    fontWeight: 300,
                    fontSize: 11,
                  }}>
                  <ImportContactsOutlinedIcon
                    sx={{ fontSize: 16, mr: 0.5, color: "#3b82f6" }}
                  />{" "}
                  {`${art.category} • ${art.time}`}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: "var(--text)",
                    fontWeight: 400,
                    fontSize: 12,
                    mt: 1,
                  }}>
                  {art.title}
                </Typography>

                <Typography
                  color={"var(--subtext)"}
                  sx={{ mt: 0.5, fontSize: 11, fontWeight: 300 }}>
                  {art.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
