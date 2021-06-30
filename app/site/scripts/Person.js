class metaData {
    constructor(author) {
        this.author = author;
        this.timestamp = Date.now();
        this.avatar = ""
    }
}
export class Person {
    constructor(name) {
        this.name = name;
        this.messages = []
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
    addAvatar(link="../resources/defaultprofile.jpg") {
        this.avatar = link;
    }
}