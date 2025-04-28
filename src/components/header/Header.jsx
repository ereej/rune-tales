import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./header.css";
import Logo from "../../assets/img/logo/logo-black.svg";
import pcIconBlack from "../../assets/img/icons/WorkstationBlack.svg";
import pcIconWhite from "../../assets/img/icons/WorkstationWhite.svg";
import tvIconBlack from "../../assets/img/icons/TVBlack.svg";
import tvIconWhite from "../../assets/img/icons/TVWhite.svg";
import playStationIconBlack from "../../assets/img/icons/PlayStationBlack.svg";
import playStationIconWhite from "../../assets/img/icons/PlayStationWhite.svg";
import nintendoIconBlack from "../../assets/img/icons/NintendoBlack.svg";
import nintendoIconWhite from "../../assets/img/icons/NintendoWhite.svg";
import HiddenSearchBar from "../searchBar/hiddenSearchBar";

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => setMenuOpen(false));

  const navItems = [
    { name: "PC", path: "/pc", blackIcon: pcIconBlack, whiteIcon: pcIconWhite },
    { name: "PlayStation", path: "/playstation", blackIcon: playStationIconBlack, whiteIcon: playStationIconWhite },
    { name: "Nintendo", path: "/nintendo", blackIcon: nintendoIconBlack, whiteIcon: nintendoIconWhite },
    { name: "TV Adaptation", path: "/tv-adaptation", blackIcon: tvIconBlack, whiteIcon: tvIconWhite },
  ];

  return (
    <header className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <nav ref={menuRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
          All
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <img src={location.pathname === item.path ? item.whiteIcon : item.blackIcon} alt={item.name} className="nav-icon" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="search-container">
        <HiddenSearchBar />
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
};

export default Header;
