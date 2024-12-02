import "./main.css";
import HomePage from "./pages/home/home-page.jsx";
import MapPage from "./pages/map/map-page.jsx";
import FaqPage from "./pages/faq/faq-page.jsx";
import ProgramPage from "./pages/program/program-page.jsx";
import PartnerPage from "./pages/partner/partner-page.jsx";
import { Redirect, Route, Switch } from "wouter";
import ConcertInfoPage from "./pages/concert-info/concert-info-page.jsx";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/carte" component={MapPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/programme" component={ProgramPage} />
        <Route path="/partenaires" component={PartnerPage} />
        <Route path="/concert/:id" component={ConcertInfoPage} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}
