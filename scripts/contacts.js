import {Person} from './Person.js';

export function showContacts() {
  const JoeMama = new Person("Joe Mama");
  const Bob = new Person("Bob the Builder");
  const Boss = new Person("Boss");
  let exampleContacts = [JoeMama, Bob, Boss];
  exampleContacts.forEach((contact) => {
    // Create name for each contact
    let contactsElement = document.getElementById("contacts-container");
    let element = document.createElement("h5");
    element.className += "contacts";
    element.id = contact.getName;
    let contactName = document.createTextNode(contact.getName);
    element.appendChild(contactName);
    contactsElement.appendChild(element);
  })
}