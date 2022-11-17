let hp = 100;
let energy = 5;
let coins = 500;

const hpSpan = document.querySelector("#hp");
const coinSpan = document.querySelector("#coins");
const energySpan = document.querySelector("#energy");

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

function startBattle(){
    if(energy > 0){
        energy--;
        let roundsCount = +prompt();

        if(roundsCount >= 2){
            for(let i = 0; i < roundsCount; i++){
                hp -= Math.round(Math.random() * 30) + 10;
            }
    
            if(hp > 0){
                coins += roundsCount * 100;
                alert("You win the battle!")

                if(coins >= 1000){
                    alert("You won the game!");
                }
            }else{
                alert("You lose!");
            }
    
            hpSpan.innerHTML = hp;
            coinSpan.innerHTML = coins;
            energySpan.innerHTML = energy;
        }else{
            alert("Minimun 2 fights!");
        }
    }
}