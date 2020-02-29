import React from "react";
import { Portfolio } from "../constants/types";
import Link from "./Link";
import PortfolioDependencies from "./PortfolioDependencies";

type Props = {
  portfolio: Portfolio;
  index: number;
};

const PortfolioItem = (props: Props) => (
  <li className="portfolio--item">
    <div className="portfolio--item-link_container">
      <Link url={props.portfolio.url} className="portfolio--item-title">
        {props.portfolio.title}
      </Link>
      <PortfolioDependencies
        dependencies={props.portfolio.dependencies}
        parentIndex={props.index}
      />
      {props.portfolio.repo !== "" ? (
        <Link url={props.portfolio.repo} className="portfolio--item-repo_link">
          GitHub
        </Link>
      ) : null}
    </div>
    <p className="portfolio--item-desc">{props.portfolio.desc}</p>
  </li>
);

export default PortfolioItem;
