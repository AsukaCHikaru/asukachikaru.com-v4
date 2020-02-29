import React from "react";

type Props = {
  url: string;
  title: string;
};

const PortfolioItem = (props: Props) => (
  <li>
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio--link"
    >
      {props.title}
    </a>
  </li>
);

export default PortfolioItem;
