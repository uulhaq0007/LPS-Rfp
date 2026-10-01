import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  LinearProgress,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
const sections = [
  "Executive Summary",
  "Company Overview",
  "Technical Approach",
  "Pricing",
  "Team & Experience",
  "Timeline",
  "References",
];

const settingsOptions = {
  Tone: ["Formal", "Casual", "Friendly", "Professional"],
  "Reading Level": ["Grade 6–8", "Grade 9–11", "Grade 12–14", "College"],
  "Region / Spelling": ["US English", "UK English", "AU English"],
  Citations: ["Inline Footnotes", "Endnotes", "None"],
  "Hallucination Guard": ["Balanced", "Strict", "Lenient"],
  "Response Length": [
    "Short (~100 words)",
    "Medium (~250 words)",
    "Long (~500 words)",
  ],
};

const rfpSections = [
  {
    id: "executive_summary",
    title: "Executive Summary",
    items: [
      {
        id: 1,
        title: "Provide an overview of your company background and vision",
        priority: "Medium",
        color: "info",
      },
      {
        id: 2,
        title: "Summarize key differentiators and value proposition",
        priority: "Low",
        color: "warning",
      },
    ],
  },
  {
    id: "technical_requirements",
    title: "Technical Requirements",
    items: [
      {
        id: 3,
        title: "Describe your cloud infrastructure capabilities",
        priority: "High",
        color: "success",
      },
      {
        id: 4,
        title: "Explain security, compliance, and data protection measures",
        priority: "High",
        color: "success",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    items: [
      {
        id: 5,
        title: "Provide a detailed pricing breakdown and licensing model",
        priority: "Low",
        color: "warning",
      },
    ],
  },
];

const Composer = () => {
  const [mode, setMode] = useState("manual");

  const handleChange = (event, newMode) => {
    if (newMode !== null) {
      setMode(newMode);
    }
  };

  const [activeSection, setActiveSection] = useState("Executive Summary");

  const [values, setValues] = useState({
    Tone: "Formal",
    "Reading Level": "Grade 12–14",
    "Region / Spelling": "US English",
    Citations: "Inline Footnotes",
    "Hallucination Guard": "Balanced",
    "Response Length": "Medium (~250 words)",
  });

  const handleoptionChange = (label) => (event) => {
    setValues({ ...values, [label]: event.target.value });
  };

  const [expanded, setExpanded] = React.useState(false);
  const handleChangeRfpSections = (panelId) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelId : false);
  };

  const [openRFPStructure, setOpenRFPStructure] = useState(false);
  const handleChangeOpenRFPStructure = (newMode) => {
    setOpenRFPStructure(newMode);
  };

  const [openEvidenceCompliance, setOpenEvidenceCompliance] = useState(false);
  const handleChangeOpenEvidenceCompliance = (newMode) => {
    setOpenEvidenceCompliance(newMode);
  };

  return (
    <>
      <Box
        p={2}
        height={"100%"}
        bgcolor={"var(--page-bg)"}
        display={"flex"}
        flexDirection={"column"}>
        <Box p={1}>
          {/* Header */}

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
                color='var(--text)'
                fontWeight={600}>
                RFP Composer
              </Typography>
              <Typography
                variant='body2'
                fontSize={11}
                fontWeight={100}
                color='var(--subtext)'>
                Create professional RFP responses with AI assistance{" "}
              </Typography>
            </Box>
            <Box
              display='flex'
              gap={2}>
              <Button
                variant='outlined'
                size='small'
                startIcon={<SaveOutlinedIcon />}
                sx={{
                  borderRadius: 0.5,
                  fontSize: "0.6rem",
                  padding: "3px 6px",
                }}>
                Save Draft{" "}
              </Button>

              <Button
                variant='contained'
                size='small'
                startIcon={<VisibilityOutlinedIcon />}
                sx={{
                  borderRadius: 0.5,
                  fontSize: "0.6rem",
                  padding: "3px 6px",
                }}>
                Preview Responce{" "}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            p: 1,
            borderRadius: "10px",
            display: "inline-flex",
          }}>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={handleChange}
            sx={{
              backgroundColor: "var(--RadioButton-bg)",
              "& .MuiToggleButton-root": {
                color: "var(--subtext)",
                textTransform: "none",
                px: 2.5,
                py: 0.2,
                border: "none",
                borderRadius: "6px !important",
              },
              "& .Mui-selected": {
                backgroundColor: "rgba(112, 112, 112, 0.35)",
                my: 0.5,
                mx: 0.5,
                color: "var(--text) !important",
              },
            }}>
            <ToggleButton value='manual'>
              <Typography fontSize={12}>Manual Compose</Typography>
            </ToggleButton>

            <ToggleButton value='auto'>
              <Typography fontSize={12}>Auto-Compose</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {mode === "manual" && (
          <Box
            p={0}
            display={"flex"}
            gap={1}
            sx={{ flex: "1" }}>
            <Box sx={{ minWidth: "25%" }}>
              <Card sx={{ p: 1 }}>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 600, mb: 1, ml: 1 }}
                  color='text.secondary'>
                  Sections
                </Typography>

                <List>
                  {sections.map((item) => (
                    <ListItemButton
                      key={item}
                      selected={activeSection === item}
                      onClick={() => setActiveSection(item)}
                      sx={{
                        mb: 0.5,
                        py: 0.8,
                        px: 2,
                        borderRadius: 1,
                        justifyContent: "flex-start",

                        bgcolor:
                          activeSection === item
                            ? "var(--sidebar-active-bg) !important"
                            : "transparent",

                        color:
                          activeSection === item ? "#ffffff" : "var(--text)",
                        fontSize: 12,
                        lineHeight: 1.2,
                        "&:hover": { bgcolor: "var(--sidebar-hover)" },
                      }}>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontSize: 13,
                              lineHeight: 1.4,
                              fontWeight: 500,
                            }}>
                            {item}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Card>
            </Box>

            {/* Right editor panel */}
            <Box
              display={"flex"}
              sx={{ flex: "1" }}>
              <Paper
                display={"flex"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: 2,
                  height: "100%",
                  width: "100%",
                }}>
                <Box
                  display={"flex"}
                  alignItems='center'
                  justifyContent='space-between'
                  mb={2}>
                  <Typography
                    variant='h7'
                    color='var(--text)'
                    fontWeight={600}>
                    {activeSection}
                  </Typography>
                  <Box
                    display='flex'
                    gap={1}>
                    <Button
                      variant='outlined'
                      size='small'
                      sx={{
                        borderRadius: 0.5,
                        fontSize: "0.6rem",
                        padding: "3px 6px",
                      }}>
                      Templates
                    </Button>
                    <Button
                      variant='outlined'
                      size='small'
                      sx={{
                        borderRadius: 0.5,
                        fontSize: "0.6rem",
                        padding: "3px 6px",
                      }}>
                      AI Assist
                    </Button>
                  </Box>
                </Box>

                <TextField
                  multiline
                  placeholder='Start writing your response...'
                  fullWidth
                  sx={{
                    flex: 1,
                  }}
                  InputProps={{
                    sx: {
                      height: "100%",
                      alignItems: "flex-start",
                    },
                  }}
                />

                <Box
                  display='flex'
                  justifyContent='space-between'
                  mt={1}>
                  <Typography
                    variant='caption'
                    color='text.secondary'>
                    Word count: 0 / 500
                  </Typography>
                  <Typography
                    variant='caption'
                    color='text.secondary'>
                    Last saved: Never
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
        )}
        {mode === "auto" && (
          <Box
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
            {/* ===== Top Summary ===== */}
            <Paper sx={{ p: 2 }}>
              <Grid
                container
                spacing={3}>
                <Grid size='grow'>
                  <Typography
                    fontSize={11}
                    color='var(--subtext)'>
                    Overall Progress
                  </Typography>
                  <Box
                    display='flex'
                    alignItems='center'
                    gap={1}>
                    <LinearProgress
                      variant='determinate'
                      value={67}
                      sx={{ height: 6, borderRadius: 5, flexGrow: 1 }}
                    />
                    <Typography
                      fontSize={10}
                      color='var(--text)'>
                      67%
                    </Typography>
                  </Box>
                </Grid>

                <Grid size='grow'>
                  <Typography
                    fontSize={11}
                    color='var(--subtext)'>
                    Questions Drafted
                  </Typography>
                  <Typography
                    fontSize={12}
                    color='var(--text)'>
                    2 of 3
                  </Typography>
                </Grid>

                <Grid size='grow'>
                  <Typography
                    fontSize={11}
                    color='var(--subtext)'>
                    Technical Score
                  </Typography>
                  <Typography
                    fontSize={12}
                    color='var(--text)'>
                    78%
                  </Typography>
                </Grid>

                <Grid size='grow'>
                  <Typography
                    fontSize={11}
                    color='var(--subtext)'>
                    Due Date
                  </Typography>
                  <Typography
                    fontSize={12}
                    color='var(--text)'>
                    Nov 30, 2025
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            {/* ===== Generation Controls ===== */}
            <Paper sx={{ p: 2 }}>
              <Box
                display='flex'
                justifyContent='space-between'
                mb={1}>
                <Typography
                  color={"var(--text)"}
                  fontSize={12}>
                  Generation Controls
                </Typography>
                <Button
                  size='small'
                  spacing='1'
                  startIcon={<SettingsOutlinedIcon />}
                  sx={{
                    borderRadius: 0.5,
                    fontSize: "0.6rem",
                    padding: "3px 6px",
                    "&:hover": {
                      backgroundColor: "#0d9488",
                      color: "#ffffffff",
                    },
                  }}>
                  Reset to Defaults
                </Button>
              </Box>
              <Grid
                container
                spacing={1}>
                {Object.entries(settingsOptions).map(([label, options]) => (
                  <Grid
                    item
                    color={"var(--text)"}
                    width={{ xs: "100%", md: "49%", lg: "32.5%" }}
                    key={label}>
                    <Box
                      display='flex'
                      flexDirection='column'
                      gap={0}>
                      {/* Label separated */}
                      <Typography fontSize={11}>{label}</Typography>

                      <FormControl
                        fullWidth
                        color={"var(--text)"}
                        size='small'
                        sx={{
                          "& .MuiSelect-select": {
                            fontSize: 11,
                            paddingY: 0.5,
                          },
                          minHeight: 32,
                          color: "var(--text)",
                        }}>
                        <Select
                          value={values[label]}
                          onChange={handleoptionChange(label)}
                          sx={{
                            fontSize: 12,
                            py: 0.2,
                            borderRadius: 0.5,
                            color: "var(--text)",
                            border: "1px solid var(--border)",
                            "& .MuiSelect-icon": {
                              color: "var(--text)",
                            },
                          }}>
                          {options.map((option) => (
                            <MenuItem
                              key={option}
                              value={option}
                              sx={{ fontSize: 12, color: "var(--text)" }}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* ===== Main Content ===== */}
            <Box sx={{ flex: 1, display: "flex", gap: 1 }}>
              {/* Left: RFP Structure */}
              {openRFPStructure && (
                <Paper sx={{ width: "49.5%", p: 2, color: "var(--text)" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "Row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      pb: 1,
                    }}>
                    <Typography
                      fontSize={12}
                      fontWeight={500}>
                      RFP Structure
                    </Typography>
                    <Button
                      sx={{
                        color: "var(--text)",
                        borderRadius: 0.5,
                        width: 25,
                        height: 25,
                        minWidth: 10,
                        minHeight: 10,
                        p: 0,
                        m: 0,
                        fontSize: 10,
                        lineHeight: 1,
                        "&:hover": {
                          backgroundColor: "#0d9488",
                          color: "#ffffffff",
                        },
                      }}
                      onClick={() => handleChangeOpenRFPStructure(false)}>
                      <RemoveOutlinedIcon sx={{ fontSize: "10px" }} />
                    </Button>
                  </Box>

                  <TextField
                    size='small'
                    placeholder='Search...'
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        height: 24,
                        borderRadius: 0.5,
                        border: "1px solid var(--border)",
                        fontSize: 12,
                        paddingRight: 0,
                      },
                      "& .MuiOutlinedInput-input": {
                        padding: "6px 8px",
                        fontSize: 12,
                      },
                      "& .MuiOutlinedInput-input::placeholder": {
                        color: "var(--subtext)",
                        fontSize: 11,
                        opacity: 0.7,
                      },
                    }}
                  />

                  <Divider sx={{ my: 0.5 }} />

                  {rfpSections.map((section) => (
                    <Accordion
                      key={section.id}
                      expanded={expanded === section.id}
                      onChange={handleChangeRfpSections(section.id)}
                      sx={{
                        border: 0,
                        borderBottom: "1px solid var(--border)",
                        m: 0,
                        "&.Mui-expanded": { m: 0 },
                        "&::before": { display: "none" },
                      }}>
                      <AccordionSummary
                        sx={{
                          "& .MuiAccordionSummary-content": { margin: 0 },
                          "&.Mui-expanded .MuiAccordionSummary-content": {
                            margin: 0,
                          },
                          minHeight: 32,
                          "&.Mui-expanded": { minHeight: 26 },
                        }}
                        expandIcon={
                          <ExpandMoreIcon sx={{ color: "var(--text)" }} />
                        }>
                        <Typography
                          color='var(--text)'
                          fontSize={11}>
                          {section.title}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails>
                        {section.items.map((item) => (
                          <Card
                            key={item.id}
                            variant='outlined'
                            sx={{ mb: 0.5, borderRadius: 0.5 }}>
                            <CardContent
                              sx={{
                                p: 1,
                                "&:last-child": { pb: 0.5 },
                              }}>
                              <Chip
                                label={item.priority}
                                size='small'
                                color={item.color}
                                sx={{ mb: 0.7 }}
                              />
                              <Typography
                                fontSize={10}
                                color={"var(--text)"}
                                sx={{
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}>
                                {item.title}
                              </Typography>
                            </CardContent>
                          </Card>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Paper>
              )}
              {/* Center: Editor */}
              {!(openRFPStructure && openEvidenceCompliance) && (
                <Paper
                  sx={{
                    flex: 1,
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "70px",
                  }}>
                  <Typography color='var(--subtext)'>
                    Select a question to begin
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 1,
                      p: 0,
                      m: 0,
                    }}>
                    {!openRFPStructure && (
                      <Button
                        sx={{
                          color: "var(--text)",
                          borderRadius: 0.5,
                          width: 25,
                          height: 25,
                          minWidth: 10,
                          minHeight: 10,
                          p: 0,
                          m: 0,
                          fontSize: 10,
                          lineHeight: 1,
                          "&:hover": {
                            backgroundColor: "#0d9488",
                            color: "#ffffffff",
                          },
                        }}
                        onClick={() => handleChangeOpenRFPStructure(true)}>
                        <AddOutlinedIcon sx={{ fontSize: "16px" }} />
                      </Button>
                    )}
                    {!openEvidenceCompliance && (
                      <Button
                        sx={{
                          color: "var(--text)",
                          borderRadius: 0.5,
                          width: 25,
                          height: 25,
                          minWidth: 10,
                          minHeight: 10,
                          p: 0,
                          m: 0,
                          fontSize: 10,
                          lineHeight: 1,
                          "&:hover": {
                            backgroundColor: "#0d9488",
                            color: "#ffffffff",
                          },
                        }}
                        onClick={() =>
                          handleChangeOpenEvidenceCompliance(true)
                        }>
                        <AddOutlinedIcon sx={{ fontSize: "16px" }} />
                      </Button>
                    )}{" "}
                  </Box>
                </Paper>
              )}
              {/* Right: Evidence & Compliance */}
              {openEvidenceCompliance && (
                <Paper sx={{ width: "49.5%", p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "Row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <Typography
                      fontWeight={500}
                      color='var(--text)'
                      fontSize={12}
                      mb={0.5}>
                      Evidence & Compliance{" "}
                    </Typography>{" "}
                    <Button
                      sx={{
                        color: "var(--text)",
                        borderRadius: 0.5,
                        width: 25,
                        height: 25,
                        minWidth: 10,
                        minHeight: 10,
                        p: 0,
                        m: 0,
                        fontSize: 10,
                        lineHeight: 1,
                        "&:hover": {
                          backgroundColor: "#0d9488",
                          color: "#ffffffff",
                        },
                      }}
                      onClick={() => handleChangeOpenEvidenceCompliance(false)}>
                      <RemoveOutlinedIcon sx={{ fontSize: "10px" }} />
                    </Button>
                  </Box>

                  <Typography
                    fontSize={10}
                    color='var(--subtext)'
                    fontWeight={400}
                    mb={1}>
                    Suggested Sources
                  </Typography>

                  {[
                    ["Cloud Infrastructure Best Practices", "92%"],
                    ["Security Certifications Guide", "88%"],
                    ["Pricing Strategy Framework", "75%"],
                  ].map(([title, score]) => (
                    <Box
                      key={title}
                      p={1}
                      mb={1}
                      border='1px solid var(--border)'
                      borderRadius={1}>
                      <Typography
                        color={"var(--text)"}
                        fontSize={12}>
                        {title}
                      </Typography>
                      <Typography
                        fontSize={11}
                        color='var(--subtext)'>
                        Match: {score}
                      </Typography>
                    </Box>
                  ))}

                  <Divider sx={{ my: 1 }} />

                  <Typography
                    fontSize={12}
                    color='green'>
                    ✔ All sources cited
                  </Typography>
                  <Typography
                    fontSize={12}
                    color='green'>
                    ✔ Within word limit
                  </Typography>
                </Paper>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Composer;
