import React from "react";
import { TextField } from "@mui/material";

export const HotelFields = ({ formData, handleChange }: any) => {
  return (
    <>
      <TextField
        fullWidth
        label="Maximum Number of Pax"
        name="maxPax"
        type="number"
        margin="normal"
        value={formData.maxPax || ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Total Rooms"
        name="totalRooms"
        type="number"
        margin="normal"
        value={formData.totalRooms || ""}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Facilities"
        name="facilities"
        margin="normal"
        value={formData.facilities || ""}
        onChange={handleChange}
      />
    </>
  );
};
