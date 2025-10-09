import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
