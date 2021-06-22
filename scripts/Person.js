'use strict';

export class Person {
  name = "default name";
  messages = [];
  
  constructor(name) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }

  get getMessages() {
    return this.messages;
  }
  
  addMessage(message) {
    this.messages.push(message);
  }
}
