const searchButton = document.querySelector("button");
var searchInput = document.querySelector("#search");
var fun = {
  mango:{
    details:{
      rate:40,
      type:"mausami"
    },
    callFun: function(){
      var details = this.details.rate + this.details.type+ "";
      return details;
      
    }
  }

};
searchButton.addEventListener("click", () => {
  event.preventDefault();
  document.querySelector("p").innerHTML = fun.mango.callFun();
  
});