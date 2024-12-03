import React from "react";
import { TextField } from "@mui/material";

export const TrainerFields = ({ formData, handleChange }: any) => {
  return (
    <>
      <TextField
        fullWidth
        label="Experience (Years)"
        name="experience"
        type="number"
        margin="normal"
        value={formData.experience || ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Specialization"
        name="specialization"
        margin="normal"
        value={formData.specialization || ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Price Per Class"
        name="pricePerClass"
        type="number"
        margin="normal"
        value={formData.pricePerClass || ""}
        onChange={handleChange}
      />
    </>
  );
};
