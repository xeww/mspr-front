import { useEffect, useState } from "react";
import { Fetcher as F } from "../utils/fetcher.js";

export default function useArtist(singleId = -1) {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await F.get(`/artist/${singleId > 0 ? singleId : ""}`);
        setArtists(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [singleId]);

  return artists;
}
