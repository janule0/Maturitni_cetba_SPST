let vybraneKnihy = JSON.parse(localStorage.getItem('mojeMaturitniCetba')) || [];

function toggleVyber(id) {
    const index = vybraneKnihy.indexOf(id);

    if (index === -1) {
        if (vybraneKnihy.length < 20) {
            vybraneKnihy.push(id);
        } else {
            alert("Maximální počet knih je 20.");
            return;
        }
    } else {
        vybraneKnihy.splice(index, 1);
    }

    localStorage.setItem('mojeMaturitniCetba', JSON.stringify(vybraneKnihy));
    
    aktualizujPocitadlo();
    vykresliTabulku(); 
}

function aktualizujPocitadlo() {
    const pocet = vybraneKnihy.length;
    const element = document.getElementById('pocitadlo-text');
    /*
    if (element) {
        element.innerText = `Vybráno: ${pocet} z 20`;
    }
    */
}