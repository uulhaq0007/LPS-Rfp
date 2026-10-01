import { createTheme } from "@mui/material/styles";

// figma design reference:
// https://www.figma.com/make/q61coH2dEEtXBtVTWF05DH/RFP-Pro-Vendor-Response-Portal?node-id=0-1&p=f&t=EQ6XhPIGPFTFy8D3-0&fullscreen=1

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue color matching the design
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    textColor: {
      main: "var(--text)",
      secondary: "var(--subtext)",
    },
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        },
        "#root": {
          margin: 0,
          padding: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border)",
        },
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
            padding: "8px 20px",
            fontWeight: 600,
            transition: "0.2s ease-in-out",

            "&:hover": {
              boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
            },

            "&:active": {
              transform: "scale(0.97)",
              boxShadow: "none",
            },

            "&:disabled": {
              opacity: 0.5,
              cursor: "not-allowed",
            },
          },

          // PRIMARY BUTTON STYLING
          containedPrimary: {
            backgroundColor: "#1976d2",
            color: "#fff",

            "&:hover": {
              backgroundColor: "#1565c0",
            },

            "&:active": {
              backgroundColor: "#0d47a1",
            },
          },

          // SECONDARY BUTTON STYLING
          containedSecondary: {
            backgroundColor: "#f50057",
            color: "#fff",

            "&:hover": {
              backgroundColor: "#c51162",
            },

            "&:active": {
              backgroundColor: "#880e4f",
            },
          },

          outlinedPrimary: {
            borderColor: "#1976d2",
            color: "#1976d2",

            "&:hover": {
              backgroundColor: "rgba(25,118,210,0.08)",
              borderColor: "#1565c0",
            },

            "&:active": {
              backgroundColor: "rgba(21,101,192,0.16)",
            },
          },

          outlinedSecondary: {
            borderColor: "#f50057",
            color: "#f50057",

            "&:hover": {
              backgroundColor: "rgba(245,0,87,0.08)",
              borderColor: "#c51162",
            },

            "&:active": {
              backgroundColor: "rgba(197,17,98,0.16)",
            },
          },
        },
      },
    },
  },
});

export default theme;
