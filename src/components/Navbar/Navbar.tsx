import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { menus } from "../../consts";

export function Navbar() {
  return (
    <div className="w-full flex justify-center relative p-4">
      <div className="flex fixed w-6/12 items-center justify-center h-20 rounded-3xl bg-transparent z-50 backdrop-blur bg-blend-difference px-4">
        <NavLink className="text-2xl w-full font-bold cursor-pointer" to="/">
          {/* <img src={BlackseaLogo} className="invert object-contain h-11 antialiased" alt="blacksea" /> */}
          blacksea
        </NavLink>

        <ul className="font-medium text-lg px-1 flex text-nowrap items-end">
          {menus.map((menuItem, index) => (
            <li key={index}>
              <a
                className={clsx(
                  "rounded-full px-5 py-2",
                  menuItem.name === "Contact" && "bg-black text-white"
                )}
                href={menuItem.link}
              >
                {menuItem.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
