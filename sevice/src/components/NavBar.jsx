import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/NavBar.scss";
import { HamburgetMenuClose, HamburgetMenuOpen} from "../assets/Icons";


const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const list = [
    { name: "Wprowadzenie", path: "/" },
    { name: "Oferta", path: "Oferta" },
    { name: "Cennik", path: "Cennik" },
    { name: "Rezultaty", path: "Rezultaty"},
    { name: "Kontakt", path: "Kontakt" },
  ];
  const menu = list.map((item) => (
    <li key={item.name} className="nav-item">
      <NavLink onClick={handleClick} to={item.path} className="nav-links">
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>{menu}</ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
