var form=document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();

    var name=document.getElementById("name").value;
    console.log(name)
})