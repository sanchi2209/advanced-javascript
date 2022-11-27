const itemname=document.querySelector('#name').Value;
const itemPrice=document.querySelector('#price').value;
let total=parsInt(document.querySelector('#total').innerTEXT);
document.querySelectorAll("add-item").addEventListener('click'.addItem);
const tbody=document.querySelector('table tbody');

function addItem(){
debugger;
const row=document.createElement('tr');
const itemnameTD=document.createElement('td');
const itemPriceTD=document.createElement('td');
itemPriceTD.innerText=itemname;
itemPriceTD.innerText=itemPriceTD;

row.appendChild(itemnameTD);
row.appendChild(itemPriceTD);
tbody.appendChild(row);
itemname.value="";
itemPrice.value="";
const allPrice=document.querySelectorAll('.item-price');
for(let itemPrice of allPrice){
    total+=parseInt(itemPrice.innerTEXT)
}
total=0;
}
