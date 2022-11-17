let battleStarted = false;

function startBattle() {
    if(battleStarted == false){
        battleStarted = true
        let divResult = document.querySelector("#result_div")
        divResult.innerHTML += `<input type="text" id="battle_input"> <button onclick="battleBegin()">Start</button>`
    }
}