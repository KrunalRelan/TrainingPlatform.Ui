import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { IconButton, Box } from "@mui/material";
import { Brightness7, Brightness4 } from "@mui/icons-material";

export const ThemeToggle = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 1000,
        bgcolor: "background.paper",
        padding: 1,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <IconButton onClick={toggleTheme} aria-label="Toggle Theme">
        {mode === "light" ? (
          <Brightness4 sx={{ color: "#FFC107" }} /> // Moon icon for dark mode
        ) : (
          <Brightness7 sx={{ color: "#FFD700" }} /> // Sun icon for light mode
        )}
      </IconButton>
    </Box>
  );
};
