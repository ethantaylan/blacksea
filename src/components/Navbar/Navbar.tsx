export function Navbar() {
const menus = [
    { name: "À propos", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Équipe", link: "/team" },
];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="text-2xl font-bold cursor-pointer">
          {/* <img src={BlackseaLogo} className="invert object-contain h-11 antialiased" alt="blacksea" /> */}
          blacksea
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-medium text-lg px-1">
          {menus.map((menuItem, index) => (
            <li key={index}>
              <a  className="rounded-full px-5 py-2" href={menuItem.link}>{menuItem.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary rounded-full">Contact</a>
      </div>
    </div>
  );
}
