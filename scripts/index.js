'use strict';
import {Person} from './Person.js';
import {createContacts} from './contacts.js';
import {chatBox} from './chat.js';

export function main() {
  const JoeMama = new Person("Joe Mama");
  const Bob = new Person("Bob the Builder");
  const Boss = new Person("Boss");
  let exampleContacts = [JoeMama, Bob, Boss];
  createContacts(exampleContacts);
  createChatBox();
}

