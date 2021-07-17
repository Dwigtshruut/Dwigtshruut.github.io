let counter = 0;
        function hello(){
                counter++;
                document.querySelector("h1").innerHTML= counter;
                if(counter%10 == 0){
                alert(`count is ${counter}`);
           }
        }
        document.addEventListener("DOMContentLoaded", function(){
            document.querySelector("button").onclick = hello;
        });
        