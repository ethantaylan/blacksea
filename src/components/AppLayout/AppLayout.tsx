import ApplicationRoutes from "../../routes";
import { useContactStore } from "../../stores/contactStore";
import { ContactPopup } from "../ContactPopup/ContactPopup";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

export default function AppLayout() {
  const { isOpen, openContact, closeContact } = useContactStore();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="container mx-auto p-4" role="main">
        <ApplicationRoutes />
      </main>
      <Footer onContactClick={openContact} />
      <ContactPopup
        isOpen={isOpen}
        onClose={closeContact}
      />
    </>
  );
}
