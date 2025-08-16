import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box } from "@mui/material";

export default function ToggleTasks({ setFilter }) {
  const [typeTaskDisplay, setTypeTaskDisplay] = React.useState("all");

  const handleTypeToShow = (event) => {
    const newValue = event.target.value;
    setTypeTaskDisplay(newValue);
    console.log(newValue);
    setFilter(newValue);
  };

  return (
    <Box display="flex" justifyContent="center">
      <ToggleButtonGroup
        value={typeTaskDisplay}
        exclusive
        onChange={(e) => handleTypeToShow(e)}
        sx={{
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="non-complete">ToDo</ToggleButton>
        <ToggleButton value="complete">Done</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
