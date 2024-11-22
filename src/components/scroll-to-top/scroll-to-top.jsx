import "./scroll-to-top.css";
import { useEffect, useState } from "react";
import ArrowUpIcon from "../icons/arrow-up-icon.jsx";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    setVisible(document.documentElement.scrollTop > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        "glow scroll-to-top-button " +
        (visible
          ? "scroll-to-top-button__visible"
          : "scroll-to-top-button__hidden")
      }
      onClick={handleClick}
    >
      <ArrowUpIcon />
    </div>
  );
}
