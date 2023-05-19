let content = "";
function collect() {
    content = ""
    let fields = document.getElementsByClassName("field")
    content += "Gen: " + (parseInt(fields[0].value) + 1);
    content += "\nDrago: " + draconici[fields[1].value]
    content += "\nAli: " + switchAli(fields[2].value, "Piccole", "Medie", "Grandi", "Molto grandi")
    content += (fields[3].value == 60) ? " e opache" : " e trasparenti"
    content += "\nCoda: " + switchLungCoda(fields[4].value, "Corta", "Lunga", "Molto lunga")
    content += " e " + switchdiaCoda(fields[5].value, "grossa", "fine", "molto fine")
    content += "\nNumero di mutazioni: " + fields[6].value + "\nMutazioni: \n"

    let b = createValueArray(fields)
    for (let a in mutazioni) {
        if (b.includes(mutazioni[a].val)) {
            content += "\t"+mutazioni[a].nome + "\n"
        }
    }
    content +="Punteggio di rarità: "+ document.getElementById("tot").innerHTML
}

const downloadFile = () => {
    collect()
    const link = document.createElement("a");
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "ibrido.txt";
    link.click();
    URL.revokeObjectURL(link.href);
 };