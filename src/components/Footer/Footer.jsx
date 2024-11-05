/* Stylesheets imports */
import "./Footer.css";

/* Components imports */
import TwitterIcon from "../Icons/TwitterIcon.jsx";
import InstagramIcon from "../Icons/InstagramIcon.jsx";
import FacebookIcon from "../Icons/FacebookIcon.jsx";
import YoutubeIcon from "../Icons/YoutubeIcon.jsx";

export default function Footer() {
  return (
    <footer>
      <Links />
      <Socials />
      <Copyright />
    </footer>
  );
}

function Links() {
  return (
    <div className="footer-links">
      <a className="font-body">Confidentialité</a>
      <a className="font-body">Mentions légales</a>
      <a className="font-body">CGU</a>
      <a className="font-body">Sitemap</a>
    </div>
  );
}

function Socials() {
  return (
    <div className="footer-social-icons">
      <TwitterIcon />
      <InstagramIcon />
      <FacebookIcon />
      <YoutubeIcon />
    </div>
  );
}

function Copyright() {
  return (
    <p className="font-body">© 2024 Nation Sounds. Tous droits réservés.</p>
  );
}
