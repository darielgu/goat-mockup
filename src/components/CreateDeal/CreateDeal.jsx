import React from "react";
import Header from "../DefaultComponents/Header";
import SideBar from "../SideBar/SideBar";
import CRMHeader from "../CRMComponents/CRMHeader";
import { Box } from "@mui/material";
import InputForm from "../CreateDealComponents/InputForm";
// Whole rendered page for creating a deal --- Route here when user clicks create a new deal

const CreateDeal = () => {
  return (
    <>
      {/* BOX that holds all components */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex", // Arrange children (SideBar and main content) in a row
          flexDirection: "row",
          backgroundColor: "background.default",
          width: "100%", // Ensure it takes full width
        }}
      >
        <SideBar /> {/* The sidebar component */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Arrange header, cards, and data in a column
            flexGrow: 1, // Allow this column to take up remaining horizontal space
            overflowX: "hidden", // Prevent horizontal scroll from inner elements
          }}
        >
          {/* The header component */}
          <Header />
          {/* Container for input form */}
          <InputForm />
        </Box>
      </Box>
    </>
  );
};

export default CreateDeal;
