let url="https://jsonplaceholder.typicode.com/todos/1";
let btn=document.querySelector(".btn");
let aa=document.querySelector(".a");
const get=async ()=>{
    let respons=await fetch(url);
    console.log(respons.status);
    let data= await respons.json();
    console.log(data);
    console.log(data.title);
    aa.innerText=data.title;

}

btn.addEventListener("click", get);


