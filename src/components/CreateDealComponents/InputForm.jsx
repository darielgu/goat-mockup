import { AutoAwesome, Business, Person } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";
import InputHeader from "./InputHeader";

const InputForm = () => {
  return (
    <Box
      sx={{
        height: "100vh",

        minHeight: "fit-content",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      {/*  Header Component */}
      <InputHeader />

      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Box
          sx={{
            ml: 6,
            display: "flex",
            flexDirection: "column",
            width: "60%",
            mt: 3,
          }}
        >
          {/* START OF FIRST CARD */}
          <Card sx={{ m: 3, width: "90%" }}>
            <CardHeader
              avatar={<Business color="primary" />}
              title="Deal Information"
              subheader="Basic details about the deal opportunity"
            />
            <CardContent sx={{ ml: 4 }}>
              <Grid container spacing={3} height={300}>
                <Grid>
                  <TextField width={200} label="Company Name" />
                </Grid>
                <Grid>
                  <TextField label="Deal Name" />
                </Grid>
                <Grid>
                  <TextField label="Value" />
                </Grid>
                <Grid>
                  <TextField label="Stage" />
                </Grid>
                <TextField
                  label="Description"
                  fullWidth={true}
                  multiline
                  sx={{ mr: 2 }}
                  rows={5}
                />
              </Grid>
            </CardContent>
          </Card>
          {/* END FIRST CARD  */}
        </Box>
        {/* Right-Side Card START */}
        <Card sx={{ width: "30%", height: 410, mt: 6 }}>
          <CardHeader
            avatar={<Person />}
            title="Contact Information"
            subheader="Enter information on the main point of contact"
          />
          <CardContent sx={{ mt: 2 }}>
            <Grid sx={{ width: "100%" }}>
              <TextField sx={{ mb: 2 }} fullWidth={true} label="Contact Name" />
              <TextField
                sx={{ mb: 2 }}
                fullWidth={true}
                label="Contact Email"
              />
              <TextField
                sx={{ mb: 2 }}
                fullWidth={true}
                label="Contact Slack"
              />

              <TextField
                sx={{ mb: 2 }}
                fullWidth={true}
                label="Contact Number"
              />
            </Grid>
          </CardContent>
        </Card>
        {/* Right Side Card END */}
      </Box>
      {/* Second Card Information START*/}
      <Card
        sx={{
          m: 3,
          ml: 8.5,
          mr: 4,
          width: "89%",
        }}
      >
        <CardHeader
          avatar={<CreateIcon />}
          title="Additional Information"
          subheader="Reccomended optional details "
        />
        <CardContent sx={{ ml: 4 }}>
          <Grid container spacing={5}>
            <Grid sx={{ width: "20%" }}>
              <TextField
                fullWidth={true}
                label="Product/Service Line Item(s)"
              />
            </Grid>
            <Grid sx={{ width: "20%" }}>
              <TextField fullWidth={true} label="Contract Term" />
            </Grid>
            <Grid sx={{ width: "20%" }}>
              <TextField fullWidth={true} label="Tag(s)" />
            </Grid>
            <Grid>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="EST Close Date" />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* Second Card Information END */}
    </Box>
  );
};

export default InputForm;
