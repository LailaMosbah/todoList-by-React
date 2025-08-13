import { Container, Stack, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";
import Header from "./components/Header";
import ToggleTasks from "./components/ToggleTasks";
import ToDos from "./components/ToDos";

const theme = createTheme({
  typography: {
    fontFamily: "roboto",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Container maxWidth="sm" sx={{ py: 4 }}>
          <Stack spacing={3}>
            <Header />
            <Divider />
            <ToggleTasks />
            <ToDos />
          </Stack>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
