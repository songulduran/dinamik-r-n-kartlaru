const urunler = [
  { ad: "Sony WH-1000XM5", fiyat: 14500, resim: "sony_xm5.jpg" },
  { ad: "Apple AirPods Pro 2", fiyat: 9500, resim: "airpods_pro2.jpg" },
  { ad: "Bose QuietComfort 45", fiyat: 12000, resim: "bose_qc45.jpg" },
  { ad: "JBL Live 660NC", fiyat: 6000, resim: "jbl_660nc.jpg" },
  { ad: "Sennheiser HD 450BT", fiyat: 7500, resim: "sennheiser_hd450bt.jpg" },
  { ad: "Anker Soundcore Life Q35", fiyat: 4500, resim: "anker_q35.jpg" },
];

function olustur() {
  let gosteri = document.getElementById("kartAlani");
  let adet = Number(document.getElementById("adet").value) || urunler.length;
  gosteri.innerHTML = "";

  if (adet > urunler.length) adet = urunler.length;

  for (let i = 0; i < adet; i++) {
    let urun = urunler[i];

    gosteri.innerHTML += `
      <div class="kart ${urun.fiyat > 10000 ? "pahali" : ""}">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
  }
}

function ara() {
  let urunlerDiv = document.getElementById("kartAlani");
  let aramaMetni = document.getElementById("arama").value.toLowerCase();
  urunlerDiv.innerHTML = "";

  let filtre = urunler.filter(u => u.ad.toLowerCase().includes(aramaMetni));

  filtre.forEach(urun => {
    urunlerDiv.innerHTML += `
      <div class="kart ${urun.fiyat > 10000 ? "pahali" : ""}">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
  });
}

function sirala() {
  let urunlerDiv = document.getElementById("kartAlani");
  let adet = Number(document.getElementById("adet").value) || urunler.length;
  urunlerDiv.innerHTML = "";

  let sirali = [...urunler].sort((a, b) => a.fiyat - b.fiyat);

  sirali.slice(0, adet).forEach(urun => {
    urunlerDiv.innerHTML += `
      <div class="kart ${urun.fiyat > 10000 ? "pahali" : ""}">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
  });
}

function pahali() {
  let urunlerDiv = document.getElementById("kartAlani");
  urunlerDiv.innerHTML = "";

  let pahaliUrunler = urunler.filter(u => u.fiyat > 10000);

  pahaliUrunler.forEach(urun => {
    urunlerDiv.innerHTML += `
      <div class="kart pahali">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
  });
}

