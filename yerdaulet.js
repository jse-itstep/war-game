let hp = document.querySelector("#hp");
let energy = document.querySelector("#energy");
let coins = document.querySelector("#coins");

function heal() {
    let new_hp = (+hp.innerText + 20);
    let new_coins = +coins.innerText;
    if (+coins.innerText >= 50) { 
        console.log(new_hp, new_coins)
        coins.innerText = (new_coins - 50);
        hp.innerText = new_hp;
    }
    else {
        coins.innerHTML = 0;
    }
}   

function buyEnergy() {
    let new_energy = +energy.innerText + 1;
    let new_coins = +coins.innerText;
    if (+coins.innerText >= 50) { 
        coins.innerHTML = new_coins - 50;
        energy.innerHTML = new_energy;
    }
    else {
        coins.innerHTML = 0;
    }
}