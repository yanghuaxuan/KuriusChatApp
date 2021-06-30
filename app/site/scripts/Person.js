class metaData {
    constructor(author) {
        this.author = author;
        this.timestamp = Date.now();
    }
}
export class Person {
    constructor(name) {
        this.name = name;
        this.messages = []
        this.avatar = "../resources/defaultprofile.jpg";
    }
    addMessage(message) {
        this.messages.push([message, 
                            JSON.stringify(new metaData("Person"))]);
        return this.messages;
    }
    addReply(message) {
        this.messages.push([message, 
                            JSON.stringify(new metaData("Recipient"))]);
        return this.messages;
    }
}