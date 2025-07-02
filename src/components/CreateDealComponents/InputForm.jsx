import { AutoAwesome } from "@mui/icons-material";
import {
  Box,
  Button,
  Input,
  Paper,
  Typography,
  Chip,
  TextField,
} from "@mui/material";
import React from "react";

const InputForm = () => {
  return (
    // Container that holds all of the items in the Input form page after header
    <Box sx={{ height: "80vh" }}>
      {/* Button to redirect to dashboard page */}
      <Button variant="contained" sx={{ m: 2.5 }}>
        Back to all deals
      </Button>
      <Box sx={{ height: "80%", m: 8, mt: 4 }}>
        <Paper sx={{ height: "100%", overflowY: "hidden", p: 3 }}>
          {/* Box holding paper label and chip Icon START*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ p: 1 }}>
              Enter Deal Information
            </Typography>
            <Chip
              label="Congrats on a new lead!"
              sx={{ ml: 2, backgroundColor: "#4fc3f7", color: "white" }}
              size="lg"
              icon={<AutoAwesome sx={{ fontSize: 16, color: "white" }} />}
            ></Chip>
          </Box>
          {/* Box holding paper label and chip icon END */}

          {/* Box holding left side input boxs START*/}
          <Box>
            <TextField id="deal-name" label="Deal Name" variant="outlined" />
            <TextField
              id="company-name"
              label="Company Name"
              variant="outlined"
            />
          </Box>

          {/* Box holding left side input boxs END*/}
        </Paper>
      </Box>
    </Box>
  );
};

export default InputForm;
