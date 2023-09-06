
let elem=document.querySelectorAll(".ele");
let imge=document.querySelectorAll(".ele img");

// console.log(elem[0]);
// let first_el=elem[0];
// console.log("Dhananjay")
// console.log(elem[0].childNodes[1].textContent)

elem.forEach((element)=>{
    element.addEventListener("mouseenter",()=>{
        element.childNodes[3].style.opacity=1;
        

    })
    element.addEventListener("mouseleave",()=>{
        element.childNodes[3].style.opacity=0;
    })
    element.addEventListener("mousemove",(info)=>{
        element.childNodes[3].style.left=info.x+"px";
        // element.childNodes[3].style.top=info.y+"px";
    })
})


console.log(elem[0].childNodes[3]);
