import React from "react";

type Props = {
  url: string;
  className: string;
  children?: string
};

const Link = (props: Props) => (
  <a 
    href={props.url} 
    className={props.className}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
);

export default Link;
