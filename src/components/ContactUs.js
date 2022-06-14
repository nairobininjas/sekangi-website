//Required imports
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import ContactImg from "../assets/contact.png";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="contact-us">
        <section className="contact-us-left">
          <img src={ContactImg} alt="contact" />
          <h2>Contact Sekangi Computers</h2>
          <p>
            This form is to contact Sekangi computers staff, if you require an
            instant reply or guidance then give us a call.
          </p>
          <div>
            <a href="email">info@sekangi.com</a>
            <a href="email">+254-733-986-558</a>
          </div>
        </section>

        <form>
          <p>Contact form</p>
          <label>Name</label>
          <input type="text"></input>

          <label>Phone number</label>
          <input type="phone"></input>

          <label>Email</label>
          <input type="text"></input>

          <label>Your message</label>
          <input className="form-message" type="text"></input>

          <button>Send</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
