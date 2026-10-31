(function () {
  // Hora de Panamá: UTC−5 todo el año, sin horario de verano.
  var AGENDA = [
    ["09:00", "09:20", "Registro y check-in"],
    ["09:20", "09:40", "Ceremonia de apertura de MLH"],
    ["09:40", "09:50", "Bienvenida y meta del día"],
    ["09:50", "10:00", "Conversar y preparar la laptop"],
    ["10:00", "10:30", "Ceremonia de cierre de MLH en Twitch"],
    ["10:30", "10:45", "¿Qué es Hacktoberfest? (con demo)"],
    ["10:45", "11:00", "Tema 2026 y elección de mesa"],
    ["11:00", "12:00", "Bloque de contribución 1"],
    ["12:00", "12:45", "Brindis y networking"],
    ["12:45", "14:15", "Bloque de contribución 2 y entrega"],
    ["14:15", "14:45", "Demos y ganadores", true],
    ["14:45", "15:00", "Agradecimientos y encuesta"]
  ];
  var DIA = "2026-10-31";

  function min(hhmm) { var p = hhmm.split(":"); return +p[0] * 60 + +p[1]; }
  function legible(hhmm) {
    var m = min(hhmm), h = Math.floor(m / 60), mm = m % 60, h12 = h > 12 ? h - 12 : h;
    var sufijo = h < 12 ? " a. m." : (h === 12 && mm === 0 ? " m." : " p. m.");
    return h12 + ":" + (mm < 10 ? "0" : "") + mm + sufijo;
  }
  function corto(hhmm) { var m = min(hhmm), h = Math.floor(m / 60), mm = m % 60; return (h > 12 ? h - 12 : h) + ":" + (mm < 10 ? "0" : "") + mm; }

  var lista = document.getElementById("agenda");
  AGENDA.forEach(function (b) {
    var li = document.createElement("li");
    if (b[2].indexOf("entrega") > -1 || b[3]) li.className = "clave";
    var h = document.createElement("span"); h.className = "h"; h.textContent = corto(b[0]) + " – " + corto(b[1]);
    var t = document.createElement("span"); t.textContent = b[2];
    li.appendChild(h); li.appendChild(t); lista.appendChild(li);
  });

  function actualizar() {
    var panama = new Date(Date.now() - 5 * 3600 * 1000);
    var fecha = panama.toISOString().slice(0, 10);
    var ahora = panama.getUTCHours() * 60 + panama.getUTCMinutes();
    var elHora = document.getElementById("ahora-hora");
    var elBloque = document.getElementById("ahora-bloque");
    var elSig = document.getElementById("ahora-siguiente");
    Array.prototype.forEach.call(lista.children, function (li) { li.classList.remove("actual"); });
    if (fecha !== DIA) {
      if (fecha > DIA) { elBloque.textContent = "El Hack Day terminó"; elSig.textContent = "Gracias por venir. Si te piden cambios en tu PR, pregunta en el Discord."; }
      return;
    }
    var hh = panama.getUTCHours(), mm = panama.getUTCMinutes();
    elHora.textContent = "AHORA · " + legible((hh < 10 ? "0" : "") + hh + ":" + (mm < 10 ? "0" : "") + mm).toUpperCase();
    var i = AGENDA.findIndex(function (b) { return ahora >= min(b[0]) && ahora < min(b[1]); });
    if (ahora < min(AGENDA[0][0])) { elBloque.textContent = "Abrimos a las 9:00 a. m."; elSig.textContent = "Ten lista tu cuenta de GitHub y tu cuenta de MLH."; return; }
    if (i < 0) { elBloque.textContent = "Terminamos por hoy"; elSig.textContent = "Gracias por venir. Antes de irte, llena la encuesta."; return; }
    lista.children[i].classList.add("actual");
    elBloque.textContent = AGENDA[i][2];
    var sig = AGENDA[i + 1];
    var faltaCierre = min("14:15") - ahora;
    elSig.textContent = (sig ? "Después, a las " + legible(sig[0]) + ": " + sig[2] + ". " : "") +
      (faltaCierre > 0 && ahora >= min("11:00") ? "Faltan " + (faltaCierre >= 60 ? Math.floor(faltaCierre / 60) + " h " : "") + (faltaCierre % 60) + " min para el cierre de entregas." : "");
  }
  actualizar();
  setInterval(actualizar, 30000);

  document.querySelectorAll(".copiar").forEach(function (boton) {
    boton.addEventListener("click", function () {
      var pre = document.getElementById(boton.dataset.objetivo);
      var texto = pre.innerText;
      function listo(msg) { boton.textContent = msg; setTimeout(function () { boton.textContent = "Copiar plantilla"; }, 2500); }
      function seleccionar() {
        var r = document.createRange(); r.selectNodeContents(pre);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        listo("Seleccionada: copia con Ctrl+C");
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texto).then(function () { listo("Copiada"); }, seleccionar);
      } else { seleccionar(); }
    });
  });
})();
