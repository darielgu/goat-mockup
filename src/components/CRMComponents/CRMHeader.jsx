import { AutoAwesome, SupportAgent } from "@mui/icons-material";
import { Box, Chip, Typography, Button, Avatar } from "@mui/material";
import React from "react";
import logo from "../../assets/sfgoat.webp";
const CRMHeader = () => {
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
      {/* Header END */}
      {/* Buttons Start */}
      <Box
        sx={{
          borderBottom: "1px solid #3a3a3a",
          width: "100vw",
          height: 80,
          display: "flex",
        }}
      >
        <Box
          sx={{
            ml: 4,
            mr: 2,
          }}
          display={"flex"}
          alignItems={"center"}
        >
          <Button variant="outlined" color="primary">
            All Deals
          </Button>
        </Box>
        <Box sx={{ ml: 2, mr: 2 }} display={"flex"} alignItems={"center"}>
          <Button variant="outlined">Deal Risk</Button>
        </Box>
        <Box sx={{ ml: 2, mr: 2 }} display={"flex"} alignItems={"center"}>
          <Button variant="outlined">Sus Detection</Button>
        </Box>
        <Box sx={{ ml: 2, mr: 2 }} display={"flex"} alignItems={"center"}>
          <Button variant="outlined">Deal Risk</Button>
        </Box>
        <Box sx={{ ml: 2, mr: 2 }} display={"flex"} alignItems={"center"}>
          <Button variant="outlined">Deal Risk</Button>
        </Box>
      </Box>
      {/* Button end under this display cards/data */}
    </Box>
  );
};

export default CRMHeader;
