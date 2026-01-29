// Her sayaç için benzersiz bir anahtar oluşturur:
// örn: sayac::TERR050801::touch-blue
function keyFor(sectionId, itemId) {
  return `sayac::${sectionId}::${itemId}`;
}

// localStorage'dan sayacı okur (yoksa 0 döner)
function loadValue(sectionId, itemId) {
  const raw = localStorage.getItem(keyFor(sectionId, itemId));
  const val = Number(raw);
  return Number.isFinite(val) ? val : 0;
}

// localStorage'a sayacı kaydeder
function saveValue(sectionId, itemId, value) {
  localStorage.setItem(keyFor(sectionId, itemId), String(value));
}

// Sayfadaki tüm blokları (9 başlık) dolaşır
document.querySelectorAll(".blok").forEach((blok) => {
  const sectionId = blok.getAttribute("data-section");

  // Her blok içindeki sayaç kartlarını dolaşır
  blok.querySelectorAll(".counter").forEach((counterEl) => {
    const itemId = counterEl.getAttribute("data-item");
    const valueEl = counterEl.querySelector(".value");
    const btn = counterEl.querySelector(".btn");

    // Başlangıç değerini yükle
    let count = loadValue(sectionId, itemId);
    valueEl.textContent = count;

    // +1 butonuna basınca artır ve kaydet
    btn.addEventListener("click", () => {
      count += 1;
      valueEl.textContent = count;
      saveValue(sectionId, itemId, count);
    });
  });
});
``
