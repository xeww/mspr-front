import "./partner-page.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import UpperPage from "../../components/upper-page/upper-page.jsx";
import MarginWrapper from "../../components/margin-wrapper/margin-wrapper.jsx";
import useData from "../../hooks/useData.js";

export default function PartnerPage() {
  return (
    <>
      <Header />
      <UpperPage
        title="Nos Partenaires"
        description="Découvrez les partenaires avec qui nous collaboront"
      />
      <MarginWrapper>
        <Partners />
      </MarginWrapper>
      <Footer />
    </>
  );
}

function Partners() {
  const partners = useData(-1, "partner");
  return (
    <section className="partners-container">
      {partners &&
        partners.map((partner) => (
          <Partner
            key={partner.id}
            name={partner.name}
            image={`${import.meta.env.VITE_IMAGES_URL}/${partner.imageName}`}
            type={partner.type}
          />
        ))}
    </section>
  );
}

function Partner({ name, image, type }) {
  return (
    <article
      className="single-partner-container glow"
      data-t={type}
      data-n={name}
    >
      <img src={image} alt={"Logo de " + name} />
    </article>
  );
}
