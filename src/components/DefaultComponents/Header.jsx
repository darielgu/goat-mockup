import React from "react";
import { AutoAwesome, SupportAgent } from "@mui/icons-material";
import { Box, Chip, Typography, Button, Avatar } from "@mui/material";
import logo from "../../assets/sfgoat.webp";
const Header = () => {
  return (
    <Box>
      {/* Header START */}
      <Box
        sx={{
          borderBottom: "1px solid #3a3a3a",
          width: "100vw",
          height: 65,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center", ml: 3 }}>
            Goatforce
          </Typography>
          <Avatar src={logo} sx={{ ml: 2 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
