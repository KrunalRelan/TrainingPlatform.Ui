import React, { createContext, useMemo, useState, ReactNode } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

type ThemeMode = "light" | "dark";

interface ThemeContextProps {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: "light",
  toggleTheme: () => {},
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: "#f9f9f9",
                  paper: "#ffffff",
                },
                text: {
                  primary: "#000000", // Black for light mode
                  secondary: "#666666",
                },
                primary: {
                  main: "#1976d2", // Blue for primary buttons
                },
              }
            : {
                background: {
                  default: "#0D1117", // Dark navy for background
                  paper: "#161B22", // Slightly lighter dark for cards/forms
                },
                text: {
                  primary: "#FFFFFF", // White text
                  secondary: "#9DA5B4", // Light gray for secondary text
                },
                primary: {
                  main: "#1E90FF", // Sky blue for primary buttons
                },
                secondary: {
                  main: "#5865F2", // Light purple for accents
                },
              }),
        },
        typography: {
          allVariants: {
            color: mode === "light" ? "#000000" : "#FFFFFF",
          },
        },
        components: {
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                "& fieldset": {
                  borderColor: mode === "light" ? "#CCCCCC" : "#2D333B",
                },
                "&:hover fieldset": {
                  borderColor: mode === "light" ? "#1976d2" : "#1E90FF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: mode === "light" ? "#1976d2" : "#1E90FF",
                },
              },
              input: {
                color: mode === "light" ? "#000000" : "#FFFFFF", // Text color in inputs
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none", // Prevent all caps
                color: mode === "light" ? "#FFFFFF" : "#1E90FF",
                backgroundColor: mode === "light" ? "#1976d2" : "#1E90FF",
                "&:hover": {
                  backgroundColor: mode === "light" ? "#1565c0" : "#4682B4",
                },
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                color: mode === "light" ? "#000000" : "#FFFFFF", // Text for typography
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
