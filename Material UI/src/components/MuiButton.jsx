import { Button, Stack, ButtonGroup } from "@mui/material";

const MuiButton = () => {
  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="success" disabled>
            Disabled
          </Button>
        </Stack>

        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
          <Button
            variant="contained"
            size="small"
            href="https://www.google.com"
          >
            Link Button
          </Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" disableElevation>
            Disable Elevation
          </Button>
          <Button variant="contained" disableRipple>
            Disable Ripple
          </Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <ButtonGroup
            variant="contained"
            orientation="horizontal"
            size="small"
            color="secondary"
          >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default MuiButton;
