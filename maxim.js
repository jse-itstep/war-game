let coins = 500
let hp = 100
let energy = 5

let hpIndicator = document.querySelector("#hp")
let energyIndicator = document.querySelector("#iner")
let coinsIndicator = document.querySelector("#coins")



let damage = 0

function startBattle(){
    
    let battleDiv = document.querySelector("#battle")
    battleDiv.innerHTML = `
    <input type="number" id="battles"></input>
    `
    let battles = document.querySelector("#battles")
    energyIndicator.innerHTML--
    battles.addEventListener("change", () => {
        battleDiv.innerHTML = ` `
           
            for(let i = 0; i < battles.value; i++){ 
                damage = hp - Math.floor((Math.random() * 30) + 70)
                console.log(damage)
                hpIndicator.innerHTML -= damage
                coins += 100
                coinsIndicator.innerHTML = coins
                
                // if(coins >= 1000){
                //     alert("Congratulations you win")
                // }
                
            }
            if(hpIndicator.innerHTML <= 0){
                alert("You lose!")
            }   
        })
        
    }
    











function heal(){
    damage = +hpIndicator.innerHTML
    if(coins >= 50){
        coins -= 50
        damage += 20
        hpIndicator.innerHTML = damage
        coinsIndicator.innerHTML = coins
    }else{
        alert("Not enough money!")
    }
}

function Energy(){
    if(coins >= 50){
        coins -= 50
        energy++
        coinsIndicator.innerHTML = coins
        energyIndicator.innerHTML = energy
    }else{
        alert("Not enough money!")
    }
}

