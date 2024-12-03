import React from "react";
import { Box, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        mt: 5,
        p: 3,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography variant="body1">This is a dummy dashboard with sample data.</Typography>
    </Box>
  );
}
