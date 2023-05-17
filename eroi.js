const alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM"
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//GHASTLY, JASON, ENDRAKE, ZELENA, EXP, HAILEY
const eroi = ["Ghastly", "Jason", "Endrake", "Zelena", "Exp", "Hailey", "Alex", "Savvy"]
const draghi = ["Comune", "Fuoco", "Veleno", "Oppio", "Elettrico", "Acido"]
let rnd, rnd2

function gen() {
    num()
    genitori()
    altro()  
}

function num() {
    rnd = Math.floor(Math.random() * eroi.length)
    rnd2 = Math.floor(Math.random() * eroi.length)
    if (rnd2 == rnd) {
        while (rnd2 == rnd) {
            rnd2 = Math.floor(Math.random() * eroi.length)
        }
    }
}

function genitori() {
    let a = eroi[rnd]
    let b = eroi[rnd2]
    document.getElementById("genitori").innerHTML = `<b>Genitori:</b> ${a}, ${b}`
}

//faccia, capelli, occhi, corporatura, personalita
function altro() {
    //let rndb = Math.random() < 0.66;
    document.getElementById("faccia").innerHTML = "<b>Somiglianza: </b>" + ((Math.random() < 0.66) ? ((Math.random() < 0.5) ? eroi[rnd] : eroi[rnd2]) : "Entrambi")
    document.getElementById("capelli").innerHTML = "<b>Capelli: </b>" + ((Math.random() < 0.66) ? ((Math.random() < 0.5) ? eroi[rnd] : eroi[rnd2]) : "Entrambi")
    document.getElementById("occhi").innerHTML = "<b>Occhi: </b>" + ((Math.random() < 0.66) ? ((Math.random() < 0.5) ? eroi[rnd] : eroi[rnd2]) : "Entrambi")
    document.getElementById("corporatura").innerHTML = "<b>Corporatura: </b>" + ((Math.random() < 0.5) ? eroi[rnd] : eroi[rnd2])
    document.getElementById("personalita").innerHTML = "<b>Personalit\xE0 prevalente: </b>" + ((Math.random() < 0.66) ? ((Math.random() < 0.5) ? eroi[rnd] : eroi[rnd2]) : "Entrambi")
    document.getElementById("genere").innerHTML = "<b>Genere: </b>" + ((Math.random() < 0.5) ? "M" : "F")
}