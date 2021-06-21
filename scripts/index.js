'use strict';
import {Person} from './Person.js'

export function main() {
  const JoeMama = new Person("Joe Mama");
  const Bob = new Person("Bob the Builder");
  const Boss = new Person("Boss");
  let exampleContacts = [JoeMama, Bob, Boss];
  exampleContacts.forEach((contact) => {
    // Create name for each contact
    let contactsElement = document.getElementById("contacts");
    let element = document.createElement("h5");
    element.id = "contacts-name";
    let contactName = document.createTextNode(contact.name);
    element.appendChild(contactName);
    contactsElement.appendChild(element);
  })
}

