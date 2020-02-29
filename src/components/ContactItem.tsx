import React from "react";
import Link from "./Link";

type Props = {
  url: string;
  name: string;
};

const ContactItem = (props: Props) => {
  return (
    <Link url={props.url} className="contact--item">
      {props.name.toUpperCase()}
    </Link>
  );
};

export default ContactItem;
