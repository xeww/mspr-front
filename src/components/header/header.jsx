import "./header.css";
import MenuIcon from "../icons/menu-icon.jsx";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import CloseIcon from "../icons/close-icon.jsx";
import ExternalLinkIcon from "../icons/external-link-icon.jsx";
import TwitterIcon from "../icons/twitter-icon.jsx";
import InstagramIcon from "../icons/instagram-icon.jsx";
import FacebookIcon from "../icons/facebook-icon.jsx";
import YoutubeIcon from "../icons/youtube-icon.jsx";

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
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    setHasScrolled(document.documentElement.scrollTop > 50);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MenuStateProvider>
      <header
        className={
          "header-container" +
          (hasScrolled ? " header-container__scrolled" : "")
        }
      >
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

  return (
    <div className={"menu-icon-container"} ref={button} onClick={handleClick}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </div>
  );
}

function MenuExtension() {
  const { isOpen, setIsOpen } = useContext(MenuStateContext);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={
        "menu-extension-container" +
        (isOpen ? " menu-extension-container__open" : "")
      }
    >
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
        <Link to="/news" className="font-title" onClick={handleClick}>
          News
        </Link>
        <Link to="/partenaires" className="font-title" onClick={handleClick}>
          Partenaires
        </Link>
        <Link to="/faq" className="font-title" onClick={handleClick}>
          FAQ
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href="https://ticketmaster.com"
            className="font-title"
            target="_blank"
          >
            Billetterie
          </a>
          <ExternalLinkIcon />
        </div>

        <div className="menu-extension-socials">
          <a href="https://x.com" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://facebook.com" target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://youtube.com" target="_blank">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
