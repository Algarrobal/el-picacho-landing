import { BrowserRouter, Routes, Route } from "react-router-dom";
import ElPicachoLanding from "./App";
import Picacheada from "./Picacheada";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElPicachoLanding />} />
        <Route path="/picacheada" element={<Picacheada />} />
      </Routes>
    </BrowserRouter>
  );
}
