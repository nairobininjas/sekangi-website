//Required imports
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Commitment = () => {
  return (
    <div className="general-section">
      <div>
        <h2>Our commitment to earth</h2>
      </div>
      <div className="commitment">
        <section className="commit-left">
          <h3>Circular economy at Sekangi</h3>
          <h4>We are committed to promote</h4>
          <ul>
            <li>Infrastructure</li>
            <li>Eduction and training</li>
            <li>Research and innovation</li>
            <li>Engagement and collaboration</li>
          </ul>

          <Link to="/aboutus">
            <button>
              Learn More
              <span>
                <FontAwesomeIcon icon={faArrowRight} size="2x" />
              </span>
            </button>
          </Link>
        </section>
        <section className="commit-right">
          <p>
            At Sekangi Computers we aim to provide ICT devices for the
            advancement of teaching and learning and support the development of
            the necessary infrastructure to ensure sustainable collection,
            processing and management of e-waste across the East African Region.
            <br></br>
            Additionally, we aim to bridge the digital skills and knowledge gap
            across Africa and help create opportunities to build the
            professional e-waste industry capacity for the needed human
            resources through workshops, training, re-training, internships,
            mentorship, apprenticeship and exchange programs.To initiate,
            support and implement sustainable e-waste management research
            program.
          </p>
        </section>
      </div>
    </div>
  );
};
