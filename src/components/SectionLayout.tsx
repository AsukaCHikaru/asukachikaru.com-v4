import React, { Children } from "react";

type Props = {
  children?: any;
  title: string;
};

const SectionLayout = (props: Props) => {
  return (
    <div className="section">
      <h2 className="section--title">{props.title}</h2>
      {props.children}
    </div>
  );
};

export default SectionLayout;
