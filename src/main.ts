type Contact = {
  // nearly similar to the class
  id: number;
  name: string;
  phone: string;
};

const Contacts: Contact[] = [];
Contacts.push({ id: 1, name: "Khalid Abdi Guleid", phone: "0633544626" });
Contacts.push({ id: 2, name: "Khalid Abdi Guleid", phone: "0633544626" });
Contacts.push({ id: 3, name: "Khalid Abdi Guleid", phone: "0633544626" });

for (const Contact of Contacts) {
  const tbodyElement = document.querySelector("tbody");
  const row = document.createElement("tr");

  tbodyElement.className = "text-lg";
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

  tbodyElement.appendChild(row);
}


function add(){
    const nameInput = document.querySelector('#name') as HTMLInputElement; // this is cating; we converted the HTML Element to HTML Input element
    const name = nameInput.value;

    const phoneInput = document.querySelector('#phone') as HTMLInputElement;
    const number = phoneInput.value;

    if(name.length<3 && number.length< 7){
        
    }
}
