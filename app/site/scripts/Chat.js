let changeChatBox = function(contactName) {
    let contactStorage = window.localStorage;
    let contact = JSON.parse(contactStorage.getItem(contactName.innerHTML));
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
        // Add timestamps
        let timestamp = new Date(metadata.timestamp);
        let elementTimestamp = document.createElement("p");
        let elementTimeNode = document.createTextNode(timestamp.getHours() + 
            ':' + timestamp.getMinutes());
        let elementDatestamp = document.createElement("p");
        let elementDateNode = document.createTextNode(timestamp.getMonth() +
            '/' + timestamp.getDay() + '/' + timestamp.getFullYear());
        elementTimestamp.appendChild(elementTimeNode);
        elementTimestamp.id = "timestamp";
        elementDatestamp.appendChild(elementDateNode);
        elementDatestamp.id = "timestamp";
        messageBubble.appendChild(elementTimestamp);
        messageBubble.appendChild(elementDatestamp);
    }
}
let changeChatHeader = function(contactName) {
    let chatHeader = document.getElementById("chat-header");
    let name = document.createElement("p");
    let image = document.createElement("img");
    let avatar = JSON.parse(window
                            .localStorage
                            .getItem(contactName.innerHTML))
                            .avatar;
    if(document.getElementById("chatheader-name")) {
        name = document.getElementById("chatheader-name");
        name.innerHTML = contactName.innerHTML;
    } else {
        name.id = "chatheader-name";
        name.appendChild(document.createTextNode(contactName.innerHTML));
        image.id = "chatheader-avatar";
        image.src = avatar;
        chatHeader.appendChild(name);
        chatHeader.appendChild(image);
    }
}
export let contactsMenuListener = function() {
    let contactsMenu = document.getElementById("contacts-container");
    contactsMenu.addEventListener('click', function(event) {
        let target = event.target;
        if(target.nodeName != "DIV") {
            target = event.target.parentElement;
        }
        console.log(target.nodeName);
        changeChatBox(target.children[1]);
        changeChatHeader(target.children[1])
    })
}
