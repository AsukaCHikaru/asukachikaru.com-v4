import React from "react";

type Props = {};

const Footer = (props: Props) => (
  <footer>
    {`© ${new Date().getFullYear()} asukachikaru`}
  </footer>
);

export default Footer;