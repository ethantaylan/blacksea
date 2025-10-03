import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menus } from "../../consts";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center relative p-2 md:p-4">
      <div className="flex w-full items-center justify-between md:justify-center h-16 md:h-20 rounded-3xl bg-transparent z-50 backdrop-blur bg-blend-difference">
        <NavLink
          className="text-xl md:text-2xl font-bold cursor-pointer md:w-full"
          to="/"
        >
          {/* <img src={BlackseaLogo} className="invert object-contain h-11 antialiased" alt="blacksea" /> */}
          blacksea
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-medium text-lg px-1 text-nowrap items-end">
          {menus.map((menuItem, index) => (
            <li key={index}>
              <a
                className={clsx(
                  "rounded-full px-5 py-2 text-base",
                  menuItem.name === "Contact" && "bg-black text-white"
                )}
                href={menuItem.link}
              >
                {menuItem.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-black block"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-black block"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-black block"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8 px-8">
              {menus.map((menuItem, index) => (
                <motion.a
                  key={index}
                  href={menuItem.link}
                  className={clsx(
                    "text-2xl font-medium",
                    menuItem.name === "Contact" &&
                      "bg-black text-white px-8 py-3 rounded-full"
                  )}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {menuItem.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
