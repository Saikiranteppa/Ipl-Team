import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Team from "./component/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/team/:id" Component={Team}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
