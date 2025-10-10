import { useState } from "react";
import ApplicationRoutes from "../../routes";
import { ContactPopup } from "../ContactPopup/ContactPopup";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

export default function AppLayout() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <main className="container mx-auto p-4">
        <Navbar />

        <ApplicationRoutes />
      </main>
      <Footer onContactClick={() => setIsContactOpen(true)} />
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
