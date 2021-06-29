let changeChatBox = function(contactName) {
    let contactStorage = window.localStorage;
    let contact = JSON.parse(contactStorage.getItem(contactName));
    let contactMessages = contact.messages;

    let chatBox = document.getElementById("chat-box");
    // First, we clear existing messages
    while(chatBox.firstChild) {
        chatBox.removeChild(chatBox.firstChild);
    }
    // Display every message in chat-box div
    for(let i = 0; i < contactMessages.length; i++) {
        let metadata = JSON.parse(contactMessages[i][1]);
        let messageBubble = document.createElement("p");
        let message = document.createTextNode(contactMessages[i][0]);
        messageBubble.appendChild(message);
        if(metadata.author == "Person") {
            messageBubble.id = "chat-bubble";
        } else {
            messageBubble.id = "reply-bubble";
        }
        chatBox.appendChild(messageBubble);
    }
}
let changeChatHeader = function(contactName) {
    let chatHeader = document.getElementById("chat-header");
    chatHeader.innerHTML = contactName;
}
export let contactsMenuListener = function() {
    let contactsMenu = document.getElementById("menu");
    contactsMenu.onclick = function(event) {
        let target = event.target;
        if(target.className != "contacts") {
            return;
        }
        changeChatBox(target.innerHTML);
        changeChatHeader(target.innerHTML)
    }
}
