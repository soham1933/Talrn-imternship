import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="navigation">
          <div className="logo-container">
            <a href="/" className="logo-link">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3a7d70688ad6cca1479552a3abec326981aca10a?width=316"
                alt="Talrn Logo"
                className="logo-image"
              />
            </a>
          </div>

          <div className="nav-list">
            <div className="nav-item">
              <a href="#why" className="nav-link">Why</a>
            </div>

            {/* ✅ Industries Hover Dropdown */}
            <div className="nav-item industries-item">
              <div className="nav-link industries-button">
                <span>Industries</span>

              </div>
                              <svg
                  className="dropdown-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3716 7.07366C12.3168 7.01894 12.2457 6.97242 12.1581 6.93412C12.0706 6.89582 11.9776 6.87666 11.8791 6.87666C11.7806 6.87666 11.6903 6.89582 11.6082 6.93412C11.5261 6.97242 11.4523 7.01894 11.3866 7.07366L8.87494 9.55247L6.39612 7.07366C6.33046 7.01894 6.25659 6.97242 6.17451 6.93412C6.09243 6.89582 6.00214 6.87666 5.90364 6.87666C5.80515 6.87666 5.71486 6.89582 5.63278 6.93412C5.5507 6.97242 5.47683 7.01894 5.41116 7.07366C5.3455 7.13932 5.29351 7.21593 5.25521 7.30348C5.21691 7.39103 5.19775 7.48406 5.19775 7.58255C5.19775 7.6701 5.21691 7.75766 5.25521 7.84521C5.29351 7.93276 5.3455 8.00937 5.41116 8.07503L8.38246 11.0463C8.44812 11.112 8.522 11.1612 8.60408 11.1941C8.68616 11.2269 8.77645 11.2433 8.87494 11.2433C8.97344 11.2433 9.06373 11.2269 9.14581 11.1941C9.22789 11.1612 9.30176 11.112 9.36742 11.0463L12.3716 8.07503C12.4372 8.00937 12.4892 7.93276 12.5275 7.84521C12.5658 7.75766 12.585 7.6701 12.585 7.58255C12.585 7.48406 12.5658 7.39103 12.5275 7.30348C12.4892 7.21593 12.4372 7.13932 12.3716 7.07366Z"
                    fill="#5271FF"
                  />
                </svg>

              {/* Dropdown Menu */}
              <ul className="dropdown-menu">
                <li><a href="#healthcare">Healthcare</a></li>
                <li><a href="#finance">Finance</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#ecommerce">E-Commerce</a></li>
                <li><a href="#travel">Travel</a></li>
              </ul>
            </div>

            <div className="nav-item">
              <a href="#find-ios-dev" className="nav-link">Find iOS Dev</a>
            </div>

            <div className="nav-item">
              <a href="#apply-vendor" className="nav-link vendor-link">Apply as Vendor</a>
            </div>

            <div className="nav-item">
              <a href="#hire-ios-dev" className="nav-link primary-button">Hire iOS Dev</a>
            </div>

            <div className="nav-item">
              <a href="#login" className="nav-link">Login</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
