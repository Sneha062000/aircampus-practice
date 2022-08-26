//querySelectors
var q=""
var inputClass = document.querySelector('.inputClass');
var buttonClass = document.querySelector('.buttonClass');
var container = document.querySelector('.container1');
inputClass.addEventListener("change",()=>{
    q=inputClass.value
    console.log(q)

})
buttonClass.addEventListener('click',function(event){
    container.innerHTML =""

   // fetch(`https://newsapi.org/v2/everything?q=${q}&from=2022-07-25&sortBy=publishedAt&apiKey=7f0bf7b97fdf4346b992decbdaa0c15b`)
    fetch(`https://newsapi.org/v2/everything?q=${q}&from=2022-07-26&sortBy=publishedAt&apiKey=117657c64e2d4e0da6ab7643367ccddb`)
    
    .then(result=>result.json())
    .then(data=>{
        let articles = data["articles"]
        
        for(let i=0;i<10;i++){
            let article = articles[i]
            let html = `<div>
                <img src=${article["urlToImage"]}>
                <h1>${article["title"]} </h1>
                <p>${article["author"]}</p>
                <p>${article["description"]} <a href=${article["url"]}>Read more</a> </p>
              </div>`

            container.innerHTML+=html
          
            
        }
    }).catch(err=>alert("error"))
})


