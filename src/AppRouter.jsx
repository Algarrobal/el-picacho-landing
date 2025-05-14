import { BrowserRouter, Routes, Route } from "react-router-dom";
import ElPicachoLanding from "./App";
import Picacheada from "./Picacheada"; // ✅ Step 1: Reintroduce the import

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElPicachoLanding />} />
        {/* 👇 Don't re-add the route to /picacheada just yet */}
      </Routes>
    </BrowserRouter>
  );
}
