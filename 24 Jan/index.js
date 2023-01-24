const title=document.querySelector("#main-container")
title.style.color="red"
console.log(title)



const list=document.querySelectorAll(".items");
for(let i=0;i<list.length;i++){
    list[i].style.color = "blue";
}
console.log(list)




const ul=document.querySelector("ul")
const li=document.createElement("li")
ul.append (li)
li.innerText="sanjana"