import ApplicationRoutes from "../../routes";
import { useContact } from "../../contexts/ContactContext";
import { ContactPopup } from "../ContactPopup/ContactPopup";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

export default function AppLayout() {
  const { isContactOpen, openContact, closeContact } = useContact();

  return (
    <>
      <ScrollToTop />
      <main className="container mx-auto p-4">
        <Navbar />

        <ApplicationRoutes />
      </main>
      <Footer onContactClick={openContact} />
      <ContactPopup
        isOpen={isContactOpen}
        onClose={closeContact}
      />
    </>
  );
}
