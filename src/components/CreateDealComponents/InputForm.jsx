import { AutoAwesome, Business, Person } from "@mui/icons-material";
import {
  Box,
  Button,
  Input,
  Paper,
  Typography,
  Chip,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import InputHeader from "./InputHeader";

const InputForm = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      {/*  Header Component */}
      <InputHeader />
      {/* Beginning of Deal Description Bubble */}
      <Card sx={{ m: 3, width: 1000 }}>
        <CardHeader
          avatar={<Business color="primary" />}
          title="Deal Information"
          subheader="Basic details about the deal opportunity"
        />
        <CardContent sx={{ ml: 4 }}>
          <Grid container spacing={3}>
            <Grid>
              <TextField label="Company Name" />
            </Grid>
            <Grid>
              <TextField label="Deal Name" />
            </Grid>
            <Grid>
              <TextField label="Value" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* END Deal Description  */}
      {/* Contact info Description bubble */}
      <Card sx={{ m: 3, width: 1000 }}>
        <CardHeader
          avatar={<Person />}
          title="Contact Information"
          subheader="Enter information on the main point of contact"
        />
        <CardContent sx={{ ml: 4 }}>
          <Grid container spacing={3}>
            <Grid>
              <TextField label="Expected Close Date" />
            </Grid>
            <Grid>
              <TextField label="Assigned Sales Rep" />
            </Grid>
          </Grid>
        </CardContent>
        {/* Description Text Bubble */}
      </Card>
      <Card sx={{ m: 3, width: 1000 }}>
        <CardHeader
          avatar={<Person />}
          title="Contact Information"
          subheader="Enter information on the main point of contact"
        />
        <CardContent sx={{ ml: 4 }}>
          <Grid container spacing={3}>
            <Grid>
              <TextField label="Expected Close Date" />
            </Grid>
            <Grid>
              <TextField label="Assigned Sales Rep" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ m: 3, pl: 5, width: 400 }}>
        <CardHeader
          avatar={<Person />}
          title="Contact Information"
          subheader="Enter information on the main point of contact"
        />
        <CardContent sx={{ ml: 4 }}>
          <Grid container spacing={3}>
            <Grid>
              <TextField label="Expected Close Date" />
            </Grid>
            <Grid>
              <TextField label="Assigned Sales Rep" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InputForm;
