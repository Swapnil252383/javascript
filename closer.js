function outer() {
    let secret = "I";
  
    function inner() {
        secret="king"
      console.log(secret); // inner "remembers" secret
    }
  
    return inner;
  }
  
  const myFunc = outer(); // outer runs, finishes
  myFunc(); // prints: I am a secret
  