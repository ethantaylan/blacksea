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
      <div className="flex fixed container p-4 w-full items-center justify-between h-16 md:h-20 rounded-3xl bg-transparent z-50 backdrop-blur bg-blend-difference">
        <NavLink
          className="text-xl md:text-2xl font-black cursor-pointer"
          to="/"
        >
          {BLACKSEA}
        </NavLink>

        {/* Navbar buttons */}
        <NavbarButtons
          isMenuOpen={isMenuOpen}
          onClickBugerButton={() => setIsMenuOpen(true)}
        />
      </div>

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
