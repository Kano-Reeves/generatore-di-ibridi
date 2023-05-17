function randomIntFromInterval(min, max) { // min and max included 
    return parseInt(Math.floor(Math.random() * (max - min + 1) + min))
}

function measures() {
    document.getElementById("ngenerazione").innerHTML = parseInt(document.getElementById("gen").value)+1
    altezza()
    measAli()
    measCoda()
    nome()
    generaDrago()
    stats()
}

let alt;

function altezza() {
    alt = randomIntFromInterval(150, 200)
    document.getElementById("altezza").innerHTML = alt + " cm"

    let peso = randomIntFromInterval(100, 160)
    document.getElementById("peso").innerHTML = peso+ " kg"
}

function measAli() {
    document.getElementById("dimensioniali").innerHTML = switchAli(document.getElementById("alidim").value, "Piccole", "Medie", "Grandi", "Molto grandi")
    document.getElementById("traspali").innerHTML = (document.getElementById("alitra").value==60)?"opache":"trasparenti"
    wingspan()
    altAli()
}

function switchAli(a, valpiccole, valmedie, valgrandi, valmoltograndi) {
    switch (a) {
        case "20":
            return valpiccole
        case "60":
            return valmedie
        case "15":
            return valgrandi
        case "5":
            return valmoltograndi
    }
}

function wingspan() {
    let a = document.getElementById("alidim").value
    let b = 0;
    b = switchAli(a,
        randomIntFromInterval(195, 205),
        randomIntFromInterval(235, 255),
        randomIntFromInterval(255, 265),
        randomIntFromInterval(295, 305))
    b /= 100;
    document.getElementById("apAlare").innerHTML = (alt * b).toFixed(2) + " cm"
}

function altAli() {
    let a = document.getElementById("alidim").value
    let b = 0;
    b = switchAli(a, 
        randomIntFromInterval(64, 68), 
        randomIntFromInterval(85, 89), 
        randomIntFromInterval(93, 97), 
        randomIntFromInterval(108, 112))
    b /= 100;
    document.getElementById("altezzaAli").innerHTML = (alt * b).toFixed(2) + " cm"
}

function measCoda() {
    document.getElementById("lunghezzacoda").innerHTML = switchLungCoda(document.getElementById("codalong").value, "Corta", "Lunga", "Molto lunga")
    document.getElementById("diametrocoda").innerHTML = switchdiaCoda(document.getElementById("codawide").value, "grossa", "fine", "molto fine")
    lungCoda()
    diaCoda()
}

function switchLungCoda(a, valcorta, vallunga, valmoltolunga) {
    switch (a) {
        case "30":
            return valcorta
        case "50":
            return vallunga
        case "20":
            return valmoltolunga
    }
}
function switchdiaCoda(a, valgrossa, valfine, valmoltofine){
    switch (a) {
        case "30":
            return valgrossa
        case "40":
            return valfine
        case "30b":
            return valmoltofine
    }
}

function lungCoda() {
    let a = document.getElementById("codalong").value
    let b = 0;
    b = switchLungCoda(a,
        randomIntFromInterval(40, 50), 
        randomIntFromInterval(50, 70),
        randomIntFromInterval(70, 90))
    b /= 100;
    document.getElementById("lungCoda").innerHTML = (alt * b).toFixed(2) + " cm"
}
function diaCoda() {
    let a = document.getElementById("codawide").value
    let b = 0;
    b = switchdiaCoda(a,
        randomIntFromInterval(20, 25),
        randomIntFromInterval(15, 20),
        randomIntFromInterval(10, 15))
    document.getElementById("largCoda").innerHTML = b + " cm"
}

function nome(){
    let a= parseInt(document.getElementById("gen").value)+1 + "-"
    for(let i = 0; i<5; i++){
        a+=randomIntFromInterval(0,9)
    }
    document.getElementById("soggetto").innerHTML = a
}

let draconici = ["Comune", "Fuoco", "Veleno", "Oppio", "Acido", "Elettrico"]

function generaDrago(){
    document.getElementById("nomedrago").innerHTML= draconici[document.getElementById("dragosel").value]
}

function stats(){
    document.getElementById("speedmax").innerHTML = switchAli(document.getElementById("alidim").value, randomIntFromInterval(850,950), randomIntFromInterval(950,1050), randomIntFromInterval(1200,1300), randomIntFromInterval(1250, 1350)) + " km/h"
    document.getElementById("resistmax").innerHTML = randomIntFromInterval(8000,10000) + " N"
    document.getElementById("forzamax").innerHTML = randomIntFromInterval(8000,10000) + " N"
}