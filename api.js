fetch("https://jsonplaceholder.typicode.com/users").then((r)=>{
    return r.json();
}).then((dat)=>{
    console.log(dat);

}).catch((e)=>{
    console.log(e);
})