import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import ScrollBack from "../../components/scroll-back/scroll-back.jsx";
import UpperPage from "../../components/upper-page/upper-page.jsx";
import MarginWrapper from "../../components/margin-wrapper/margin-wrapper.jsx";
import "./text-page.css";

export default function TextPage({ title, description, text }) {
  return (
    <>
      <Header />
      <UpperPage title={title} description={description} />
      <MarginWrapper>
        <p className="text-page-text font-body">{text}</p>
      </MarginWrapper>
      <Footer />
      <ScrollBack />
    </>
  );
}
