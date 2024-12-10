import "./App.css";
import { Button, TextField } from "./shared/ui";
import IconUser from "./assets/icons/user.svg?react";

function App() {
  return (
    <>
      <Button variant="primary" size="small" endIcon={IconUser}>
        Кнопка
      </Button>
      <TextField title="Заголовок" placeholder="nernferp" name="name" />
    </>
  );
}

export default App;
