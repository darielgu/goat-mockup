import {
  Analytics,
  Contacts,
  Dashboard,
  EditDocument,
  Money,
  People,
} from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
const SideBar = () => {
  return (
    <Box
      className="sidebar-container"
      sx={{
        width: 280,
        backgroundColor: "#1a1a1a",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #3a3a3a",
      }}
    >
      {/* Top Logo of SideBar */}
      <Box sx={{ mt: 0, mb: 2 }}>
        <Typography variant="h6" sx={{ textAlign: "center", pt: 2 }}>
          CRM Copilot
        </Typography>
      </Box>

      {/* Create Deal Button */}
      <Box sx={{ p: 2.3, borderTop: "1px solid #3a3a3a" }}>
        <Button sx={{ width: "100%" }} variant="outlined">
          Create Deal
        </Button>
      </Box>
      {/* Main Navigation */}
      <List sx={{ borderTop: "1px solid #3a3a3a" }}>
        {/* Navigation to Dashoard */}
        <ListItem>
          <ListItemButton
            sx={{ borderRadius: 1, mb: 1 }}
            onClick={() => {
              console.log("route to dashboard");
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              {" "}
              <Dashboard />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>
        {/* Navigation to Analytics */}
        <ListItem>
          <ListItemButton
            sx={{ borderRadius: 1, mb: 1 }}
            onClick={() => {
              console.log("route to analytics");
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              {" "}
              <Analytics />
            </ListItemIcon>
            <ListItemText>Analytics</ListItemText>
          </ListItemButton>
        </ListItem>
        {/* Navigation to Team */}
        <ListItem>
          <ListItemButton
            sx={{ borderRadius: 1, mb: 1 }}
            onClick={() => {
              console.log("route to Team");
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              {" "}
              <People />
            </ListItemIcon>
            <ListItemText>Team</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      {/* Secondary Navigation Section for different topic */}
      <Box sx={{ mt: 5, mb: 1, borderTop: "1px solid #3a3a3a" }}>
        <Typography sx={{ mt: 2, px: 4, color: "secondary" }}>
          Documents
        </Typography>
      </Box>
      <List>
        {/* Navigation to reports */}
        <ListItem>
          <ListItemButton onClick={() => console.log("route to reports")}>
            <ListItemIcon sx={{ color: "white" }}>
              <EditDocument />
            </ListItemIcon>
            <ListItemText>Reports</ListItemText>
          </ListItemButton>
        </ListItem>
        {/* Navigation to contacts */}
        <ListItem>
          <ListItemButton onClick={() => console.log("route to contacts")}>
            <ListItemIcon sx={{ color: "white" }}>
              <Contacts />
            </ListItemIcon>
            <ListItemText>Contacts</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      {/* <CardAlert sx={{ mt: 8, pt: 8 }} /> */}
    </Box>
  );
};

export default SideBar;
