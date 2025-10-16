import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BLACKSEA } from "../../consts";
import { useContactStore } from "../../stores/contactStore";
import { ContactPopup } from "../ContactPopup/ContactPopup";
import { FullScreenMenu } from "../FullScreenMenu/FullScreenMenu";
import { NavbarButtons } from "./NavbarButtons";

export function Navbar() {
  const { isOpen: isContactOpen, closeContact } = useContactStore();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center relative">
      <header className="flex fixed container p-4 w-full items-center justify-between h-16 md:h-20 rounded-3xl bg-transparent z-50 backdrop-blur bg-blend-difference" role="banner">
        <NavLink
          className="text-xl md:text-2xl font-black cursor-pointer"
          to="/"
          aria-label="BLACKSEA Home"
        >
          {BLACKSEA}
        </NavLink>

        <nav role="navigation" aria-label="Main navigation">
          <NavbarButtons
            isMenuOpen={isMenuOpen}
            onClickBugerButton={() => setIsMenuOpen(true)}
          />
        </nav>
      </header>

      {/* Fullscreen Menu */}
      <FullScreenMenu
        isMenuOpen={isMenuOpen}
        onNavigation={() => setIsMenuOpen(false)}
      />

      {/* Contact Popup */}
      <ContactPopup isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}
