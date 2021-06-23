export function createChat(contacts) {
  attachContactsListener(contacts);
}

// Trying event delegation
let attachContactsListener = function (contacts) {
  let contacts_container = document.getElementById("contacts-container");
  contacts_container.onclick = function (event) {
    let target = event.target;
    changeChat(target, contacts);
  }
}

let changeChat = function (target, contacts) {
  changeChatHeader(target);
  changeChatBox(target, contacts);
}


let changeChatHeader = function (target) {
  let chatHeader = document.getElementById("chat-header")
  chatHeader.innerHTML = target.id;
}

let changeChatBox = function (target, contacts) {
  let chatBox = document.getElementById("chat-box");
  if (chatBox.hasChildNodes()) {
    while (chatBox.firstChild) {
      chatBox.removeChild(chatBox.firstChild);
    }
  }
  let currentPerson = contacts.get(target.id);
  let messages = currentPerson.getMessages;
  messages.forEach((message) => {
    let chatBubble = document.createElement("div");
    chatBubble.id = "chat-bubble";
    let messageAuthor = document.createElement("h3");
    messageAuthor.id = "chat-bubble-author"
    let messageText = document.createElement("p");
    messageText.id = "chat-bubble-text"
    let authorNode = document.createTextNode(currentPerson.getName);
    let messageNode = document.createTextNode(message);
    messageAuthor.appendChild(authorNode);
    messageText.appendChild(messageNode);
    chatBubble.appendChild(messageAuthor);
    chatBubble.appendChild(messageText);
    chatBox.appendChild(chatBubble);
  })
}