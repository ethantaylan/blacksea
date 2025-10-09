import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Works from "../pages/Works/Works";

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
