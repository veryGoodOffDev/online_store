import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar/>
      <AppRouter/>
    </>
  );
}

export default App;
