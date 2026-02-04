const products=[
{name:"Wireless Headphones",price:129.99,category:"electronics"},
{name:"Cotton T-Shirt",price:24.99,category:"clothing"},
{name:"Bluetooth Speaker",price:89.99,category:"electronics"},
{name:"Denim Jeans",price:59.99,category:"clothing"}
];
const grid=document.getElementById('productGrid');
function render(filterValue){
grid.innerHTML="";
products.forEach(item=>{
if(filterValue==="all"||item.category===filterValue){
grid.innerHTML+=`
<div class="card">
<h3>${item.name}</h3>
<p>$${item.price.toFixed(2)}</p>
</div>`;
}
});
}
render('all');
