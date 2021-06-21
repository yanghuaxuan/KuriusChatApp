'use strict';

export class Person {
  name = "default name";
  messages = [];
  
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this.name;
  }
  
  addMessage(message) {
    this.messages.push(message);
  }
}
