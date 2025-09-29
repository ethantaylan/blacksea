import ApplicationRoutes from "../../routes";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export default function AppLayout() {
  return (
    <>
      <main className="container mx-auto">
        <Navbar />

        <ApplicationRoutes />
      </main>
      <Footer />
    </>
  );
}
