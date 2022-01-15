var Contacts = [];
renderTable();
function renderTable() {
    var tbodyElement = document.querySelector("tbody");
    tbodyElement.remove();
    var newTbody = document.createElement('tbody');
    newTbody.className = "text-lg";
    for (var _i = 0, Contacts_1 = Contacts; _i < Contacts_1.length; _i++) {
        var Contact = Contacts_1[_i];
        var row = document.createElement("tr");
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
        newTbody.appendChild(row);
    }
    var table = document.querySelector('table');
    table.appendChild(newTbody);
}
function add() {
    var nameInput = document.querySelector("#name"); // this is cating; we converted the HTML Element to HTML Input element
    var name = nameInput.value;
    var phoneInput = document.querySelector("#phone");
    var number = phoneInput.value;
    if (name.length < 3 || number.length < 4) {
        alert("Please provide a valid input value");
        return;
    }
    //   Todo: reject duplicate contacts
    Contacts.push({
        id: Contacts.length + 1,
        name: name,
        phone: number
    });
    renderTable();
    clear();
}
function clear() {
    var nameInput = document.querySelector("#name"); // this is cating; we converted the HTML Element to HTML Input element
    nameInput.value = "";
    var phoneInput = document.querySelector("#phone");
    phoneInput.value = "";
}
