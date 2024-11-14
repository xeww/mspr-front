import { useEffect, useState } from "react";
import { Fetcher as F } from "../utils/fetcher.js";

export default function usePartner() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await F.get(`/partner`);
      setPartners(data);
    })();
  }, []);

  return partners;
}
