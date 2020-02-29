import React from "react";
import { Portfolio } from "../constants/types";
import PortfolioItem from "./PortfolioItem";

type Props = {
  portfolios: Portfolio[];
};

const PortfolioList = (props: Props) => {
  return (
    <ul className="portfolio--ul">
      {props.portfolios.reverse().map((portfolio: Portfolio, i) => (
        <PortfolioItem
          portfolio={portfolio}
          key={`portfolio-item-${i}`}
          index={i}
        />
      ))}
    </ul>
  );
};

export default PortfolioList;
