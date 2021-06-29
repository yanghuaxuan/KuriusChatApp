import { Person } from "./Person";

export function giveIconsFunction() {
    addContactListener();
}

let addContact = function() {
    let contactName = prompt("Enter contact name");
    let newPerson = new Person(contactName);
}

let addContactListener = function() {
    let addIcon = document.getElementById("add-button");
    addIcon.addEventListener("click", addContact);
}

