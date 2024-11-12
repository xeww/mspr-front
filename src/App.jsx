/* Stylesheets imports */
import "./App.css";

/* Components imports */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Faq from "./pages/Faq/Faq.jsx";
import Program from "./pages/Program/Program.jsx";
import Map from "./pages/Map/Map.jsx";

/* Hooks imports */
import { createContext, useEffect, useState } from "react";

export default function App() {
  const DataContext = createContext(null);
  const [data, setData] = useState(null);

  /* self-invoked function to fetch data using await */
  useEffect(() => {
    (async () => {
      setData(await fetchData());
    })();
  }, []);

  return (
    <>
      <DataContext.Provider value={data}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/programme" element={<Program />} />
            <Route path="/carte" element={<Map />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

async function fetchData() {
  let apiData = {
    scene: {},
    concert: {},
    artist: {},
    partner: {},
  };

  const url = "http://127.0.0.1:8000/api";

  try {
    const [sceneData, concertData, artistData, partnerData] = await Promise.all(
      [
        fetch(`${url}/scene`).then((response) => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        }),
        fetch(`${url}/concert`).then((response) => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        }),
        fetch(`${url}/artist`).then((response) => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        }),
        fetch(`${url}/partner`).then((response) => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        }),
      ],
    );

    apiData.scene = sceneData;
    apiData.concert = concertData;
    apiData.artist = artistData;
    apiData.partner = partnerData;
  } catch (error) {
    console.log(error);
  }

  return apiData;
}
