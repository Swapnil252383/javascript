const grad=(ai, dbms, cc)=>{
        let total=ai+dbms+cc;
        let pre=(total/300)*100;
        console.log(pre);
        if(pre>90){
            console.log("a");
        }
        else if(pre >70){
            console.log("b");
        }

        else{
            console.log("faile");
        }
}

grad(10,10,10);