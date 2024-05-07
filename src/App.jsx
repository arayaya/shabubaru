import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QueueReceptionPage from "./QueueReceptionPage";
import SummaryPage from "./SummaryPage";
import "../src/assets/css/DBHelvethaicaMonXCond.ttf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="main" replace />} />
        <Route path="main" element={<QueueReceptionPage />} />
        <Route path="summary" element={<SummaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
