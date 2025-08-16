import { Container, Stack, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";
import Header from "./components/Header";
import ToDos from "./components/ToDos";
import { TodosContext } from "./contexts/TodosContext";
// import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "roboto",
  },
});

// // const initialTodos = [
//   {
//     id: uuidv4(),
//     title: "read a book",
//     details: " hoorakl dafkj asdkf",
//     isComplete: false,
//   },
//   {
//     id: uuidv4(),
//     title: "cooking",
//     details: " hoorakl dafkj asdkf",
//     isComplete: false,
//   },
//   {
//     id: uuidv4(),
//     title: " a project",
//     details: " hoorakl dafkj asdkf",
//     isComplete: false,
//   },
//   {
//     id: uuidv4(),
//     title: " react",
//     details: " hoorakl dafkj asdkf",
//     isComplete: false,
//   },
// ];

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <TodosContext.Provider value={{ todos, setTodos }}>
        <>
          <Container maxWidth="sm" sx={{ py: 4, maxHeight: "100vh" }}>
            <Stack spacing={3}>
              <Header />
              <Divider />
              <ToDos />
            </Stack>
          </Container>
        </>
      </TodosContext.Provider>
    </ThemeProvider>
  );
}

export default App;
