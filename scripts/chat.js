export function chatBox() {
  chatHeader();
} 

function chatHeader() {
  let chat_container = document.getElementById("chat")
  let chat_header = document.createElement("h1");
  let contactName = document.createTextNode("xd"); 
  chat_header.appendChild(contactName);
  chat_header.id = "chat-header";
  chat_container.appendChild(chat_header);
}