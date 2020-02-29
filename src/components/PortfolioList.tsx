import React from "react";
import { Portfolio } from "../constants/types";
import PortfolioItem from "./PortfolioItem";

type Props = {
  portfolios: Portfolio[];
};

const PortfolioList = (props: Props) => {
  return (
    <ul>
      {props.portfolios.map((portfolio: Portfolio, i) => (
        <PortfolioItem
          title={portfolio.title}
          url={portfolio.href}
          key={`portfolio-item-${i}`}
        />
      ))}
    </ul>
  );
};

export default PortfolioList;
