function myFunction() {
    const myNodelist = document.querySelectorAll("p,h2");
    for (let i = 0; i < myNodelist.length; i++) {
      myNodelist[i].style.color = "yellow";
    }
  }