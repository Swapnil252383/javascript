const but=document.querySelectorAll(".choise");
const win=document.querySelector(".win");
const b=document.querySelector(".body")


const comp=()=>{
    const option=["rock", "paper", "s"];
    const choise=Math.floor(Math.random()*3);
    return option[choise];
}

const playgame = (user)=>{
    console.log("user choice  "+user);
    const comgen=comp();
    console.log(comgen);
    if(user===comgen){
        console.log("drow");
        win.innerText="drow";
    }
    else if(user==="rock"){
        if(comgen==="paper"){
            console.log("compwin");
            win.innerText="compwin";
        }
        else{
            console.log("user win");
            win.innerText="userwin";
        }

    }
    else if(user==="paper"){
        if(comgen==="s"){
            console.log("compwin");
            win.innerText="compwin";
        }
        else{
            console.log("user win");
            win.innerText="userwin";
        }

    }
    else if(user==="s"){
        if(comgen==="rock"){
            console.log("compwin");
            win.innerText="compwin";
        }
        else{
            console.log("user win");
            win.innerText="userwin";
        }

    }

    else{
        console.log("not draw");
        
    }
}


but.forEach((cho)=>{
    cho.addEventListener("click", ()=>{
        const user=cho.getAttribute("id");
        playgame(user);
    })
})


console.log(b.firstChild.textContent)
