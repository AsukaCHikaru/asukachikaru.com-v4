import React from "react";
import "../styles/general.css";
import { portfolios, contacts, tags } from "../constants/data";
import { Portfolio, Contact } from "../constants/types";

function App() {
  return (
    <div className="App">
      <h1 className="about--title">Asuka Wang</h1>
      <h2 className="about--desc">Fukuoka, Japan | Front-end developer</h2>
      {contacts.map((contact: Contact) => (
        <a
          href={contact.url}
          target="_blank"
          rel="noopener noreferrer"
          className="contact--link"
        >
          {contact.name.toUpperCase()}
        </a>
      ))}
      <h2 className="section_title">Interests</h2>
      <ul>
        {tags.map((tag: string) => (
          <li>{tag}</li>
        ))}
      </ul>
      <h2 className="section_title">Portfolios</h2>
      <ul>
        {portfolios.map((portfolio: Portfolio) => {
          return (
            <li className="portfolio--link_wrapper">
              <a
                href={portfolio.href}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio--link"
              >
                {portfolio.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
