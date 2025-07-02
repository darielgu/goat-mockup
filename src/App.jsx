import Dashboard from "./components/CRMDasboard/Dashboard";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import CreateDeal from "./components/CreateDeal/CreateDeal";
// * MATERIAL THEME START
const theme = createTheme({
  palette: {
    mode: "dark", // Enable dark mode for Material UI components
    primary: {
      main: "#4a90e2", // Vibrant blue for primary actions and highlights
      light: "#79b1f4",
      dark: "#0065ad",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#b0bec5", // Muted grey for secondary elements
      light: "#e2f1f8",
      dark: "#808e95",
      contrastText: "#1a1d2e",
    },
    error: {
      main: "#f44336", // Standard red for errors (seen in the triangle icon)
    },
    warning: {
      main: "#ffc107", // Orange/yellow for warnings (seen in 'Risk' column)
    },
    info: {
      main: "#2196f3", // Standard blue for info
    },
    success: {
      main: "#4caf50", // Green for success (seen in 'Value' column)
    },
    text: {
      primary: "#ffffff", // White for main text
      secondary: "#e0e0e0", // Slightly off-white for secondary text
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    background: {
      default: "#1a1d2e", // Very dark blue/black for the overall background
      paper: "#24293f", // Slightly lighter dark blue for cards/panels
    },
    divider: "rgba(255, 255, 255, 0.12)", // Subtle light divider lines
  },
  typography: {
    fontFamily: "Inter, sans-serif", // Clean sans-serif font
    h5: {
      fontWeight: 600,
      color: "#ffffff",
    },
    h6: {
      fontWeight: 500,
      color: "#ffffff",
    },
    body1: {
      color: "#e0e0e0",
    },
    body2: {
      color: "#b0bec5", // For more muted text
    },
    button: {
      textTransform: "none", // Keep button text as is, not all caps
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners for buttons
          padding: "8px 16px",
        },
        containedPrimary: {
          boxShadow: "none", // Remove default shadow for a flatter look
          "&:hover": {
            backgroundColor: "#0065ad", // Darken on hover
            boxShadow: "none",
          },
        },
        outlined: {
          borderColor: "rgba(255, 255, 255, 0.2)",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#4a90e2", // Primary blue background on hover
            color: "#ffffff", // White text on hover
            borderColor: "#4a90e2", // Make border match background for contained look
            // Optional: Add a subtle shadow to mimic contained button shadow
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          },
        },
        text: {
          color: "#e0e0e0",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Rounded corners for paper elements
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Deeper shadow
          backgroundColor: "#24293f", // Use paper background color
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            backgroundColor: "rgba(255, 255, 255, 0.08)", // Slightly transparent background
            "& fieldset": {
              borderColor: "transparent", // No visible border by default
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.2)", // Subtle border on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#4a90e2", // Primary color border on focus
            },
            "& .MuiInputBase-input": {
              color: "#ffffff", // Input text color
            },
          },
          "& .MuiInputLabel-root": {
            color: "#b0bec5", // Label color
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#e0e0e0", // Icon color
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
        },
      },
    },
  },
});
// * MATERIAL THEME END
function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Dashboard />
        <CreateDeal />
      </ThemeProvider>
    </>
  );
}

export default App;
