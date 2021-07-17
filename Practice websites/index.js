document.querySelector("form").onsubmit = function(){
        let header = document.querySelector(".head").value;
        document.querySelector("header").innerHTML = header;
    };
