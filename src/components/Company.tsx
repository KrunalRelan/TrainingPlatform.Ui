import React from "react";
import { TextField } from "@mui/material";

export const CompanyFields = ({ formData, handleChange }: any) => {
  return (
    <>
      <TextField
        fullWidth
        label="Name of Enquirer"
        name="enquirerName"
        margin="normal"
        value={formData.enquirerName || ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Area of Training"
        name="areaOfTraining"
        margin="normal"
        value={formData.areaOfTraining || ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Price Per Session"
        name="pricePerSession"
        type="number"
        margin="normal"
        value={formData.pricePerSession || ""}
        onChange={handleChange}
      />
    </>
  );
};
