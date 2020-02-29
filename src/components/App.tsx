import React from "react";
import Section from "./SectionLayout";
import PassionList from "./PassionList";
import "../styles/general.css";
import { portfolios, contacts, passions, about } from "../constants/data";
import PortfolioList from "./PortfolioList";
import AboutLayout from "./AboutLayout";
import ContactList from "./ContactList";

function App() {
  return (
    <>
      <AboutLayout about={about} />
      <ContactList contacts={contacts} />
      <Section title="Passions">
        <PassionList passions={passions} />
      </Section>
      <Section title="Portfolios">
        <PortfolioList portfolios={portfolios} />
      </Section>
    </>
  );
}

export default App;
