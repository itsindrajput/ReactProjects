import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Stack, Button, IconButton } from "@mui/material";

const MuiIcons = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <SendIcon color="primary" />
        <SendIcon color="secondary" />
        <SendIcon color="info" />
        <SendIcon color="success" />
        <SendIcon color="warning" />
        <SendIcon color="error" />
        <SendIcon color="disabled" />
        <SendIcon color="action" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <SendIcon fontSize="small" />
        <SendIcon fontSize="medium" />
        <SendIcon fontSize="large" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>

        <IconButton color="primary" aria-label="send">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <SendIcon sx={{ color: "purple", fontSize: 40 }} />
        <SendIcon sx={{ color: "orange", fontSize: 60 }} />
      </Stack>
    </>
  );
};
export default MuiIcons;
