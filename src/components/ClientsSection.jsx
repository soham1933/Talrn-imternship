import React from "react";
import "./ClientsSection.css";

const ClientsSection = () => {
  const clients = [
    { name: "Buyhive", active: false, logo: "https://api.builder.io/api/v1/image/assets/TEMP/03431a59334d269c26f0ee8851e6efa378d73a9c?width=90" },
    { name: "Mogul", active: true, logo: "https://api.builder.io/api/v1/image/assets/TEMP/9c81ec92f62dd8308e6d1cd383a66712728a7ca1?width=90" },
    { name: "Bracketology", active: false, logo: "https://api.builder.io/api/v1/image/assets/TEMP/f197ad8b7e8f2b03a7431240fa43e4faa7456bb6?width=90" },
    { name: "RXR", active: false, logo: "https://api.builder.io/api/v1/image/assets/TEMP/c24d7ccfc487914a5e49429094024a359a35fe7d?width=90" },
    { name: "Remoteshare", active: false, logo: "https://api.builder.io/api/v1/image/assets/TEMP/a725814e77328e1bd136f17c0192e6a05246d8e6?width=90" },
    { name: "1871", active: true, logo: "https://api.builder.io/api/v1/image/assets/TEMP/866ea46acb1ae5df22b1ccc78b91b300b7a3ed98?width=90" },
    { name: "UCFS", active: false, logo: "https://api.builder.io/api/v1/image/assets/TEMP/a37134102d47c6ced9776d2d1d1ddb8751c47806?width=90" }
  ];

  const secondRowClients = [
    { name: "Farechild", active: false, logo: "https://api.builder.io/api/v1/image/assets/TEMP/aab65208c8f6a6b813e32287e6d396f982657198?width=90" },
    { name: "Aurum", active: false, logo: "https://api.builder.io/api/v1/image/assets/TEMP/086ecd5991972374d4083505c6ebf8b18a8abab7?width=90" },
    { name: "Big Shoulders Fund", active: false, logo: "https://api.builder.io/api/v1/image/assets/TEMP/5909756fc53a94fb8d323e4bb4ea0d1ef8ba759a?width=90" },
    { name: "Biograph", active: false, logo: "https://api.builder.io/api/v1/image/assets/TEMP/5fead107e493dabf7458e3d66fb06dccb86336a3?width=90" },
    { name: "YOVI", active: false, logo: "https://api.builder.io/api/v1/image/assets/TEMP/9f5f9b1c84a01dc9faf4f797685944ac2acb1998?width=90" },
    { name: "Skoller", active: false, logo: "https://api.builder.io/api/v1/image/assets/TEMP/b00ce8ac7d790f68d45182e86813486499033e59?width=90" },
    { name: "Shiny Registry", active: false, logo: "https://api.builder.io/api/v1/image/assets/TEMP/767c6af8bee7635de40c016e0924a89c6ce5900c?width=90" }
  ];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="clients-title">
          We've helped <span className="highlight">250+</span> clients outsource their software development
        </h2>
        <p className="clients-subtitle">And just to name a few...</p>
        
        <div className="clients-grid">
          {/* First Row */}
          <div className="clients-row">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="client-card">
                {client.active && (
                  <div className="active-badge">
                    <div className="badge-circle"></div>
                    <span>Active</span>
                  </div>
                )}
                <h3 className="client-name">{client.name}</h3>
                <p className="engagement-text">12 month<br />engagement</p>
                <img src={client.logo} alt={client.name} className="client-logo" />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="clients-row">
            {[...secondRowClients, ...secondRowClients].map((client, index) => (
              <div key={index} className="client-card">
                <h3 className="client-name">{client.name}</h3>
                <p className="engagement-text">12 month<br />engagement</p>
                <img src={client.logo} alt={client.name} className="client-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
