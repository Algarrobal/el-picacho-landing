import { BrowserRouter, Routes, Route } from "react-router-dom";
import ElPicachoLanding from "./App";
import Picacheada from "./Picacheada";
import Expresiones from "./Expresiones"; // ✅ new

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElPicachoLanding />} />
        <Route path="/picacheada" element={<Picacheada />} />
        <Route path="/expresiones" element={<Expresiones />} /> {/* ✅ new */}
      </Routes>
    </BrowserRouter>
  );
}
