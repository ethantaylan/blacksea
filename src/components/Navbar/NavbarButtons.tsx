import { Mail, Menu, X } from "lucide-react";
import { useContactStore } from "../../stores/contactStore";

interface NavbarButtonsProps {
  isMenuOpen: boolean;
  onClickBugerButton: () => void;
}

export const NavbarButtons = ({
  isMenuOpen,
  onClickBugerButton,
}: NavbarButtonsProps) => {
  const { openContact } = useContactStore();

  return (
    <div className="flex items-center gap-5">
      {/* Contact Button */}
      <button
        className="p-2.5 md:p-3 w-20 flex items-center justify-center bg-black text-white rounded-full cursor-pointer hover:scale-105 transition-transform shadow-lg"
        onClick={openContact}
        aria-label="Contact"
      >
        <Mail size={20} className="md:w-5 md:h-5" />
      </button>

      {/* Burger Menu Button */}
      <button
        className="p-2.5 md:p-3 w-20 flex items-center justify-center bg-gray-200 text-black rounded-full cursor-pointer hover:scale-105 hover:bg-gray-300 transition-all"
        onClick={onClickBugerButton}
        aria-label="Menu"
      >
        {isMenuOpen ? (
          <X size={20} className="md:w-5 md:h-5" />
        ) : (
          <Menu size={20} className="md:w-5 md:h-5" />
        )}
      </button>
    </div>
  );
};
