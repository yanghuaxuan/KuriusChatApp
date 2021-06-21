window.onload = () => {
  let exampleContacts = new Map();
  exampleContacts.set("Joe Mama", "Where have you been?");
  exampleContacts.forEach((value, key) => {
    // Create name for each contact
    let contactsElement = document.getElementById("contacts");
    let element = document.createElement("h4");
    let contactName = document.createTextNode(key);
    element.appendChild(contactName);
    contactsElement.appendChild(element);
  })
}

