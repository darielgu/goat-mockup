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
      <InputForm />
    </>
  );
};

export default CreateDeal;
