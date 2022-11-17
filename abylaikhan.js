function buyEnergy(){
     if(coins >= 100){
         coins -= 100;
         energy += 1;
         
         energySpan.innerHTML = energy;
         coinSpan.innerHTML = coins;
     }else{
         alert("Not enough coins!");
     }
 }
