import React from "react";
import { Paper, Box, TextField, Button, Typography } from "@mui/material";
const CRMData = () => {
  return (
    <>
      <Paper sx={{ padding: "24px" }}>
        {" "}
        {/* Converted from p-6 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px", // Converted from mb-4
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search deals or users..."
            size="small"
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <SearchIcon />
            //     </InputAdornment>
            //   ),
            // }}
            sx={{ width: "33.333%" }} // Converted from w-1/3
          />
          <Box
            sx={{
              display: "flex",
              gap: "8px", // Converted from space-x-2
            }}
          >
            <Button variant="contained" color="primary">
              All Deals
            </Button>
            <Button variant="outlined" color="primary">
              Open
            </Button>
            <Button variant="outlined" color="primary">
              Closed
            </Button>
            {/* New button with custom sx prop */}
            <Button
              variant="contained"
              sx={{
                bgcolor: "grey",
                "&:hover": { bgcolor: "white", color: "black" },
              }}
            >
              Custom SX Button
            </Button>
          </Box>
        </Box>
        {/* Table Header */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "16px", // Converted from gap-4
            paddingY: "12px", // Converted from py-3
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Deal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rep
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stage
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Value
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Risk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last Activity
          </Typography>
        </Box>
        {/* Table Rows - Example Data */}
        {[
          {
            deal: "Enterprise SaaS Platform - Acme Corp",
            rep: "Sarah Chen",
            stage: "Negotiation",
            value: "$120,000",
            risk: "Low",
            activity: "2 days ago",
          },
          {
            deal: "Marketing Automation Suite - TechFlow",
            rep: "Mike Rodriguez",
            stage: "Proposal",
            value: "$85,000",
            risk: "Medium",
            activity: "1 day ago",
          },
          {
            deal: "Data Analytics Platform - InnovateCo",
            rep: "Emily Watson",
            stage: "Discovery",
            value: "$200,000",
            risk: "High",
            activity: "Today",
          },
          {
            deal: "CRM Integration - StartupXYZ",
            rep: "David Kim",
            stage: "Qualified",
            value: "$40,000",
            risk: "Medium",
            activity: "2 days ago",
          },
        ].map((row, index) => (
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "16px", // Converted from gap-4
              paddingY: "12px", // Converted from py-3
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography variant="body1">{row.deal}</Typography>
            <Typography variant="body1">{row.rep}</Typography>
            <Typography variant="body1">{row.stage}</Typography>
            <Typography
              variant="body1"
              sx={{
                color: row.value.includes("$120,000")
                  ? "success.main"
                  : "text.primary",
              }}
            >
              {row.value}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color:
                  row.risk === "Medium"
                    ? "warning.main"
                    : row.risk === "High"
                    ? "error.main"
                    : "success.main",
              }}
            >
              {row.risk}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">{row.activity}</Typography>
              <Button variant="contained" color="primary" size="small">
                Follow Up
              </Button>
            </Box>
          </Box>
        ))}
      </Paper>
    </>
  );
};

export default CRMData;
