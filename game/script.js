let hp = 100;
let energy = 5;
let coins = 500;
const hpSpan = document.querySelector("#hp");
const coinSpan = document.querySelector("#coins");
const energySpan = document.querySelector("#energy");

// function startBattle (){
//     let battleDiv = document.querySelector("#battle");
//     battleDiv.innerHTML += `<input type="number">`
// }

function heal (){
    // let healDiv = document.querySelector("#heal");
    // healDiv.innerHTML += `<input type="number">`
  if(coins >=50){
    coins -= 50;
    hp +=20;
    hpSpan.innerHTML = hp;
    coinSpan.innerHTML = coins;
  } else{
    alert("Not enough coins!")
  }

}

function buyEnergy (){
    // let buyEnergyDiv = document.querySelector("#buyEnergy");
    // buyEnergyDiv.innerHTML += `<input type="number">`
    if(coins >=50){
        coins -= 50;
        energy +=1;
        energySpan.innerHTML = energy;
        coinSpan.innerHTML = coins;
      } else{
        alert("Not enough coins!")
      }
    
}
 
