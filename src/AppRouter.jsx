import { BrowserRouter, Routes, Route } from "react-router-dom";
import ElPicachoLanding from "./App";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElPicachoLanding />} />
      </Routes>
    </BrowserRouter>
  );
}
