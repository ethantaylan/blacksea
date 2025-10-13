import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Works from "../pages/Works";
import NotFound from "../pages/NotFound";

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
