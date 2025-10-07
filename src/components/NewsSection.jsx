import React from "react";
import "./NewsSection.css";

const NewsSection = () => {
  const newsLogos = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/f2ebfb428f62e94cd95c29ca00c380d34b505a1a?width=300",
      alt: "News outlet 1"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/27c628bd61560f48996b35edc615ff1d0fab998f?width=300", 
      alt: "News outlet 2"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/19a29faa6eee42a159749fb7e6c3fad14dc96f52?width=300",
      alt: "News outlet 3"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/a865ddbfcb8c7bc79a9607840fe7082d3732a237?width=300",
      alt: "News outlet 4"
    }
  ];

  return (
    <section className="news-section">
      <div className="news-container">
        <h2 className="news-title">
          <span className="highlight">Talrn</span> in the news
        </h2>
        <p className="news-subtitle">We are recognized as one of the leading platforms for</p>
        <p className="news-subtitle-secondary">on-demand talent.</p>
        
        <div className="news-logos">
          {newsLogos.map((logo, index) => (
            <img 
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="news-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
