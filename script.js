function berechnen() {
  const ein = parseFloat(document.getElementById("ein").value || "0");
  const aus = parseFloat(document.getElementById("aus").value || "0");
  const rent = parseFloat(document.getElementById("rent").value || "0");

  const einMitAnpassung = ein * (1 + rent / 100);
  const frei = einMitAnpassung - aus;

  document.getElementById("result").innerText =
    "Einnahmen mit Anpassung: " + einMitAnpassung.toFixed(2) + " EUR\n" +
    "Ausgaben: " + aus.toFixed(2) + " EUR\n" +
    "Übrig / frei: " + frei.toFixed(2) + " EUR";
}
