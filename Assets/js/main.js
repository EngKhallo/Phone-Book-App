var Contacts = [];
Contacts.push({ id: 1, name: "Khalid Abdi Guleid", phone: "0633544626" });
Contacts.push({ id: 2, name: "Khalid Abdi Guleid", phone: "0633544626" });
Contacts.push({ id: 3, name: "Khalid Abdi Guleid", phone: "0633544626" });
for (var _i = 0, Contacts_1 = Contacts; _i < Contacts_1.length; _i++) {
    var Contact = Contacts_1[_i];
    var tbodyElement = document.querySelector("tbody");
    var row = document.createElement("tr");
    tbodyElement.className = "text-lg";
    row.className = "font-semibold";
    var idColumn = document.createElement("td");
    idColumn.textContent = Contact.id.toString();
    idColumn.className = "text-center border-2 border-gray-500 py-2";
    var nameColumn = document.createElement("td");
    nameColumn.textContent = Contact.name;
    nameColumn.className = "border-2 border-gray-500";
    var phoneColumn = document.createElement("td");
    phoneColumn.textContent = Contact.phone;
    phoneColumn.className = "border-2 border-gray-500";
    row.appendChild(idColumn);
    row.appendChild(nameColumn);
    row.appendChild(phoneColumn);
    tbodyElement.appendChild(row);
}
function add() {
    var nameInput = document.querySelector('#name'); // this is cating; we converted the HTML Element to HTML Input element
    var name = nameInput.value;
    var phoneInput = document.querySelector('#phone');
    var number = phoneInput.value;
    if (name.length < 3 && number.length < 7) {
    }
}
