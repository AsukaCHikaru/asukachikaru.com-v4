import React from "react";

type Props = {
  passions: string[];
};

const passionList = (props: Props) => {
  return (
    <ul className="passion--list">
      {props.passions.map((passion: string, i) => (
        <li className="passion--item" key={`passion-item-${i}`}>
          {passion}
        </li>
      ))}
    </ul>
  );
};

export default passionList;
