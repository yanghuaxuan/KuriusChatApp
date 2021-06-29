export let displayChatMessages = function(contactName) {
    let contactStorage = window.localStorage;
    let contact = JSON.parse(contactStorage.getItem(contactName));
    let contactMessages = contact.messages;

    let chatBox = document.getElementById("chat-box");
    let messageBubble = document.createElement("p");
    console.log(document.createTextNode(contactMessages[0]));
}
export let contactsMenuListener = function() {
    let contactsMenu = document.getElementById("menu");
    contactsMenu.onclick = function(event) {
        let target = event.target;
        if(target.className != "contacts") {
            return;
        }
        displayChatMessages(target.innerHTML);
    }
}
