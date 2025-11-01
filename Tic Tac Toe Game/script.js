console.log("Let's play");

let box = document.querySelectorAll(".box");
let msg = document.querySelector(".message");
let crossBtn = document.querySelector(".cross");

let turnO = true;
let count = 0;

const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const disableBox = () => {
    for (const boxes of box) {
        boxes.disabled = true;
        
    }
}

const EnableBox = () => {
    for (const boxes of box) {
        boxes.disabled = false;
        
    }
}

const gameDraw = () => {
    document.querySelector(".messageText").textContent = `Draw`;
    msg.classList.remove("message-hidden");
    crossBtn.classList.add("cross");
    msg.style.display = "flex";

    disableBox();
}



function showWinner(winner) {
    msg.classList.remove("message-hidden");
    crossBtn.classList.add("cross");
    document.querySelector(".messageText").textContent = `Player ${winner} wins!!`;
    msg.style.display = "flex";

    //For Disabling the box
    disableBox();

}

const checkWinner = () => {
    for (let pattern of winningPattern) {

        let pos1Val = box[pattern[0]].innerHTML;
        let pos2Val = box[pattern[1]].innerHTML;
        let pos3Val = box[pattern[2]].innerHTML;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
    return false;
};


box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            //player O
            box.innerHTML = "O"
            turnO = false;
        } else {
            //player X
            box.innerHTML = "X"
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

let cross = document.querySelector(".cross img");
cross.addEventListener("click", () => {
    msg.classList.add("message-hidden");
    msg.style.display = "none";
});

let newGame = document.querySelector(".newGameBtn");
newGame.addEventListener("click", () => {
    box.forEach((box) => {
        box.innerHTML = "";
        EnableBox();
    })
    count = 0;
    turnO = true;
    msg.classList.add("message-hidden");
    msg.style.display = "none";
});

