import "./partner-page.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import UpperPage from "../../components/upper-page/upper-page.jsx";
import MarginWrapper from "../../components/margin-wrapper/margin-wrapper.jsx";
import useData from "../../hooks/useData.js";
import { useEffect, useState } from "react";

export default function PartnerPage() {
  const partners = useData(-1, "partner");
  const [filtered, setFiltered] = useState(null);

  const filterByType = () => {
    if (partners) {
      let filtered = {};
      partners.forEach((partner) => {
        filtered[partner.type] = [...(filtered[partner.type] ?? []), partner];
      });
      setFiltered(filtered);
    }
  };

  useEffect(() => {
    filterByType();
  }, [partners]);

  return (
    <>
      <Header />
      <UpperPage
        title="Nos Partenaires"
        description="Découvrez les partenaires avec qui nous collaboront"
      />
      <MarginWrapper>
        {filtered &&
          Object.entries(filtered).map(([type, partners]) => (
            <PartnerTypeList key={type} type={type} partners={partners} />
          ))}
      </MarginWrapper>
      <Footer />
    </>
  );
}

function PartnerTypeList({ type, partners }) {
  return (
    <div className="partner-type-list glow">
      <div className="partner-type-list-title">
        <p className="font-title">{type}</p>
      </div>
      {partners.map((partner) => (
        <PartnerTypeListContent key={partner.id} partner={partner} />
      ))}
    </div>
  );
}

function PartnerTypeListContent({ partner }) {
  return (
    <div className="partner-type-list-content">
      <img
        src={`${import.meta.env.VITE_IMAGES_URL}/${partner.imageName}`}
        alt={`Logo de ${partner.name}`}
      />
      <div className="partner-type-list-content-info">
        <p className="font-title">{partner.name}</p>
        <p className="font-body">{partner.description}</p>
      </div>
    </div>
  );
}
