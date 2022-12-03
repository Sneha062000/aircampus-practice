const form=document.getElementById("form");
const firstInput=document.getElementById("firstInput");
const addbtn=document.getElementsByClassName("addbtn");
const secondInput=document.getElementById("secondInput");


addbtn.addEventListner("click",(e)=>{
    e.preventDefault();

    let firstInputValue = firstInput.value;


    const newDiv=document.createElement("div");



    const secondInput=document.createElement("input");
    secondInput.type="text";
    secondInput.value=firstInput;
    secondInput.setAttribute("read")

    const editbtn=document.createElement("button");
    editbtn.classList.add("editbtn");
    editbtn.innerText="edit";


    const deletebtn=document.createElement("button");
    deletebtn.classList.add("deletebtn");
    deletebtn.innerText="delete";

})


