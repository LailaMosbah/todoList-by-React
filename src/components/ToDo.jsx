import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

export default function ToDo({ todo, handleCheck }) {
  function checkBtnClick() {
    handleCheck(todo.id);
  }

  return (
    <Card
      sx={{
        minWidth: 275,
        boxShadow: 3,
        borderRadius: 2,
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
        my: 2,
        bgcolor: todo.isComplete ? "#f5f5f5" : "#fff", // light background for done
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          fontWeight="bold"
          sx={{
            color: todo.isComplete ? "text.disabled" : "black",
            textDecoration: todo.isComplete ? "line-through" : "none",
          }}
        >
          {todo.title}
        </Typography>
        <Typography
          sx={{
            color: todo.isComplete ? "text.disabled" : "text.secondary",
            fontSize: 14,
          }}
        >
          {todo.details}
        </Typography>
      </CardContent>

      <CardActions>
        {todo.isComplete === false ? (
          <IconButton
            aria-label="done"
            sx={{
              color: "#4CAF50",
              "&:hover": { bgcolor: "rgba(76, 175, 80, 0.1)" },
            }}
            onClick={checkBtnClick}
          >
            <CheckIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="not-done"
            sx={{
              color: "#F44336",
              "&:hover": { bgcolor: "rgba(244, 67, 54, 0.1)" },
            }}
            onClick={checkBtnClick}
          >
            <CloseIcon />
          </IconButton>
        )}

        <IconButton
          aria-label="edit"
          sx={{
            color: "#1976D2",
            "&:hover": { bgcolor: "rgba(25, 118, 210, 0.1)" },
          }}
        >
          <EditIcon />
        </IconButton>

        <IconButton
          aria-label="delete"
          sx={{
            color: "#D32F2F",
            "&:hover": { bgcolor: "rgba(211, 47, 47, 0.1)" },
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
