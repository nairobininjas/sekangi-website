//Required imports
import React, { useRef } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import AboutHero from "../assets/earth.png";
import Economy from "../assets/sekangi-about.jpg";
import { Team } from "../data/teamData";

export const TeamCard = ({ teammember }) => {
  return (
    <div className="team-card">
      <img src={teammember.memberimage} alt="teammember" />
      <h4>{teammember.name}</h4>
      <p>{teammember.role}</p>
    </div>
  );
};

const AboutUs = () => {
  let missionRef = useRef(null);
  let economyRef = useRef(null);
  let teamRef = useRef(null);
  let executeMissionScroll = () => missionRef.current.scrollIntoView();
  let executeEconomyScroll = () => economyRef.current.scrollIntoView();
  let executeTeamScroll = () => teamRef.current.scrollIntoView();

  return (
    <div>
      <Header />
      <div className="about-intro">
        <section className="about-intro-left">
          <h2>About Sekangi Computers</h2>
          <h3>Real, Caring.</h3>
          <p>
            We believe that everyone of us must live in a space environment. Any
            threat to our environment means a threat to our health, society,
            ecosystems, economy, security. well being and our very existence.
            That threat is already upon us; cutting short the lives of millions
            of people every year in Africa and across the globe.
          </p>

          <div className="about-intro-left-btns">
            <button onClick={executeMissionScroll}>Mission</button>
            <button onClick={executeEconomyScroll}>Economy</button>
            <button onClick={executeTeamScroll}>Team</button>
          </div>
        </section>
        <section className="about-intro-right">
          <img src={AboutHero} alt="earth" />
        </section>
      </div>

      <div className="mission" ref={missionRef}>
        <section>
          <h3>Our mission</h3>
        </section>
        <section>
          <p>
            We believe that everyone of us must live in a space environment. Any
            threat to our environment means a threat to our health, society,
            ecosystems, economy, security. well being and our very existence.
            That threat is already upon us; cutting short the lives of millions
            of people every year in Africa and across the globe.
          </p>
        </section>
      </div>

      <div className="economy" ref={economyRef}>
        <section>
          <img src={Economy} alt="circular economy" />
        </section>
        <section className="economy-left">
          <h3>Circular economy</h3>
          <p>
            Acircular economy is “a model of production and consumption, which
            involves sharing, leasing, reusing, repairing, refurbishing and
            recycling existing materials and products as long as possible” that
            aims at tackling global challenges like climate change, biodiversity
            loss, waste, and pollution
          </p>
        </section>
      </div>

      <div className="team">
        <section className="team-top">
          <h3>Meet the team</h3>
          <p>
            Our company is filled with people who care about the Sekangi
            Computers and the earth. We pride ourselves in offering dedicated
            and custom support, putting our clients at the core of our platform,
            in order for those businesses to put their customers at the core of
            theirs.
          </p>
        </section>

        <section className="members" ref={teamRef}>
          {Team.map((member) => (
            <TeamCard teammember={member} key={member.id} />
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
