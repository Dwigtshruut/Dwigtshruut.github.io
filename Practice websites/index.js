 let changes = document.querySelector(".head").value;
 alert(changes);
 document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").onsubmit= function(){
        document.querySelector("header").innerHTML= changes;
    }
 });