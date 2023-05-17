function randomGen(select) {
    let x = document.getElementById(select);
    let y = []
    for (i = 0; i < x.length; i++) {
        y.push(x[i])
    }
    let z = y[Math.floor(Math.random() * y.length)]
    x.selectedIndex = z.value
    x.value = z.value
}

function randomIb(form) {
    randomGen("gen")
    randomGen("dragosel")
    randomGen("alidim")
    randomGen("alitra")
    randomGen("codalong")
    randomGen("codawide")
    randomGenMuta("nmuta", form)
    wiki(form)
    measures()
}

function randomGenMuta(select) {
    let x = document.getElementById(select);
    let y = []
    for (i = 0; i < x.length; i++) {
        y.push(x[i])
    }
    let z = y[Math.floor(Math.random() * y.length)]
    x.selectedIndex = z.value
    x.value = z.value
    nmut(form)
    setTimeout(randomMutaz(), 50)
}

function randomMutaz() {
    let x = document.getElementById("mutlist").children;
    let y = []
    for (i = 0; i < x.length; i++) {
        y.push(x[i])
    }
    console.log(y)
    for (let i in y) {
        randomGenAlt(y[i])
    }
}

function randomGenAlt(select) {
    let x = select;
    let y = []
    for (i = 0; i < x.length; i++) {
        y.push(x[i])
    }
    let z = y[Math.floor(Math.random() * y.length)]
    x.selectedIndex = z.value
    x.value = z.value
}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}