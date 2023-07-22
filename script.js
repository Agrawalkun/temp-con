document.getElementById("convert1").onclick = tempConvert;
document.getElementById("convert2").onclick = tempConvert;
document.getElementById("convert3").onclick = tempConvert;

function tempConvert() {
  var cel = document.getElementById("cel").value;
  var fah = document.getElementById("fah").value;
  var kel = document.getElementById("kel").value;

  if (fah != "") {
    cel = (parseFloat(fah) - 32) / (9 / 5);
    kel = (parseFloat(fah) - 32) * (5 / 9) + 273.15;
  } else {
    fah = parseFloat(cel) * (9 / 5) + 32;
    fah = (parseFloat(kel) - 273.15) * (9 / 5) + 32;
  }
  document.getElementById("fah").value = parseFloat(fah).toFixed(1);
  document.getElementById("cel").value = parseFloat(cel).toFixed(1);
  document.getElementById("kel").value = parseFloat(kel).toFixed(1);

  if (cel != "") {
    fah = parseFloat(cel) * (9 / 5) + 32;
    kel = parseFloat(cel) + 273.15;
  } else {
    cel = (parseFloat(fah) - 32) / (5 / 9);
    cel = parseFloat(kel) - 273.15;
  }
  document.getElementById("fah").value = parseFloat(fah).toFixed(1);
  document.getElementById("cel").value = parseFloat(cel).toFixed(1);
  document.getElementById("kel").value = parseFloat(kel).toFixed(1);

  if (kel != "") {
    cel = parseFloat(kel) - 273.15;
    fah = (parseFloat(kel) - 273.15) * (9 / 5) + 32;
  } else {
    kel = parseFloat(cel) + 273.15;
    kel = (parseFloat(kel) - 273.15) * (9 / 5) + 32;
  }
  document.getElementById("fah").value = parseFloat(fah).toFixed(1);
  document.getElementById("cel").value = parseFloat(cel).toFixed(1);
  document.getElementById("kel").value = parseFloat(kel).toFixed(1);
}
