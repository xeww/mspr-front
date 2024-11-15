/* Stylesheets imports */
import "./footer.css";

/* Components imports */
import TwitterIcon from "../icons/twitter-icon.jsx";
import InstagramIcon from "../icons/instagram-icon.jsx";
import FacebookIcon from "../icons/facebook-icon.jsx";
import YoutubeIcon from "../icons/youtube-icon.jsx";
import { Link } from "wouter";

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
      <div className="footer-blur footer-blur-left"></div>
      <div className="footer-blur footer-blur-right"></div>
      <Link to="/" className="font-body">
        Confidentialité
      </Link>
      <Link to="/" className="font-body">
        Mentions légales
      </Link>
      <Link to="/" className="font-body">
        CGU
      </Link>
      <Link to="/" className="font-body">
        Sitemap
      </Link>
    </div>
  );
}

function Socials() {
  return (
    <div className="footer-social-icons">
      <a href="https://x.com" target="_blank">
        <TwitterIcon />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <InstagramIcon />
      </a>
      <a href="https://facebook.com" target="_blank">
        <FacebookIcon />
      </a>
      <a href="https://youtube.com" target="_blank">
        <YoutubeIcon />
      </a>
    </div>
  );
}

function Copyright() {
  return (
    <p className="font-body">© 2024 Nation Sounds. Tous droits réservés.</p>
  );
}
