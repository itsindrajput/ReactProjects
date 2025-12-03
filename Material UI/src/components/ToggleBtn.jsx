import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { ToggleButtonGroup, ToggleButton, Stack } from "@mui/material";

const ToggleBtn = () => {
  const [formats, setFormats] = useState([]);
  return (
    <>
      <Stack direction="row" spacing={4}>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={(e, value) => setFormats(value)}
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};

export default ToggleBtn;
