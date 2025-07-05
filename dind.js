const person = { name: "Swapnil" };
function sayName() {
  console.log(this.name);
}

const sayPersonName = sayName.bind(person);
sayPersonName(); // always prints "Swapnil"
