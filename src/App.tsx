import "./App.css";
import { Button } from "./shared/ui";
import IconUser from "./assets/icons/user.svg?react";

function App() {
  return (
    <>
      <Button variant="secondary" size="small" endIcon={IconUser} disabled>
        Кнопка
      </Button>
    </>
  );
}

export default App;
