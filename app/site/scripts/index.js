import {createTestContacts, displayContacts} from "./Contacts.js"
import {contactsMenuListener} from "./Chat.js"

export let main = function () {
    createTestContacts();
    displayContacts();
    contactsMenuListener();
}

