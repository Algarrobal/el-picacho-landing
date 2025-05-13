import { Routes, Route } from "react-router-dom";
import App from "./App";
import Expresiones from "./pages/Expresiones";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/expresiones" element={<Expresiones />} />
    </Routes>
  );
}
