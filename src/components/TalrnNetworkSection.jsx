import React from "react";
import "./TalrnNetworkSection.css";

const TalrnNetworkSection = () => {
  const networkCards = [
    {
      title: "Featured works on Talrn",
      description: "Explore the best works delivered by developers",
      icon: "→"
    },
    {
      title: "See all profiles on Talrn", 
      description: "Discover top developer profiles available on Talrn",
      icon: "→"
    },
    {
      title: "Apply as a developer",
      description: "Start your journey as a developer with Talrn",
      icon: "→"
    }
  ];

  return (
    <section className="talrn-network-section">
      <div className="network-container">
        <div className="network-content">
          <h2 className="network-title">Talrn is the world's largest network of top iOS talent.</h2>
          <p className="network-subtitle">Save 70% on staff costs, while driving innovation & growth. Guaranteed.</p>
          
          <div className="network-cards">
            {networkCards.map((card, index) => (
              <div key={index} className="network-card">
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <span className="card-icon">{card.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalrnNetworkSection;
