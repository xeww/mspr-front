import "./main.css";
import HomePage from "./pages/home/home-page.jsx";
import MapPage from "./pages/map/map-page.jsx";
import FaqPage from "./pages/faq/faq-page.jsx";
import ProgramPage from "./pages/program/program-page.jsx";
import PartnerPage from "./pages/partner/partner-page.jsx";
import { Redirect, Route, Switch } from "wouter";
import ConcertInfoPage from "./pages/concert-info/concert-info-page.jsx";
import TextPage from "./pages/text-page/text-page.jsx";
import getLorem from "./utils/lorem.js";
import NewsPage from "./pages/news/news-page.jsx";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/carte" component={MapPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/programme" component={ProgramPage} />
        <Route path="/partenaires" component={PartnerPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/concert/:id" component={ConcertInfoPage} />
        <Route
          path="/confidentialité"
          component={() => (
            <TextPage
              title="Confidentialité"
              description="Notre politique de confidentialité"
              text={getLorem()}
            />
          )}
        />
        <Route
          path="/mentions_légales"
          component={() => (
            <TextPage
              title="Mentions légales"
              description="Nos mentions légales"
              text={getLorem()}
            />
          )}
        />
        <Route
          path="/cgu"
          component={() => (
            <TextPage
              title="CGU"
              description="Nos conditions générales d'utilisation"
              text={getLorem()}
            />
          )}
        />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}
