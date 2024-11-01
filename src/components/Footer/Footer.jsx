import "./Footer.css";
import TwitterIcon from "../Icons/TwitterIcon.jsx";
import InstagramIcon from "../Icons/InstagramIcon.jsx";
import FacebookIcon from "../Icons/FacebookIcon.jsx";
import YoutubeIcon from "../Icons/YoutubeIcon.jsx";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a className="font-body">Confidentialité</a>
          <a className="font-body">Mentions légales</a>
          <a className="font-body">CGU</a>
          <a className="font-body">Sitemap</a>
        </div>

        <div className="footer-social-icons">
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
          <YoutubeIcon />
        </div>

        <p className="font-body">
          © 2024 Nation Sounds. Tous droits réservés.
        </p>
      </footer>
    </>
  );
}
