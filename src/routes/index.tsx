import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/services" element={<div>Services Page</div>} />
      <Route path="/team" element={<div>Team Page</div>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
