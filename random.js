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
    for (let i in y) {
        randomGenAlt(y[i])
    }
    reroll(x, createValueArray(x))
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

function reroll(k, values) {
    while (hasDuplicates(values)) {
        randomMutaz()
        values = []
        for (let p in k) {
            if (k[p].value != undefined)
                values.push(k[p].value)
        }
    }
    let dopali = false
    let triali = false
    for (let p in k) {
        //parsa a float
        if (k[p].value != undefined) {
            if (k[p].value == "5a")
                dopali = true;
            if (k[p].value == "1a")
                triali = true;
        }
    }
    while (dopali && triali) {
        randomMutaz()
        dopali = false
        triali = false
        for (let p in k) {
            if (k[p].value != undefined) {
                if (k[p].value == "5a")
                    dopali = true;
                if (k[p].value == "1a")
                    triali = true;
            }
        }
    }
    while ((dopali || triali) && document.getElementById("gen").value <= 1) {
        randomMutaz()
        dopali = false
        triali = false
        for (let p in k) {
            if (k[p].value != undefined) {
                if (k[p].value == "5a")
                    dopali = true;
                if (k[p].value == "1a")
                    triali = true;
            }
        }
    }
    let gennaro = document.getElementById("gen").value
    while (gennaro <= 1 && document.getElementById("nmuta").value>=3){
        randomGen("gen")
        gennaro = document.getElementById("gen").value
    }
}

function createValueArray(k) {
    let values = [];
    for (let p in k) {
        if (k[p].value != undefined)
            values.push(k[p].value)
    }
    return values
}