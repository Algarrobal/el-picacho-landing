import { Routes, Route } from "react-router-dom";
import ElPicachoLanding from "./App";
// IMPORTANT: Comment out the second route for now
// import Picacheada from "./Picacheada";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ElPicachoLanding />} />
      {/* <Route path="/picacheada" element={<Picacheada />} /> */}
    </Routes>
  );
}
