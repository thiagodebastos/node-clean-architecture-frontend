import React from "react";
import { Contact } from "../contact";

/**
 *
 * @typedef {import('../contact/index').TContact} TContact
 */

/**
 * @component
 * @param {Object} props
 * @param {TContact[]} props.contacts
 */
export function ContactList({ contacts }) {
  return (
    <div>
      {contacts.map(c => (
        <Contact key={c.id} {...c} />
      ))}
    </div>
  );
}
