//Required imports
import React from "react";
import { Link } from "react-router-dom";

export const FooterLink = ({ to, linkname }) => {
  return (
    <div>
      <Link to={to}>{linkname}</Link>
    </div>
  );
};
export const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-top">
        <div className="footer-item-top">
          <div>
            <p>Home</p>
            <a
              href="https://goo.gl/maps/D9Ywn5YuVd7dhJiJ9"
              target="_blank"
              rel="noreferrer"
            >
              Tsavo Road, Off Latema Rd
            </a>
            <FooterLink to="/" linkname="Maximum Miracle Center" />
            <FooterLink to="/shop" linkname="Nairobi" />
            <a href="tel: +254 733 986 558">+254 733 986 558</a>
          </div>
          <div>
            <p>Shop</p>
            <FooterLink to="/shop" linkname="Computers" />
            <FooterLink to="/shop" linkname="Laptops" />
            <FooterLink to="/shop" linkname="Printers" />
            <FooterLink to="/shop" linkname="Accessories" />
          </div>
        </div>
        <div className="footer-item-bottom">
          <div>
            <p>Thematic Areas</p>
            <FooterLink to="/aboutus" linkname="Infrastructure" />
            <FooterLink to="/aboutus" linkname="Education and training" />
            <FooterLink to="/aboutus" linkname="Research and innovation" />
            <FooterLink to="/aboutus" linkname="Engagement and collaboration" />
          </div>
          <div>
            <p>Sitemap</p>
            <FooterLink to="/" linkname="Home" />
            <FooterLink to="/shop" linkname="Shop" />
            <FooterLink to="/contactus" linkname="Contact us" />
            <FooterLink to="/aboutus" linkname="About us" />
          </div>
        </div>
      </section>
      <section className="footer-bottom">
        <p>&copy; Sekangi Computers 2022</p>
      </section>
    </div>
  );
};
