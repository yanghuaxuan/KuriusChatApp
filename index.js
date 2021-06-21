window.onload = () => {
  let exampleContacts = ["Joe Mama", "Boss", "Chad"];
  exampleContacts.forEach((value) => {
    // Create name for each contact
    let contactsElement = document.getElementById("contacts");
    let element = document.createElement("h5");
    element.id = "contacts-name";
    let contactName = document.createTextNode(value);
    element.appendChild(contactName);
    contactsElement.appendChild(element);
  })
}