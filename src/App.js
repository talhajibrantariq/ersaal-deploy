import "./App.css";
import MainRouter from "./Routes/MainRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <MainRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
