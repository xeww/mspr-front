/* Stylesheets imports */
import "./footer.css";

/* Components imports */
import TwitterIcon from "../icons/twitter-icon.jsx";
import InstagramIcon from "../icons/instagram-icon.jsx";
import FacebookIcon from "../icons/facebook-icon.jsx";
import YoutubeIcon from "../icons/youtube-icon.jsx";

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
