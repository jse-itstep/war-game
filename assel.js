let hp = 100;
let energy = 5;
let coins = 500;

let hpSpan = document.querySelector("#hp");
let energySpan = document.querySelector("#energy");
let coinsSpan = document.querySelector("#coins");
let countBattle = document.querySelector("#count_battle");

function heal(){
    if(coins >= 50){
        coins -= 50;
        hp += 20;

        hpSpan.innerHTML = hp;
        coinsSpan.innerHTML = coins;
    }else{
        alert("Sorry, you don't have enough coins!");
    }
}

function battle(){
    let inputBlock = document.querySelector(".input_block");
    inputBlock.style.display = "block";
}

function getGameResult(){
    if(+hpSpan.innerHTML >= countBattle.value && countBattle.value >= 2){
        energy -= 1;

        for(let i = 0; i <= countBattle.value; i++){
            coins += 100;
            hp -= Math.floor(Math.random() * (30 - 10) + 10);
        }
        energySpan.innerHTML = energy;
        coinsSpan.innerHTML = coins;
        hpSpan.innerHTML = hp;

        if(+hpSpan.innerHTML < 1){
            energySpan.innerHTML = 0;
            coinsSpan.innerHTML = 0;
            hpSpan.innerHTML = 0;
            alert("You are a looser!");
        };

        if(+hpSpan.innerHTML >= 1000){
            alert("You are a winner!");
        }
    }
    else alert("You need more battles");
}