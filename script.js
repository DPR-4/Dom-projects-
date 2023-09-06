let statuss=document.querySelector("h5");
// alert(status)

let addfriend=document.querySelector("#add");

let flag=0;
addfriend.addEventListener("click",()=>{
    if(flag==0){
        statuss.style.color="green";
        statuss.innerHTML="Friends";
        addfriend.innerHTML="Remove Friend";
        addfriend.style.color="red";
        flag=1;
    }
    else{
        statuss.style.color="red";
        statuss.innerHTML="Stranger";
        addfriend.innerHTML="Add friend";
        addfriend.style.color="#fff";
        flag=0;
    }
    
})

