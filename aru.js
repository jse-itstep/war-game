let buyEnergy = () => {
    if(coins >= 50){
        coins -= 50
        energy += 1

        energySpan.innerHTML = energy
        coinsSpan.innerHTML = coins

    } else {alert("You dont have enough coins")}
}