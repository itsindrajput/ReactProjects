import React from "react";
import { Typography } from "@mui/material";
import { Tty } from "@mui/icons-material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1"> H1 Heading </Typography>
      <Typography variant="h2"> H2 Heading </Typography>
      <Typography variant="h3"> H3 Heading </Typography>
      <Typography variant="h4" gutterBottom>
        H4 Heading
      </Typography>
      <Typography variant="h4" component="h1">
        {" "}
        H4 Heading{" "}
      </Typography>
      <Typography variant="h5"> H5 Heading </Typography>
      <Typography variant="h6"> H6 Heading </Typography>
      <Typography variant="subtitle1"> Subtitle 1 </Typography>
      <Typography variant="subtitle2"> Subtitle 2 </Typography>
      <Typography variant="body1">
        {" "}
        Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      </Typography>
      <Typography variant="body2">
        {" "}
        Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      </Typography>
      <Typography variant="caption"> Caption Text </Typography>
      <Typography variant="overline"> Overline Text </Typography>
      <Typography variant="button"> Button Text </Typography>
      <Typography variant="inherit"> Inherit Text </Typography>
      <Typography variant="srOnly"> SR Only Text </Typography>
      <Typography variant="paragraph"> Paragraph Text </Typography>
      <Typography variant="div"> Div Text </Typography>
      <Typography variant="span"> Span Text </Typography>
    </div>
  );
};

export default MuiTypography;
