 let changes = document.querySelector(".head").value;
 document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").onsubmit= function(){
        document.querySelector("header").innerHTML= changes;
    }
 });