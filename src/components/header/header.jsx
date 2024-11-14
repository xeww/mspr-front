/* Stylesheets imports */
import "./header.css";

/* Components imports */
import MenuIcon from "../icons/menu-icon.jsx";

/* Lib imports */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import CloseIcon from "../icons/close-icon.jsx";

export default function Header() {
  const headerRef = useRef(null);
  const transparent = "rgba(217, 217, 217, 0.03)";
  const opaque = "var(--dark)";

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 50) {
      headerRef.current.style.backgroundColor = opaque;
      headerRef.current.style.borderBottom = "1px solid white";
    } else {
      headerRef.current.style.backgroundColor = transparent;
      headerRef.current.style.borderBottom = "none";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header ref={headerRef}>
        <div className="header-flex-container">
          <Link to="/">
            <h1 className="font-title">NATION SOUNDS</h1>
          </Link>
          <Menu />
        </div>
      </header>
      <MenuExtension />
    </>
  );
}

function Menu() {
  const button = useRef(null);
  const [isToggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!isToggled);
  };

  useEffect(() => {
    const extension = document.querySelector(".menu-extension-container");
    if (extension) {
      extension.style.backdropFilter = isToggled ? "blur(100px)" : "none";
      extension.style.transform = isToggled
        ? "translateX(0%)"
        : "translateX(200%)";
    }
  }, [isToggled]);

  return (
    <div className={"menu-icon-container"} ref={button} onClick={handleClick}>
      {isToggled ? <CloseIcon /> : <MenuIcon />}
    </div>
  );
}

function MenuExtension() {
  return (
    <div className="menu-extension-container">
      <div className="menu-extension-items">
        <Link to="/" className="font-title">
          Accueil
        </Link>
        <Link to="/programme" className="font-title">
          Programme
        </Link>
        <Link to="/carte" className="font-title">
          Carte
        </Link>
        <Link to="/partenaires" className="font-title">
          Partenaires
        </Link>
        <Link to="/faq" className="font-title">
          FAQ
        </Link>
      </div>
    </div>
  );
}
