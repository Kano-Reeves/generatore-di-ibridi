let ig = [
    {
        "pe": "Necessarie in grandi quantit&#224, sia interne, per facilitare distribuzione di sangue/ossigeno, che esterne per potenziare principalmente le gambe (salto potenziato fondamentale per partenza di volo da terra veloce)",
        "ap": "Strettamente chirgurgica, ali e coda sono installati chirurgicamente al soggetto, il che permette la scelta di tratti ma anche prevede tempi di guarigione pi&ugrave o meno lunghi e bisogno di allenamento di volo",
        "p": "Nessuno di nota, la forza potrebbe essere solo leggermente aumentata",
        "pm": "Bassa dato che i tratti draconici vengono installati da esterno, le mutazioni presenti sono date dall'utilizzo di xenorfina",
        "bx": "Elevato, il corpo del soggetto ne ha bisogno cos&igrave che il suo sistema immunitario non attacchi le parti trapiantate "
    },
    {
        "pe": "Necessarie solo internamente, per facilitare il flusso di sangue e ossigeno",
        "ap": "Chirurgica per ali e coda, modifica genetica per occhi e muscolatura, questa generazione &egrave la prima a presentare dentatura da carnivoro, richiedono comunque allenamento di volo, tempi di guarigione ridotti, minimo tempo di mutazione",
        "p": "Forza e riflessi notevolmente aumentati rispetto alla generazione precedente, vista migliorata, accenni di rigenerazione dei tessuti",
        "pm": "Media, le modifiche apportate al dna del soggetto rendono la possibilit&#224 di mutazioni pi&ugrave alta",
        "bx": "Medio-Alto, le modifiche genetiche permettono di accettare pi&ugrave facilmente le parti trapiantate "
    },
    {
        "pe": "Necessarie ma in quantit&#224 molto minime ed esclusivamente internamente per facilitare il cuore",
        "ap": "Molto spesso esclusivamente per via di mutazione genetica, alcuni soggetti necessitano allenamento di volo mentre altri non sembrano averne bisogno, i tempi di guarigione sono inesistenti e invece sostituiti da tempi di mutazione",
        "p": "Forza e riflessi hanno raggiunto i livelli voluti inizialmente, sollevano fino a un quintale con poco sforzo e hanno tempi di reazione quasi minimi, resistenza a ogni tipo di colpi, tossine, acidi e fiamme aumentate, rigenerazione dei tessuti pi&ugrave o meno lenta ma consistente, potere del drago minore a quello del drago donatore di dna, &egrave la prima generazione a presentare un potere legato al drago",
        "pm": "Medio-alta, &egrave la prima generazione a presentare multiple paia di ali come mutazione",
        "bx": "Basso, ma ancora necessario, la modifica genetica non &egrave ottimizzata per colpire il sistema immunitario totalmente "
    },
    {
        "pe": "Nessun bisogno di parti elettroniche",
        "ap": "Esclusivamente per via genetica, la chirurgia &egrave usata in maniera molto minima per sistemare piccoli difetti dati dalla modificazione genetica, tempi di guarigione inesistenti e tempi di mutazione ridotti, bisogno di allenamento al volo vicino al nullo",
        "p": "Forza e riflessi eccellenti, sollevano senza sforzo fino a un quintale e mezzo e i tempi di reazione sono minimi, resistenza a danni, tossine, acidi e fiamme aumentata leggermente rispetto alla generazione precedente, rigenerazione dei tessuti notevolmente pi&ugrave veloce, potere del drago minore o quasi corrispondente al drago donatore di dna",
        "pm": "Alta, tende anche a presentare pi&ugrave mutazioni delle generazioni precedenti",
        "bx": "Nullo, la modifica genetica &egrave ottimizzata affinch&egrave il sistema immunitario umano non attacchi il dna draconico "
    },
    {
        "pe": "Nessun bisogno di parti elettroniche",
        "ap": "Nati con mutazioni genetiche, sviluppati in laboratorio da due dna umani e uno draconico, non hanno bisogno n&egrave di tempi di allenamento, n&egrave di mutazione, si sviluppano velocemente fino ai 3-6 anni (l'et&#224 mentale e fisica viene raggiunta dopo 6 mesi dalla fine dell'incubazione) ma presentano invecchiamento rallentato dopo",
        "p": "Forza e riflessi pi&ugrave che eccellenti, sollevano quasi senza sforzo pi&ugrave di due quintali e i tempi di reazione sono sovrumani, risultano anche incredibilmente resistenti a danni, fiamme, acidi e tossi, presentano rigenerazione dei tessuti molto aumentata e veloce, in grado di rimarginare ferite anche grandi, il potere del drago &egrave uguale se non maggiore al drago donatore di dna",
        "pm": "Molto alta, la variazione genetica data dal doppio dna umano usato contribuisce a questo fattore",
        "bx": "Nullo, il sistema immunitario non ha ragione di attaccare se stesso"
    }
]

