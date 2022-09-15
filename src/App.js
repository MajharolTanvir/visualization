import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import HighChart from "./Components/Dashboard/HighChart/HighChart";
import ReChart from "./Components/Dashboard/ReChart/ReChart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}>
          <Route index element={<ReChart></ReChart>}></Route>
          <Route path="highChart" element={<HighChart></HighChart>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
