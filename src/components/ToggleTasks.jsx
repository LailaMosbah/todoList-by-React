import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box } from "@mui/material";

export default function ToggleTasks() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box display="flex" justifyContent="center">
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        sx={{
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="done">Done</ToggleButton>
        <ToggleButton value="todo">ToDo</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
