import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

type DashboardProps = {
  module?: string; // Optional prop
  userName: string;
};

export default function Dashboard({ module = "trainer", userName }: DashboardProps) {
  const dataForModules = {
    trainer: { metrics: [], chartData: { labels: [], datasets: [] }, quickActions: [] },
    company: { metrics: [], chartData: { labels: [], datasets: [] }, quickActions: [] },
    hotel: { metrics: [], chartData: { labels: [], datasets: [] }, quickActions: [] },
  };

  const currentData = dataForModules[module] || dataForModules["trainer"];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome back, {userName}!
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Module: {module ? module.charAt(0).toUpperCase() + module.slice(1) : "Unknown"}
      </Typography>

      {/* Add other dashboard content */}
    </Box>
  );
}
