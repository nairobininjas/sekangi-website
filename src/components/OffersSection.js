//Required imports
import React from "react";
import BoseHeadPhones from "../assets/bose head.png";
import X1carbon from "../assets/x1.png";
import Canon from "../assets/canon.png";
import { Link } from "react-router-dom";

//Offer card

export const OfferCard = ({
  offerpercent,
  offername,
  offerImg,
  offerstyle,
  offerpage,
}) => {
  return (
    <Link style={offerstyle} className="offercard" to={offerpage}>
      <section className="offercard-left">
        <h3>{offerpercent}</h3>
        <p>{offername}</p>
      </section>
      <section>
        <img src={offerImg} alt={offername}></img>
      </section>
    </Link>
  );
};

export const OffersSection = () => {
  return (
    <div className="general-section">
      <div>
        <h2>Special Easter Offers</h2>
      </div>
      <div className="offercards">
        <OfferCard
          offerImg={BoseHeadPhones}
          offername="Get Bose 700 headphones"
          offerpercent="-50%"
          offerstyle={{ backgroundColor: "#EBF3F6" }}
          offerpage="/shop/item/1"
        />
        <OfferCard
          offerImg={X1carbon}
          offername="Get Lenovo x1 carbon"
          offerpercent="-69%"
          offerstyle={{ backgroundColor: "#F8EBEB" }}
          offerpage="/shop/item/0"
        />
        <OfferCard
          offerImg={Canon}
          offername="Get Canon FE 200 camera"
          offerpercent="-22%"
          offerstyle={{ backgroundColor: "#EBF3F6" }}
          offerpage="/shop/item/3"
        />
      </div>
    </div>
  );
};
