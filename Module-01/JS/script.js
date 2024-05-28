document.getElementById('main-body').style.border = '2px solid red';

document.getElementById('main-body').style.backgroundColor = 'lightGray';

document.getElementById('main-body').style.padding = ' 10px';

document.getElementById('main-body').style.borderRadius = '10px';




const title = document.getElementById('fruits-title');
title.setAttribute('title', 'attribute set by js');


const fruitList = document.getElementById('fruit-list');
const li = document.createElement('li');
li.innerText = 'Mango is my favourite';

fruitList.appendChild(li);




const mainBody = document.getElementById('main-body');

const section1 = document.createElement('section');

mainBody.appendChild(section1);

const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section1.appendChild(h1);


const ul = document.createElement('ul');

section1.appendChild(ul)

const li1 = document.createElement('li');
li1.innerText = 'Biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Biryani';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Biryani';
ul.appendChild(li4);



const newSection = document.createElement('section');

newSection.innerHTML = `
<h1> My Cloth List</h1>

<ul>
<li> T-shirt </li>
<li> Shift </li>
<li>Pant </li>
<li> Lungi </li>

</ul>
`;

mainBody.appendChild(newSection);

