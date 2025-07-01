let btn = document.querySelectorAll(".btn");
let first = true;

let winn = document.querySelector(".winnn");

const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

btn.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (box.innerHTML !== "") return;

    if (first) {
      box.innerHTML = "X";
      first = false;
    } else {
      box.innerHTML = "O";
      first = true;
    }

    winner();
  });
});

const winner = () => {
  for (let i of win) {
    let pos1 = btn[i[0]].innerText;
    let pos2 = btn[i[1]].innerText;
    let pos3 = btn[i[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      console.log("Winner:", pos1);
      winn.innerText = `${pos1} is the winner!`;

      btn.forEach((box) => box.setAttribute("disabled", "true"));
      break;
    }
  }
};
