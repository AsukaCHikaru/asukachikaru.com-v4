import React from "react";
import { About } from "../constants/types";

type Props = {
  about: About;
};

const AboutLayout = (props: Props) => {
  return (
    <>
      <h1 className="about--title">{props.about.name}</h1>
      <h2 className="about--desc">{`${props.about.location} | ${props.about.desc}`}</h2>
    </>
  );
};

export default AboutLayout;
