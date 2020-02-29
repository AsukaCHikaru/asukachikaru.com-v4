import React from "react";

type Props = {
  passions: string[];
};

const passionList = (props: Props) => {
  return (
    <ul>
      {props.passions.map((passion: string, i) => (
        <li key={`passion-item-${i}`}>{passion}</li>
      ))}
    </ul>
  );
};

export default passionList;
