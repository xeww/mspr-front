import "./Header.css";
import MenuIcon from "../Icons/MenuIcon.jsx";
import { useEffect, useRef } from "react";

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
        <h1 className="font-title">NATION SOUNDS</h1>
        <MenuIcon />
      </header>
    </>
  );
}
