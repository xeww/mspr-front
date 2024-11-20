import { useEffect, useState } from "react";
import { Fetcher as F } from "../utils/fetcher.js";

export default function useData(singleId = -1, endpoint) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await F.get(
          `/${endpoint}/${singleId > 0 ? singleId : ""}`,
        );
        setData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [endpoint, singleId]);

  return data;
}
