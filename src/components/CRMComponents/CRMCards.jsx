import { Grid3x3 } from "@mui/icons-material";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  Paper,
  Typography,
  boxClasses,
} from "@mui/material";
import React from "react";

const CRMCard = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" }, // Responsive grid
        // Converted from gap-6

        marginBottom: "32px", // Converted from mb-8
      }}
    >
      <Paper
        sx={{
          padding: "24px", // Converted from p-6
          display: "flex",
          width: 300,
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Total Pipeline
        </Typography>
        <Typography variant="h5">$455K</Typography>
      </Paper>
      <Paper
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: 300,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Open Deals
        </Typography>
        <Typography variant="h5" sx={{ color: "primary.main" }}>
          2 Deals
        </Typography>
      </Paper>
      <Paper
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: 300,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Close Rate
        </Typography>
        <Typography variant="h5" sx={{ color: "success.main" }}>
          73%
        </Typography>
      </Paper>
      <Paper
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: 300,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Growth
        </Typography>
        <Typography variant="h5" sx={{ color: "primary.main" }}>
          +15%
        </Typography>
      </Paper>
    </Box>
  );
};

export default CRMCard;
