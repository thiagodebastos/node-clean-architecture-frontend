import React from "react";
import "./contact.css";

/**
 * A contact object
 * @typedef TContact
 * @property {string|number} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 */

/**
 * @param {TContact}
 */
export function Contact({ id, first_name, last_name, email }) {
  return (
    <div className="contact-card">
      <div>ID: {id}</div>
      <div>
        Name: {first_name} {last_name}
      </div>
      <div>Email: {email}</div>
    </div>
  );
}