function infogen(form) {
    let b = form.gen.value;
    document.getElementById("numero").innerHTML = parseInt(b) + 1
    document.getElementById("generazione").innerHTML = `<b>Parti elettroniche:</b> ${ig[b].pe} <br><b>Aggiunta di parti: </b> ${ig[b].ap} <br><b>Potenziamenti:</b> ${ig[b].p} <br><b>Probabilit&#224 di mutazioni:</b> ${ig[b].pm} <br> <b>Bisogno di xenorfina:</b> ${ig[b].bx}`
    res(form)
}

let d = ["Nessuna abilit&agrave; secondaria", "Abilit&agrave; di sputare fiamme a temperature variabili dipendentemente dalla generazione di ibrido, in pi&ugrave; la temperatura corporea dell'ibrido &egrave; leggermente pi&ugrave; elevata", "Morso velenoso, il morso dell'ibrido &egrave; quasi sempre letale, in pi&ugrave; una percentuale di veleno &egrave; dissoluta nella saliva", "Abilit&agrave; di esalare un potente allucinogeno sottoforma di gas, e secondaria abilit&agrave; che gli permette di respirare in ambienti con ossigeno ridotto", "Abilit&agrave; di sputare un getto di gas molto acido e corrosivo, inoltre saliva e altri fluidi corporei sono notevolmente acidi", "Abilit&agrave; di rilasciare scariche elettriche molto potenti, inoltre sono spesso carichi staticamente"]

function infodrago(form) {
    let b = form.drago.value;
    let s = "";
    switch (b) {
        case "0": s = "comune"; break;
        case "1": s = "di fuoco"; break;
        case "2": s = "velenoso"; break;
        case "3": s = "oppio"; break;
        case "4": s = "acido"; break;
        case "5": s = "elettrico"; break;
    }
    document.getElementById("tipo").innerHTML = s;
    if (form.gen.value > 1)
        document.getElementById("drago").innerHTML = d[b];
    else
        document.getElementById("drago").innerHTML = "Gli ibridi di generazione precedente alla terza non presentano potere legato al drago";
    res(form)
}

let a = ["Garantisce maggiore velocit&agrave; a terra e, sebbene pi&ugrave; lente per volare, garantiscono maggiore agilit&agrave;, anche dato dal peso minore che garantisce una chiusura molto pi&ugrave; rapida, per&ograve; questo tipo di ali risulta pi&ugrave; lento per volare, data la minore forza, e la poca resistenza che fa all'aria le rende completamente inadatte per la picchiata", "Rendono il movimento a terra leggermente pi&ugrave; lento delle ali piccole, e performano leggermente peggio in spazi pi&ugrave; angusti, ma garantiscono un volo pi&ugrave; veloce in spazi aperti, la resistenza all'aria &egrave; maggiore il che le rende pi&ugrave; adatte per le picchiate corte e medio-corte, picchiate pi&ugrave; lunghe vengono fermate ma tendono a danneggiare l'ibrido per l'impatto", "Il movimento a terra &egrave; piuttosto impacciato, performano decisamente meno bene in spazi chiusi, ma hanno una potenza di partenza e velocit&agrave; in volo enorme, in pi&ugrave; rendono il virare in aria molto pi&ugrave; facile, si prestano bene a picchiate medio-lunghe senza troppi problemi di atterraggio, ma per picchiate molto lunghe tendono a danneggiare l'ibrido per l'impatto", "Il movimento a terra &egrave; molto impacciato per via dello strisciare a terra delle ali, la dimensione rende anche molto difficoltosa se non impossibile la partenza da terra ma gli ibridi che presentano questa dimensione di ali hanno bisogno di una differenza di altezza per la partenza, hanno per&ograve; una gigantesca potenza di volo, raggiungendo velocit&agrave; inaudite sebbene abbiano una grande resistenza con l'aria, che per&ograve; le rende anche molto utili per picchiate di qualsiasi velocit&agrave;, inoltre la dimensione e lo spessore le rendono ottime come scudo"]

