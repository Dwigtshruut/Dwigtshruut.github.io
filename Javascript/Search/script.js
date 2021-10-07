var ban = {
    man:"Neil",
    women:"Lien",
    child:"num"
  }
  const button = document.querySelector("button");
  const search = document.querySelector("#theSearch");
  var res = document.querySelector("p");
  
  button.addEventListener("click", () => {
    event.preventDefault();
    if(search.value === "man"){
      res.innerHTML = ban.man;
    }else{
      alert("Somethings Wrong");
    }
  });