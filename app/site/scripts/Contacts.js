import {Person} from "./Person.js"

let contactStorage = window.localStorage;

export let createTestContacts = function() {
    let Bob = new Person("Bob");
    let John = new Person("John");
    let fillerContacts = [Bob, John];
    Bob.addMessage("verypog");
    Bob.addMessage("Hello.");
    Bob.addMessage("Haha funny");
    Bob.addReply("That's so poggers champs moment");
    Bob.addAvatar()
    John.addMessage("not pog");
    John.addMessage("I'm chicken");
    John.addReply("That's so poggers champs moment");
    John.addMessage("cool cool pog");
    John.addAvatar();
    for(let i = 0; i < fillerContacts.length; i++) {
        contactStorage.setItem(fillerContacts[i].name, JSON.stringify(fillerContacts[i]));
    }
}

export let displayContacts = function() {
    let contactsContainer = document.getElementById("contacts-container");
    for(let i = 0; i < contactStorage.length; i++) {
        let contact = JSON.parse(contactStorage.getItem(contactStorage.key(i)));
        let newContact = document.createElement("div");
        let newContactMessage = document.createElement("p");
        let messageNode = document.createTextNode(contact.name);
        let imageElement = document.createElement("img");
        newContact.className += "contacts";
        imageElement.src = contact.avatar;
        imageElement.id = "contacts-avatar"

        newContact.appendChild(imageElement);
        newContactMessage.appendChild(messageNode);
        newContact.appendChild(newContactMessage);
        contactsContainer.appendChild(newContact);
    }
}