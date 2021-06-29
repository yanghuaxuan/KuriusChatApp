class metaData {
    constructor(author) {
        this.timestamp = Date.now();
        this.author = author;
    }
}
export class Person {
    constructor(name) {
        this.name = name;
        this.messages = []
    }
    addMessage(message) {
        this.messages.push([message, JSON.stringify(new metaData("Person"))]);
        return this.messages;
    }
}