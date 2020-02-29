import React from "react";

type Props = {
  url: string;
  name: string;
};

const ContactItem = (props: Props) => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="contact--link"
    >
      {props.name.toUpperCase()}
    </a>
  );
};

export default ContactItem;
