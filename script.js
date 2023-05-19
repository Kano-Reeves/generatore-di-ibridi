let mutazioni = [
    {
        "nome": "Chiazza di pigmento alla base della coda",
        "val": "75a"
    },
    {
        "nome": "Chiazza di pigmento alla base delle ali",
        "val": "75b"
    },
    {
        "nome": "Scaglie sul collo",
        "val": "75c"
    },
    {
        "nome": "Scaglie sulla nuca",
        "val": "75d"
    },
    {
        "nome": "Scaglie sull'addome",
        "val": "75e"
    },
    {
        "nome": "Orecchie deformate",
        "val": "20a"
    },
    {
        "nome": "Pseudo artigli",
        "val": "20b"
    },
    {
        "nome": "Scaglie sugli avambracci",
        "val": "20c"
    },
    {
        "nome": "Scaglie sui palmi delle mani",
        "val": "20d"
    },
    {
        "nome": "Scaglie sulle gambe",
        "val": "20e"
    },
    {
        "nome": "Scaglie sulla schiena",
        "val": "20f"
    },
    {
        "nome": "Chiazze di pigmento sotto gli occhi",
        "val": "15a"
    },
    {
        "nome": "Chiazze di pigmento in corrispondenza di scaglie",
        "val": "15b"
    },
    {
        "nome": "Bioluminescenza",
        "val": "15c"
    },
    {
        "nome": "Chiazze di pigmento non in corrispondenza di occhi. scaglie. ali o coda",
        "val": "10a"
    },
    {
        "nome": "Spine sulla schiena",
        "val": "10b"
    },
    {
        "nome": "Doppio paio di ali",
        "val": "5a"
    },
    {
        "nome": "Triplo paio di ali",
        "val": "1a"
    }
]

function nmut(form) {
    let c = document.getElementById("mutlist");
    c.innerHTML = ""
    const a = form.nmuta.value;
    //let b = document.createElement('select')
    for (let i = 0; i < a; i++) {
        let b = document.createElement('select')
        b.setAttribute("onchange", "res(form)")
        b.name = "mut" + i
        b.id = "mut" + i
        b.setAttribute("class", "field")
        let mut = mutazioni
        for (let count in mut) {
            let d = document.createElement('option')
            d.value = mut[count].val;
            d.innerHTML = mut[count].nome;
            b.appendChild(d)
        }
        c.append(b)
    }
    res(form)
}

function res(form) {
    let a = document.getElementById("warns")
    a.innerHTML = ""
    let b = 0;
    let nmutazioni = document.getElementById("nmuta").value;
    let c;
    switch (nmutazioni) {
        case "0":
            c = 10;
            break;
        case "3":
            c = 10;
            break;
        case "1":
            c = 60;
            break;
        case "2":
            c = "20";
            break;
        case "4":
            c = 5
            break;
        case "5":
            c = 3
            break
        case "6":
            c = 1.5
            break
        case "7":
            c = 0.5
    }
    let k = document.getElementById("mutlist").children
    let mutaz = 0;
    let nmutazionigiusto = 0;
    for (let p in k) {
        //parsa a float
        if (k[p].value != undefined) {
            let h = k[p].value.replace(/\D/g, '');
            mutaz += parseFloat(h);
            nmutazionigiusto++;
        }
    }
    if (nmutazionigiusto > 0) {
        mutaz /= nmutazionigiusto;
    } else {
        mutaz = 1;
    }
    let z = form.codawide.value.replace("b", "")
    b += mutaz * parseFloat(c);
    b += form.alidim.value * form.alitra.value;
    b += form.codalong.value * parseInt(form.codawide.value);
    let cock = document.getElementById("tot")
    cock.innerHTML = b.toFixed(2);
    if (form.gen.value == 0 || form.gen.value == 1) {
        if (form.nmuta.value > 2 && form.gen.value == 0) {
            a.innerHTML += "Combinazione illegale: inserisci un numero di mutazioni minore o uguale a 2 <br>"
        }
        for (let p in k) {
            //parsa a float
            if (k[p].value != undefined) {
                if (k[p].value == "5a" || k[p].value == "1a") {
                    a.innerHTML += "Combinazione illegale: un ibrido di prima o seconda generazione non pu&ograve; avere multiple paia di ali <br>"
                    break
                }
            }
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
    if (dopali && triali){
        a.innerHTML += "Combinazione illegale: doppie ali e triple ali non occorrono mai insieme<br>"
    }

    let values = [];
    for (let p in k) {
        if (k[p].value != undefined)
            values.push(k[p].value)
    }

    if (hasDuplicates(values)) {
        a.innerHTML += "Combinazione illegale: Non è possibile avere la stessa mutazione due volte"
    }
}

function hide(hide, unhide, hide2) {
    document.getElementById(hide).setAttribute('class', 'hidden');
    document.getElementById(unhide).setAttribute('class', 'shorter');
    document.getElementById(hide2).setAttribute('class', 'hidden');
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}
