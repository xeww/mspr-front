/* Stylesheets imports */
import "./main.css";

/* Components imports */
import Home from "./pages/Home/Home.jsx";
import Map from "./pages/Map/Map.jsx";
import Faq from "./pages/Faq/Faq.jsx";

/* Lib imports */
import { Route, Switch } from "wouter";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/carte" component={Map} />
        <Route path="/faq" component={Faq} />
        <Route>
          <h1>Not Found #TODO</h1>
        </Route>
      </Switch>
    </>
  );
}
