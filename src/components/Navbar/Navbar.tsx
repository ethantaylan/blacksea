import { Mail } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menus } from "../../consts";
import { ContactPopup } from "../ContactPopup/ContactPopup";

export function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="flex justify-center relative">
      <div className="flex fixed container p-4 w-full items-center justify-between md:justify-center h-16 md:h-20 rounded-3xl bg-transparent z-50 backdrop-blur bg-blend-difference">
        <NavLink
          className="text-xl md:text-2xl font-black cursor-pointer md:w-full"
          to="/"
        >
          BLACKSEA
        </NavLink>
        {/* Desktop Menu */}
        <ul className="hidden md:flex font-medium text-lg px-1 text-nowrap items-end">
          {menus.map((menuItem, index) => (
            <li key={index}>
              {menuItem.name !== "Contact" && (
                <NavLink
                  className="rounded-full px-5 py-2 text-base"
                  to={menuItem.link}
                >
                  {menuItem.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        {/* Mobile Contact Button */}
        <button
          className="p-3 bg-black text-white rounded-full cursor-pointer"
          onClick={() => setIsContactOpen(true)}
          aria-label="Contact"
        >
          <Mail size={22} />
        </button>
      </div>

      {/* Contact Popup */}
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
