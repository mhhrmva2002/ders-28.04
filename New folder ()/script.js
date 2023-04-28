const tablebody=document.querySelector("tbody");
const API_URL='https://northwind.vercel.app/api/suppliers';
function getUsers(API_URL ){
    fetch(API_URL).then(res=>{
        console.log( res);
        return res.json();
    }).then(data=>{
console.log(data);
tablebody.innerHTML="";

data.forEach(element => {
let newRow=createRow(element);
tablebody.appendChild(newRow);
});
    })
}
getUsers(API_URL );
function createRow(supplier){
    let row=document.createElement("tr")
    let IdTd=document.createElement("td")
    IdTd.innerText=supplier.id;
    let nameTd=document.createElement("td")
    nameTd.innerText=supplier.contactName;
    let titleTd=document.createElement("td")
    titleTd.innerText=supplier.contactTitle;
    let countryTd=document.createElement("td")
    countryTd.innerText=supplier.address.country;
    let buttonTd=document.createElement("td")
    let deleteBtn=document.createElement("button");
    deleteBtn.innerHTML='<i class="fa-regular fa-trash-can"></i>'
    deleteBtn.style.backgroundColor="darkRed";
    deleteBtn.style.color="white";
    deleteBtn.style.border="none";
    deleteBtn.style.borderRadius="7px";
    deleteBtn.style.padding="5px 10px";
    deleteBtn.classList.add("deleteBtn");
    let editBtn=document.createElement("editBtn");
    editBtn.classList.add("editBtn");
    editBtn.innerHTML='<i class="fa-solid fa-pen-clip"></i>';
    editBtn.style.backgroundColor="rgb(155, 107, 18)";
    editBtn.style.color="white";
    editBtn.style.border="none"
    editBtn.style.borderRadius="7px";
    editBtn.style.marginLeft="5px";
    editBtn.style.padding="5px 10px";

deleteBtn.addEventListener ( "click" , (e)=>{
    fetch('https://northwind.vercel.app/api/suppliers/'+ supplier.id,{
        method: 'delete',
    })
    .then(res=>res.text())
    .then(res =>console.log(res))
    if( !confirm("are you sure you want to delete"))return;
var tbl=e.target.parentNode.parentNode.parentNode;
var rows=e.target.parentNode.parentNode;
tbl.deleteRows(rows)
})
buttonTd.append(deleteBtn,editBtn)
row.append( IdTd,nameTd,titleTd,countryTd,buttonTd)
return row;
}


