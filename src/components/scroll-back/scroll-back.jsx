import { useLocation } from "wouter";
import { useEffect } from "react";

export default function ScrollBack() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
