import React from "react";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <Typography
      variant="h3"
      component="h1"
      align="center"
      sx={{ fontWeight: "bold", color: "primary.main" }}
    >
      My Tasks
    </Typography>
  );
}
