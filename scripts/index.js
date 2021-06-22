'use strict';
import {Person} from './Person.js';
import {createContacts} from './contacts.js';
import {createChat} from './chat.js';

export function main() {
  const JoeMama = new Person("Joe Mama");
  const Bob = new Person("Bob the Builder");
  const Boss = new Person("Boss");
  let exampleContacts = new Map();
  exampleContacts.set("Joe Mama", JoeMama);
  exampleContacts.set("Bob the Builder", Bob);
  exampleContacts.set("Boss", Boss);
  createContacts(exampleContacts);
  createChat(exampleContacts);
}