function infoali(form) {
    let b = form.alidim.value;
    let s = ""
    switch (b) {
        case "20": s = "piccole"; b = 0; break;
        case "60": s = "medie"; b = 1; break;
        case "15": s = "grandi"; b = 2; break;
        case "5": s = "molto grandi"; b = 3; break;
    }
    document.getElementById("largtran").innerHTML = (form.alitra.value==40)?s+" e semitrasparenti":s+" e opache";
    document.getElementById("ali").innerHTML = (form.alitra.value==40)?a[b]+"<br><br>La trasparenza delle ali non influisce sulla resistenza o performance delle ali":a[b];
    res(form)
}

let cl = ["Questo tipo di coda rende il volo meno stabile, ma lo stare a terra molto pi&ugrave; agile, non avendo la coda che striscia a terra, nel combattimento a pari di dimensioni non risulte eccessivamente utile", "Questo tipo rende il volo pi&ugrave; stabile sia in rettilineo che nelle virate, impaccia di pi&ugrave; nel combattimento a terra, ma a pari di dimensioni sblocca una gamma di atterramenti con la coda", "Questo tipo da grandi vantaggi nel volo, soprattutto nelle virate anche strette, garantisce uno spostamento del peso molto agilmente anche con ali grandi, il combattimento a terra con questo tipo di coda tende a fare tanto uso di atterramenti"]

let cw = ["Risulta essere particolarmente pesante, adatta per il combattimento a parit&agrave; di dimensione, per colpi e atterramenti, ma &egrave; meno flessibile il che la rende meno utile per aggrappare eventuali avversari, in pi&ugrave; dato il suo peso maggiore, tende a rendere leggermenti pi&ugrave; veloci le picchiate", "&Egrave; la pi&ugrave; bilanciata tra le due, non ha la presa stretta della molto fine n&egrave; il colpo pesante della grossa, ma &egrave; abbastanza flessibile per aggrappare un'avversario e abbastanza forte per spedirlo a terra in un colpo o due, nel volo non fa molta differenza", "&Egrave; molto pi&ugrave; leggera delle altre due, e allo stesso modo molto pi&ugrave; flessibile, pu&ograve; facilmente arrotolarsi intorno a oggetti, ed &egrave; molto utile per aggrappare un'avversario, essendo leggera non aggiunge particolarmente al peso dell'ibrido per influenzare le picchiate, e non &egrave; abbastanza forte per spedire un'avversario a terra da sola, se &egrave; abbastanza fine &egrave; possibile usarla a mo' di frusta"]

function infocoda(form) {
    let x = form.codalong.value
    let j = ""
    switch (x) {
        case "30": j = "corta"; x = 0; break;
        case "50": j = "lunga"; x = 1; break;
        case "20": j = "molto lunga"; x = 2; break;
    }
    let y = form.codawide.value
    let k = ""
    switch (y) {
        case "30": k = "grossa"; y = 0; break;
        case "40": k = "fine"; y = 1; break;
        case "30b": k = "molto fine"; y = 2; break;
    }
    document.getElementById("lunglarg").innerHTML = `${j} e ${k}`
    document.getElementById("coda").innerHTML = `${cl[x]} <br><br> ${cw[y]}`
    res(form)
}

function wiki(form) {
    infogen(form)
    infodrago(form)
    infoali(form)
    infocoda(form)
    measures()
}

function wiki2(form) {
    infogen(form)
    infodrago(form)
    infoali(form)
    infocoda(form)
    measures()
    nmut(form)
}