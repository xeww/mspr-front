import { useEffect, useState } from "react";
import { Fetcher as F } from "../utils/fetcher.js";

export default function useConcert() {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await F.get(`/concert`);
      setConcerts(data);
    })();
  }, []);

  return concerts;
}
