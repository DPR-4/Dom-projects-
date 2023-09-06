let box=document.querySelector("#box");
let circle=document.querySelector("#circle");

box.addEventListener("mousemove",(thisis)=>{
    circle.style.left=thisis.x+"px";
    circle.style.top=thisis.y+"px";
})
