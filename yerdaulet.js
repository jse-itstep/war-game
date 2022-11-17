console.log("qweeerrr");

let hp = document.querySelector("#hp");
let energy = document.querySelector("#energy");
let coins = document.querySelector("#coins");

function heal() {
    let new_hp = +hp.innerText + 20;
    let new_coins = +coins.innerText;
    if (+coins.innerText >= 50) { 
        coins.innerHTML = new_coins - 50;
        hp.innerHTML = new_hp;
    }
    else {
        coins.innerHTML = 0;
        alert("asd")
    }
}   