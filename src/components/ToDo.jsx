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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";

export default function ToDo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    title: todo.title,
    details: todo.details,
  });

  //////// Buttons Actions
  // Check Button
  function checkBtnClick() {
    const toDosUpdated = todos.map((t) =>
      t.id === todo.id ? { ...t, isComplete: !t.isComplete } : t
    );

    setTodos(toDosUpdated);
    localStorage.setItem("todos", JSON.stringify(toDosUpdated));
  }
  // Delete Button
  function deleteBtnClick() {
    const toDosUpdated = todos.filter((t) => {
      return t.id != todo.id;
    });
    setTodos(toDosUpdated);
    localStorage.setItem("todos", JSON.stringify(toDosUpdated));

    setOpenDeleteModal(false);
  }
  // Edit Button
  function editBtnClick(event) {
    event.preventDefault();
    const toDosUpdated = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, title: editedTodo.title, details: editedTodo.details };
      }
      return t;
    });
    setTodos(toDosUpdated);
    localStorage.setItem("todos", JSON.stringify(toDosUpdated));

    setOpenEditModal(false); // close modal after editing
  }

  return (
    <>
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
            onClick={() => setOpenEditModal(true)}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            aria-label="delete"
            sx={{
              color: "#D32F2F",
              "&:hover": { bgcolor: "rgba(211, 47, 47, 0.1)" },
            }}
            onClick={() => setOpenDeleteModal(true)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>

      {/******* Dialog For Delete ********/}
      <Dialog
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableEnforceFocus
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            color: "#D32F2F",
            "&:hover": { bgcolor: "rgba(211, 47, 47, 0.1)" },
          }}
        >
          Delete the task {todo.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you click on "Yes, Delete it" , you can't retrieve the task again
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenDeleteModal(false)}
            sx={{
              color: "#D32F2F",
              "&:hover": { bgcolor: "rgba(211, 47, 47, 0.1)" },
            }}
          >
            Close
          </Button>
          <Button
            onClick={deleteBtnClick}
            autoFocus
            sx={{
              color: "#D32F2F",
              "&:hover": { bgcolor: "rgba(211, 47, 47, 0.1)" },
            }}
          >
            Yes, Delete it
          </Button>
        </DialogActions>
      </Dialog>

      {/******* Dialog For Edit ********/}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        disableEnforceFocus
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <form onSubmit={editBtnClick} id="edit-task">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name of Task"
              type="text"
              fullWidth
              variant="standard"
              value={editedTodo.title}
              onChange={(e) =>
                setEditedTodo({ ...editedTodo, title: e.target.value })
              }
            />
            <TextField
              margin="dense"
              id="details"
              name="details"
              label="Description of Task"
              type="text"
              fullWidth
              variant="standard"
              value={editedTodo.details}
              onChange={(e) =>
                setEditedTodo({ ...editedTodo, details: e.target.value })
              }
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditModal(false)}>Cancel</Button>
          <Button type="submit" form="edit-task">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
