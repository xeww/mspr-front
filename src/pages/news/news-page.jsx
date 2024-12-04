import "./news-page.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import ScrollBack from "../../components/scroll-back/scroll-back.jsx";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.jsx";
import UpperPage from "../../components/upper-page/upper-page.jsx";
import MarginWrapper from "../../components/margin-wrapper/margin-wrapper.jsx";
import useData from "../../hooks/use-data.js";
import { getFullDate, getFullDateAndHour } from "../../utils/date.js";
import { createContext, useContext, useState } from "react";
import CloseIcon from "../../components/icons/close-icon.jsx";

const NewsSelectContext = createContext(null);
function NewsSelectProvider({ children }) {
  const [isToggled, setToggled] = useState(false);
  const [news, setNews] = useState(null);
  return (
    <NewsSelectContext.Provider
      value={{ isToggled, setToggled, news, setNews }}
    >
      {children}
    </NewsSelectContext.Provider>
  );
}

export default function NewsPage() {
  return (
    <NewsSelectProvider>
      <Header />
      <UpperPage
        title="News"
        description="L'actualité du festival sous forme de posts!"
      />
      <MarginWrapper>
        <AllNews />
        <NewsSelectMenu />
      </MarginWrapper>
      <ScrollToTop />
      <ScrollBack />
      <Footer />
    </NewsSelectProvider>
  );
}

function AllNews() {
  const newsData = useData(-1, "post");

  return (
    <div className="all-news-container">
      {newsData &&
        newsData.map((item) => <SingleNews key={item.id} news={item} />)}
    </div>
  );
}

function SingleNews({ news }) {
  const { setToggled, setNews } = useContext(NewsSelectContext);

  const handleClick = () => {
    setToggled(true);
    setNews(news);
  };

  return (
    <article className="single-news-container glow" onClick={handleClick}>
      <p className="single-news-author single-news-info font-title">
        {news.author}
      </p>
      <p className="single-news-date single-news-info font-body">
        {getFullDate(news.createdOn)}
      </p>
      <p className="single-news-title single-news-info font-title">
        {news.title}
      </p>
      <img
        src={`${import.meta.env.VITE_IMAGES_URL}/${news.imageName}`}
        alt="Illustration d'article"
      />
    </article>
  );
}

function NewsSelectMenu() {
  const { isToggled, setToggled, news } = useContext(NewsSelectContext);

  const handleClick = () => {
    setToggled(false);
  };

  return (
    <div
      className={
        "news-select-menu " +
        (isToggled ? "news-select-menu__enable" : "news-select-menu__disable")
      }
      onClick={handleClick}
    >
      {news !== null ? (
        <div className="news-select-menu-content">
          <div className="news-select-menu-close-button">
            <CloseIcon />
          </div>

          <p className="font-title news-select-menu-content-author">
            Par: {news.author}
          </p>

          <p className="font-title news-select-menu-content-title">
            {news.title}
          </p>

          <i className="font-title news-select-menu-content-description">
            {news.description}
          </i>

          <img
            src={`${import.meta.env.VITE_IMAGES_URL}/${news.imageName}`}
            alt="Illustration d'article"
          />

          <p className="font-body news-select-menu-content-text">
            {news.content}
          </p>

          <div className="font-body news-select-menu-content-dates">
            <p>Posté le {getFullDateAndHour(news.createdOn)}</p>
            {news.createdOn !== news.updatedOn ? (
              <p>Mis à jour le {getFullDateAndHour(news.updatedOn)}</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
