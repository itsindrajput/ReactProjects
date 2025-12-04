import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const handleChange = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
  };
  return (
    <Box width="250px" margin="20px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
        <MenuItem value="FR">France</MenuItem>
        <MenuItem value="DE">Germany</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
