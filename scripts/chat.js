export function createChat(contacts) {
  attachContactsListener(contacts);
} 

// Trying event delegation
let attachContactsListener = function(contacts) {
  let contacts_container = document.getElementById("contacts-container");

  contacts_container.onclick = function(event) {
    let target = event.target;
    changeChat(target, contacts);
  }
}

let changeChat = function(target, contacts) {
  changeChatHeader(target);
  changeChatBox(target, contacts);
}


let changeChatHeader = function(target) {
  let chatHeader = document.getElementById("chat-header")
  chatHeader.innerHTML = target.id;
}

let changeChatBox = function(target, contacts) {
  let chatBox = document.getElementById("chat-box");
  let currentPerson = contacts.get(target.id);
  let messages = currentPerson.getMessages;
  console.log(currentPerson.getName);
  console.log(messages);
}