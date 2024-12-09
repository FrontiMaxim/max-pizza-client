import "./App.css";
import { Button } from "./shared/ui";
import IconUser from "./assets/icons/user.svg?react";

function App() {
  return (
    <>
      <Button
        color="primary"
        variant="contained"
        size="medium"
        endIcon={IconUser}
      >
        Кнопка
      </Button>
    </>
  );
}

export default App;
