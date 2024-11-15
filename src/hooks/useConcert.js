import { useEffect, useState } from "react";
import { Fetcher as F } from "../utils/fetcher.js";

export default function useConcert(singleId = -1) {
  const [concerts, setConcerts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await F.get(`/concert/${singleId > 0 ? singleId : ""}`);
        setConcerts(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [singleId]);

  return concerts;
}
