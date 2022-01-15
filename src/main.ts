type Contact = { // nearly similar to the class
    id : number;
    name: string;
    phone : string;
}

const Contacts : Contact[] = [];
// Contacts.push({id: 1, name: 'Khalid Abdi Guleid', phone: '0633544626' });
// console.log("My contacts are: ", Contacts[0]);

const tbodyElement = document.querySelector('tbody');
const row = document.createElement('tr');

tbodyElement.className = 'text-lg';
row.className = 'font-semibold';

const idColumn = document.createElement('td');
idColumn.textContent = '1';
idColumn.className = 'text-center border-2 border-gray-500 py-2';

const nameColumn = document.createElement('td');
nameColumn.textContent = 'Abdi Ahmed';
nameColumn.className = 'border-2 border-gray-500';

const phoneColumn = document.createElement('td');
phoneColumn.textContent = '3544626';
phoneColumn.className = 'border-2 border-gray-500';

row.appendChild(idColumn);
row.appendChild(nameColumn);
row.appendChild(phoneColumn);

tbodyElement.appendChild(row);
