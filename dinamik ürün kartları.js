let urunlerim = [];
const urunler = [
  { ad: "Sony WH-1000XM5", fiyat: 14500, resim: "resimler/sony_xm5.jpg" },
  {
    ad: "Apple AirPods Pro 2",
    fiyat: 9500,
    resim: "resimler/airpods_pro2.jpg",
  },
  { ad: "Bose QuietComfort 45", fiyat: 12000, resim: "resimler/bose_qc45.jpg" },
  { ad: "JBL Live 660NC", fiyat: 6000, resim: "resimler/jbl_660nc.jpg" },
  {
    ad: "Sennheiser HD 450BT",
    fiyat: 7500,
    resim: "resimler/sennheiser_hd450bt.jpg",
  },
  {
    ad: "Anker Soundcore Life Q35",
    fiyat: 4500,
    resim: "resimler/anker_q35.jpg",
  },
];

function olustur() {
  let gosteri = document.getElementById("kartAlani");
  let adet = document.getElementById("adet").value;
  gosteri.innerHTML = "";

  if (adet > urunler.length) {
    adet = urunler.length;
  }
  for (let i = 0; i < adet; i++) {
    urunlerim = urunler[i];

    if (urunlerim.fiyat > 10000) {
      gosteri.innerHTML += `
      <div class="kart pahali">
        <img src="${urunlerim.resim}" />
        <h3>${urunlerim.ad}</h3>
        <p>Fiyat: ₺${urunlerim.fiyat}</p>
      </div>
    `;
    } else {
      gosteri.innerHTML += `
      <div class="kart">
        <img src="${urunlerim.resim}" />
        <h3>${urunlerim.ad}</h3>
        <p>Fiyat: ₺${urunlerim.fiyat}</p>
      </div>
    `;
    }
  }
}
function ara() {
  let urunlerDiv = document.getElementById("kartAlani");
  let aramaMetni = document.getElementById("arama").value.toLowerCase();
  urunlerDiv.innerHTML = "";

  let filtreliUrunler = urunler.filter((urun) =>
    urun.ad.toLowerCase().includes(aramaMetni)
  );

  for (let i = 0; i < filtreliUrunler.length; i++) {
    let urun = filtreliUrunler[i];

    if (urun.fiyat > 10000) {
      urunlerDiv.innerHTML += `
      <div class="kart pahali">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
    } else {
      urunlerDiv.innerHTML += `
      <div class="kart">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
    }
  }
}
function sirala() {
  let urunlerDiv = document.getElementById("kartAlani");
  let adet = document.getElementById("adet").value;
  urunlerDiv.innerHTML = "";

  if (adet > urunler.length) {
    adet = urunler.length;
  }

  let siraliUrunler = [...urunler].sort((a, b) => a.fiyat - b.fiyat);

  for (let i = 0; i < adet; i++) {
    let urun = siraliUrunler[i];

    if (urun.fiyat > 10000) {
      urunlerDiv.innerHTML += `
      <div class="kart pahali">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
    } else {
      urunlerDiv.innerHTML += `
      <div class="kart">
        <img src="${urun.resim}" />
        <h3>${urun.ad}</h3>
        <p>Fiyat: ₺${urun.fiyat}</p>
      </div>
    `;
    }
  }
}
function pahali() {
  let urunlerDiv = document.getElementById("kartAlani");
  let adet = document.getElementById("adet").value;
  urunlerDiv.innerHTML = "";

  if (adet > urunler.length) {
    adet = urunler.length;
  }
  for (let i = 0; i < adet; i++) {
    urunlerim = urunler[i];

    if (urunlerim.fiyat > 10000) {
      urunlerDiv.innerHTML += `
      <div class="kart pahali">
        <img src="${urunlerim.resim}" />
        <h3>${urunlerim.ad}</h3>
        <p>Fiyat: ₺${urunlerim.fiyat}</p>
      </div>
    `;
    }
  }
}
function olustur() {
  let gosteri = document.getElementById("kartAlani");
  let adet = document.getElementById("adet").value;
  gosteri.innerHTML = "";

  if (adet > urunler.length) {
    adet = urunler.length;
  }
  for (let i = 0; i < adet; i++) {
    urunlerim = urunler[i];

    if (urunlerim.fiyat > 10000) {
      gosteri.innerHTML += `
      <div class="kart pahali">
        <img src="${urunlerim.resim}" />
        <h3>${urunlerim.ad}</h3>
        <p>Fiyat: ₺${urunlerim.fiyat}</p>
      </div>
    `;
    } else {
      gosteri.innerHTML += `
      <div class="kart">
        <img src="${urunlerim.resim}" />
        <h3>${urunlerim.ad}</h3>
        <p>Fiyat: ₺${urunlerim.fiyat}</p>
      </div>
    `;
    }
  }
}
