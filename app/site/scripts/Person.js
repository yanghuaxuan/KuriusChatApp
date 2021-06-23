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
    let randomMessages = ["Hello", "I", "am", "a", "person", "and", "alien"];
    let randomMessage = function() {
      let totalMessage = ""
      for(let i = 0; i < 6; i++) {
        totalMessage += (randomMessages[Math.floor(Math.random() * randomMessages.length)] + " ");
      }
      return totalMessage;
    }
    for(let i = 0; i < 100; i++) {
      this.messages.push(this.name + ": " + randomMessage());
    }
  }

  addMessage(message) {
    this.messages.push();
  }
}
