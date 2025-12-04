import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Stack spacing={4} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack spacing={4} direction="row" mt={4}>
        <TextField label="Small secondary" size="small" color="secondary" />
        <TextField
          label="Password"
          type="password"
          size="small"
          color="success"
        />
        <TextField
          label="Password"
          type="password"
          size="small"
          color="error"
          helperText="Do not share your password"
          required
        />

        <TextField
          type="password"
          label="Password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not share your password"}
          required
        />

        <TextField
          label="Read Only"
          InputProps={{ readOnly: true }}
          size="small"
          color="info"
        />
      </Stack>
      <Stack spacing={4} direction="row" mt={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </>
  );
};

export default MuiTextField;
