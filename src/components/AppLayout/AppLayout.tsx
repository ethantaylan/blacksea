import ApplicationRoutes from "../../routes";
import { Navbar } from "../Navbar/Navbar";

export default function AppLayout() {
  return (
    <main className="container mx-auto">
      <Navbar />

      <ApplicationRoutes />
    </main>
  );
}
