export function chatBox() {
  initChatHeader();
} 

let currentContact = {
  name: "Welcome"
}

function initChatHeader() {
  addEventListener();
  let chat_container = document.getElementById("chat")
  let chat_header = document.createElement("h1");
  let contactName = document.createTextNode(currentContact.name); 
  chat_header.appendChild(contactName);
  chat_header.id = "chat-header";
  chat_container.appendChild(chat_header);
}

function changeChatHeader() {
  let chat_header = document.getElementById("chat-header");
  chat_header.innerHTML = currentContact.name;
}


function addEventListener() {
  let contact_container = document.getElementById("contacts-container");
  let contacts = contact_container.getElementsByClassName("contacts");
  console.log(contacts);
  for(let i = 0; i < contacts.length; i++) {
    contacts[i].addEventListener("click", changeCurrentContact);
  }
}

function changeCurrentContact(event) {
  currentContact.name = event.target.id;
  changeChatHeader();
}