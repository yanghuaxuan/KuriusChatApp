'use strict';

export class Person {
  name = "default name";
  messages = [];
  
  constructor(name) {
    this.name = name;
    this.messages;
  }

  get getName() {
    return this.name;
  }

  get getMessages() {
    return this.messages;
  }
  
  generateRandomMessages() {
    let totalMessage = "";
    let randomMessages = ["Hello", "I", "am", "a", "person", "and", "alien"];
    for(let i = 0; i < 6; i++) {
      totalMessage += (randomMessages[Math.floor(Math.random() * randomMessages.length)] + " ");
    }
    for(let i = 0; i < 6; i++) {
      this.messages.push(totalMessage);
    }
  }

  addMessage(message) {
    this.messages.push();
  }
}
