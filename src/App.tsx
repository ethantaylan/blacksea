import AppLayout from "./components/AppLayout/AppLayout";
import { ContactProvider } from "./contexts/ContactContext";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <ContactProvider>
        <AppLayout />
      </ContactProvider>
    </LanguageProvider>
  );
}
