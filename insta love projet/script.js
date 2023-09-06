let cont=document.querySelector("img");
let icon=document.querySelector("i");

cont.addEventListener("dblclick",()=>{
    icon.style.transform="translate(-50%,-50%) scale(2)"
    icon.style.color="red";
    setTimeout(()=>{
        icon.style.transform="translate(-50%,-50%) scale(1)";
        icon.style.transform="translate(-50%,-50%) scale(0)";
    },1000)
})