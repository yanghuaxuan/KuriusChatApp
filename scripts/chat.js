export function createChatBox(contacts) {
  attachContactsListener();
} 

// Trying event delegation
let attachContactsListener = function() {
  let contacts_container = document.getElementById("contacts-container");

  contacts_container.onclick = function(event) {
    let target = event.target;
    changeChatHeader(target);
  }
}

let changeChatHeader = function(target) {
  let chatHeader = document.getElementById("chat-header")
  chatHeader.innerHTML = target.id;
}