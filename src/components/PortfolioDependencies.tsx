import React from "react";

type Props = {
  dependencies: string[];
  parentIndex: number;
};

const PortfolioDependencies = (props: Props) => {
  return (
    <div className="portfolio--item-dependencies">
      {props.dependencies.map((dependency: string, i) => {
        return (
          <p
            className="portfolio--item-dependecy"
            key={`portfolio-item-${props.parentIndex}-dependecy-${i}`}
          >
            {i === props.dependencies.length - 1
              ? dependency
              : `${dependency}, `}
          </p>
        );
      })}
    </div>
  );
};

export default PortfolioDependencies;
