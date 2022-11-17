let hp = 100;
let energy = 5;
let coins = 500;

const hpSpan = document.querySelector("#hp");
const coinSpan = document.querySelector("#coins");
const energySpan = document.querySelector("#energy");

function startBattle(){
    let divBattle = document.querySelector("#battle");
    divBattle.innerHTML = `<input type="text">`
}


function heal(){
    if(coins >= 50){
        coins -= 50;
        hp += 20;
        hpSpan.innerHTML = hp;
        coinSpan.innerHTML = coins;
    }else{
        alert("Not enough coins!");
    }
}

function buyEnergy(){
    if(energy >= 5){
        coins -= 50;
        energySpan.innerHTML = energy;
        coinSpan.innerHTML = coins;
    }
}


