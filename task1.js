const sal=(name, basicsalary, tax)=>{
        console.log(name);
        let taxamount=(basicsalary*tax)/100;
        let salary=basicsalary-taxamount;
        console.log(salary);
        console.log(taxamount);
}

sal("swapnil", 3000, 2);