import React from "react";
import { Contact } from "../constants/types";
import ContactItem from "./ContactItem";

type Props = {
  contacts: Contact[];
};

const ContactList = (props: Props) => {
  return (
    <div className="contact">
      {props.contacts.map((contact: Contact, i) => (
        <ContactItem
          url={contact.url}
          name={contact.name}
          key={`contact-item-${i}`}
        />
      ))}
    </div>
  );
};

export default ContactList;
