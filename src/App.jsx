import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./presentation/pages/Home";
import Rooms from "./presentation/pages/Rooms";
import NotFound from "./presentation/pages/_NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/rooms" Component={Rooms} />

          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;