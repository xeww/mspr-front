/* Stylesheets imports */
import "./main.css";

/* Components imports */
import HomePage from "./pages/home/home-page.jsx";
import MapPage from "./pages/map/map-page.jsx";
import FaqPage from "./pages/faq/faq-page.jsx";
import ProgramPage from "./pages/program/program-page.jsx";

/* Lib imports */
import { Route, Switch } from "wouter";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/carte" component={MapPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/programme" component={ProgramPage} />
        <Route>
          <h1>Not Found #TODO</h1>
        </Route>
      </Switch>
    </>
  );
}