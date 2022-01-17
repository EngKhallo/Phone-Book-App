type Contact = {
  // nearly similar to the class
  id: number;
  name: string;
  phone: string;
};

const Contacts: Contact[] = [];

renderTable(Contacts);


function renderTable(list: Contact[]) {
    const tbodyElement = document.querySelector("tbody");
    tbodyElement.remove();

    const newTbody = document.createElement('tbody');
    newTbody.className = "text-lg";
    
  for (const Contact of Contacts) {
    const row = document.createElement("tr");

    row.className = "font-semibold";

    const idColumn = document.createElement("td");
    idColumn.textContent = Contact.id.toString();
    idColumn.className = "text-center border-2 border-gray-500 py-2";

    const nameColumn = document.createElement("td");
    nameColumn.textContent = Contact.name;
    nameColumn.className = "border-2 border-gray-500";

    const phoneColumn = document.createElement("td");
    phoneColumn.textContent = Contact.phone;
    phoneColumn.className = "border-2 border-gray-500";

    row.appendChild(idColumn);
    row.appendChild(nameColumn);
    row.appendChild(phoneColumn);

    newTbody.appendChild(row);
  }

  const table = document.querySelector('table');
  table.appendChild(newTbody);
}

function add() {
  const nameInput = document.querySelector("#name") as HTMLInputElement; // this is casting; we converted the HTML Element to HTML Input element
  const name = nameInput.value;

  const phoneInput = document.querySelector("#phone") as HTMLInputElement;
  const number = phoneInput.value;

  if (name.length < 3 || number.length < 4) {
    alert("Please provide a valid input value");

    return;
  }
//   Todo: reject duplicate contacts
// const existingContacts = Contacts.filter(c => c.name.toLowerCase() === name.toLowerCase() && c.phone === number);
//   if(existingContacts.length > 0){
//     alert("This contact exists");  
//     return;
//   }

  const index = Contacts.findIndex(c => c.name.toLowerCase() === name.toLowerCase() && c.phone === number);
  if(index !== -1){
    alert("This contact exists");  
    return;
  }
  Contacts.push({
      id: Contacts.length+1,
      name: name,
      phone: number,
  });
  renderTable(Contacts);
  clear();
}
function clear(){
    const nameInput = document.querySelector("#name") as HTMLInputElement; // this is cating; we converted the HTML Element to HTML Input element
    nameInput.value = "";
    const phoneInput = document.querySelector("#phone") as HTMLInputElement;
    phoneInput.value = "";
}


// Filtering Table Data by Searching
function search(event: Event){
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    const result = Contacts.filter(c => c.name.startsWith(value.toUpperCase())); // foreach contact => where contact.name ....
    renderTable(result);
}
