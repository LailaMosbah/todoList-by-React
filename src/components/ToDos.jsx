import React, { useState, useContext } from "react";
import ToDo from "./ToDo";
import Grid from "@mui/material/Grid";
import Add from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { v4 as uuidv4 } from "uuid";
import { TodosContext } from "../contexts/TodosContext";

export default function ToDos() {
  const { todos, setTodos } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState({
    id: "",
    title: "",
    details: "",
    isComplete: false,
  });

  const todosJsx = todos.map((t) => {
    return <ToDo key={t.id} todo={t} />;
  });

  function handleAddClicked() {
    const newTodoInput = {
      id: uuidv4(),
      title: newTodo.title,
      details: newTodo.details,
      isComplete: false,
    };
    setTodos([...todos, newTodoInput]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodoInput]));

    setNewTodo({ id: "", title: "", details: "", isComplete: false });
  }
  return (
    <>
      <div>{todosJsx}</div>
      <div>
        <Grid container spacing={2} alignItems="center">
          <Grid size={8}>
            <TextField
              id="task-name"
              label="Task Name"
              variant="filled"
              fullWidth
              sx={{ "& .MuiFilledInput-root": { fontSize: "1rem" } }}
              value={newTodo.title}
              onChange={(e) =>
                setNewTodo({ ...newTodo, title: e.target.value })
              }
            />
          </Grid>
          <Grid size={4}>
            <Button
              fullWidth
              sx={{ height: "56px", fontSize: "1.2rem" }}
              variant="contained"
              onClick={handleAddClicked}
            >
              Add
            </Button>
          </Grid>
          <Grid size={8}>
            <TextField
              id="task-description"
              label="Task Description"
              variant="filled"
              sx={{ width: "100%", fontSize: "1.5em" }}
              value={newTodo.details}
              onChange={(e) =>
                setNewTodo({ ...newTodo, details: e.target.value })
              }
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
