import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ElPicachoLanding from "./App";
import Expresiones from "./Expresiones";
import Picacheada from "./Picacheada";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ElPicachoLanding />} />
        <Route path="/expresiones" element={<Expresiones />} />
        <Route path="/picacheada" element={<Picacheada />} />
      </Routes>
    </Router>
  );
}
