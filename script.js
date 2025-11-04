// 1. Testu-Aldatzailea
function aldatuTestua() {
    const p = document.getElementById("testu_aldagarria");
    p.textContent = "Aratz mosolo"
}

// 2. Kolore Txandakatzailea (Estiloak JS-tik aplikatuz)
function aldatuKolorea() {
 // 1. HTML elementua lortu (h1-a, gure adibidean)
    const p = document.getElementById("kolore_aldagarria");
    
    // 2. Elementuaren uneko kolorea egiaztatu
    const unekoKolorea = p.style.color;

    // 3. Logika aplikatu (Baldintzapeko egitura: if...else)
    if (unekoKolorea === "blue") {
        p.style.color = "black"; // edo "black", atzeko planoaren arabera
    } else {
        p.style.color = "blue";
    }
}

// 3. Elementuen Ezkutagailua (display propietatea aldatuz)
function txandakatuEzkutatzea() {
    const p = document.getElementById("ezkutatu_hau");
    p.textContent = " "
}

// 4. Batuketa Kalkulagailua
function batuketaEgin() {
const z1 = Number(document.getElementById("zenbaki1").value);
  const z2 = Number(document.getElementById("zenbaki2").value);
  const emaitza = z1 + z2;
  document.getElementById("emaitza4").innerText = emaitza;
}

// 5. Testu-Gehitzailea (Elementu berriak sortzea)
function gehituElementua() {
const testua = document.getElementById("elementu_berria").value.trim();

 if (testua === "") return;

    const li = document.createElement("li");
    li.textContent = testua;
    document.getElementById("zerrenda_dinamikoa").appendChild(li);
    document.getElementById("elementu_berria").value = "";
}

// 6. Kontagailua (aldagai globalak erabiliz)
// Oharra: klikKopurua HTML amaierako <script> blokean hasieratuta dago
function kontatuKlik() {
    klikKopurua = klikKopurua + 1; // Edo klikKopurua++
    document.getElementById("kontagailu_emaitza").textContent = klikKopurua;
} 

// 7. Zenbaki Asmatzearen Jokoa
// Oharra: zenbakiSekretua HTML amaierako <script> blokean hasieratuta dago
function konprobatuZenbakia() {
    const sarrera = parseInt(document.getElementById("asmatutako_zenbakia").value);
    const emaitza = document.getElementById("joko_emaitza");
    if (sarrera === zenbakiSekretua) {
        emaitza.textContent = "Zorionak! Asmatu duzu!";
        emaitza.style.color = "green";
        zenbakiSekretua = Math.floor(Math.random() * 5) + 1;
    } else {
        emaitza.textContent = "Erreala bezain txarragoa zara denboraldi honetan";
        emaitza.style.color = "red";
    }
}


// 8. Atzeko Planoaren Kolore-Aldatzailea (Random)
function aldatuAtzekoPlanoarenKolorea() {
 const randomKolorea = "#" + Math.floor(Math.random() * 16757215).toString(16).padStart(6, "0");
  document.body.style.backgroundColor = randomKolorea;
}