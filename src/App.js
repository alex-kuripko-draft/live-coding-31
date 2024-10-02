import './App.css';
import {Container} from "@mui/material";
import UserList from "./components/user-list";

function App() {
  return (
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        <UserList />
      </Container>
  );
}

export default App;
