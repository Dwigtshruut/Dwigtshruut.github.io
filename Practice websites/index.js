let counter =  document.querySelector("header");
let change = document.querySelector(".head");
        function hello(){
           counter.innerHTML= change;
        }
        document.addEventListener("DOMContentLoaded", function(){
            document.querySelector(".submit").onclick = hello;
        });
        