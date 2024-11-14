import { useEffect, useState } from "react";
import { Fetcher as F } from "../utils/fetcher.js";

export default function useScene() {
  const [scenes, setScenes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await F.get(`/scene`);
      setScenes(data);
    })();
  }, []);

  return scenes;
}
