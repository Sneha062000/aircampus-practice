const addbutton = document.querySelector("#addButton");
var Input = document.querySelector("#input");
const container = document.querySelector(".container");


 addbutton.addEventListener("click",function(){
    var paragraph = document.createElement('p')
    paragraph.innerText=Input.value;
    container.appendChild(paragraph)
    // console.log("paragraph")
    Input.value="";
 })



            