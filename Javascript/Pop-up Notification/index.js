document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("sub").addEventListener("click", ()=>{
        // style.cssText to change multiple css property 
        document.getElementById("popup").style.cssText=`
        visibility:visible;
        top:50%;
        transform:translate(-50%,-50%) scale(1);
        `;
    });
    document.getElementById("ko").addEventListener("click", ()=>{
        document.getElementById("popup").style.cssText=`
        top:0%;
        transform:translate(-50%,-50%) scale(.1);
        visibility:hidden;

        `;
    });
    
});
