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
    John.addMessage("not pog");
    John.addMessage("I'm chicken");
    John.addReply("That's so poggers champs moment");
    John.addMessage("cool cool pog");
    for(let i = 0; i < fillerContacts.length; i++) {
        contactStorage.setItem(fillerContacts[i].name, JSON.stringify(fillerContacts[i]));
    }
}

export let displayContacts = function() {
    let contactsContainer = document.getElementById("menu");
    for(let i = 0; i < contactStorage.length; i++) {
        let contact = JSON.parse(contactStorage.getItem(contactStorage.key(i)));
        let newContact = document.createElement("p");
        let newContactText = document.createTextNode(contact.name);

        newContact.className += "contacts";
        newContact.appendChild(newContactText);
        contactsContainer.appendChild(newContact);
    }
}