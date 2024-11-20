import "./header.css";
import MenuIcon from "../icons/menu-icon.jsx";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import CloseIcon from "../icons/close-icon.jsx";

export const MenuStateContext = createContext(null);

function MenuStateProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuStateContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuStateContext.Provider>
  );
}

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
    <MenuStateProvider>
      <header ref={headerRef}>
        <div className="header-flex-container">
          <Title />
          <Menu />
        </div>
      </header>
      <MenuExtension />
    </MenuStateProvider>
  );
}

function Title() {
  const { isOpen, setIsOpen } = useContext(MenuStateContext);

  return (
    <Link to="/">
      <h1
        className="font-title"
        onClick={() => {
          if (isOpen) setIsOpen(false);
        }}
      >
        NATION SOUNDS
      </h1>
    </Link>
  );
}

function Menu() {
  const button = useRef(null);
  const { isOpen, setIsOpen } = useContext(MenuStateContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const extension = document.querySelector(".menu-extension-container");
    if (extension) {
      extension.style.backdropFilter = isOpen ? "blur(100px)" : "none";
      extension.style.transform = isOpen
        ? "translateX(0%)"
        : "translateX(100%)";
    }
  }, [isOpen]);

  return (
    <div className={"menu-icon-container"} ref={button} onClick={handleClick}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </div>
  );
}

function MenuExtension() {
  const { setIsOpen } = useContext(MenuStateContext);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="menu-extension-container">
      <div className="menu-extension-items">
        <Link to="/" className="font-title" onClick={handleClick}>
          Accueil
        </Link>
        <Link to="/programme" className="font-title" onClick={handleClick}>
          Programme
        </Link>
        <Link to="/carte" className="font-title" onClick={handleClick}>
          Carte
        </Link>
        <Link to="/partenaires" className="font-title" onClick={handleClick}>
          Partenaires
        </Link>
        <Link to="/faq" className="font-title" onClick={handleClick}>
          FAQ
        </Link>
      </div>
    </div>
  );
}
