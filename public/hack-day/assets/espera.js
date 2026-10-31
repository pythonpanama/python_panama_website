(function () {
  var AGENDA = [
    ["08:00", "09:00", "Montaje"],
    ["09:00", "09:20", "Registro y check-in"],
    ["09:20", "09:40", "Ceremonia de apertura de MLH"],
    ["09:40", "09:50", "Bienvenida y meta del día"],
    ["09:50", "10:00", "Conversar y preparar la laptop"],
    ["10:00", "10:30", "Ceremonia de cierre de MLH en Twitch"],
    ["10:30", "10:45", "¿Qué es Hacktoberfest?"],
    ["10:45", "11:00", "Tema 2026 y elección de mesa"],
    ["11:00", "12:00", "Bloque de contribución 1"],
    ["12:00", "12:45", "Brindis y networking"],
    ["12:45", "14:15", "Bloque 2: terminar y entregar"],
    ["14:15", "14:45", "Demos y ganadores"],
    ["14:45", "15:00", "Agradecimientos y encuesta"]
  ];
  var CIERRE = 14 * 60 + 15;
  function min(t) { var p = t.split(":"); return +p[0] * 60 + +p[1]; }
  function legible(m) {
    var h = Math.floor(m / 60), mm = m % 60, h12 = h > 12 ? h - 12 : h;
    return h12 + ":" + (mm < 10 ? "0" : "") + mm + (h < 12 ? " a. m." : (h === 12 && mm === 0 ? " m." : " p. m."));
  }
  var prueba = (location.search.match(/hora=(\d{1,2}):(\d{2})/) || null);
  var inicioPrueba = Date.now();

  function ahora() {
    if (prueba) { return +prueba[1] * 60 + +prueba[2] + Math.floor((Date.now() - inicioPrueba) / 60000); }
    var d = new Date(); return d.getHours() * 60 + d.getMinutes();
  }

  function pintar() {
    var m = ahora(), h = Math.floor(m / 60), mm = m % 60;
    var sufijo = h < 12 ? "a. m." : (h === 12 && mm === 0 ? "m." : "p. m.");
    document.getElementById("reloj").innerHTML = (h > 12 ? h - 12 : h) + ":" + (mm < 10 ? "0" : "") + mm + "<small>" + sufijo + "</small>";
    var i = AGENDA.findIndex(function (b) { return m >= min(b[0]) && m < min(b[1]); });
    document.getElementById("bloque").textContent = i < 0 ? (m < min("08:00") ? "Abrimos a las 9:00 a. m." : "Gracias por venir") : AGENDA[i][2];
    var sig = i >= 0 ? AGENDA[i + 1] : null;
    document.getElementById("siguiente").textContent = sig ? "Después, a las " + legible(min(sig[0])) + ": " + sig[2].charAt(0).toLowerCase() + sig[2].slice(1) : "";
    var cierre = document.getElementById("cierre"), falta = CIERRE - m;
    cierre.classList.toggle("urgente", falta > 0 && falta <= 15);
    cierre.classList.toggle("cerrado", falta <= 0);
    if (falta <= 0) { cierre.textContent = "Entregas cerradas. Ahora, las demos."; }
    else {
      var texto = (falta >= 60 ? Math.floor(falta / 60) + " h " : "") + (falta % 60) + " min";
      cierre.innerHTML = (falta <= 15 ? "¡Entrega ya! Quedan " : "Faltan ") + "<strong>" + texto + "</strong> para entregar · cierre 2:15&nbsp;p.&nbsp;m.";
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "f" || e.key === "F") {
      if (!document.fullscreenElement) { document.documentElement.requestFullscreen && document.documentElement.requestFullscreen().catch(function () {}); }
      else { document.exitFullscreen(); }
    }
    else if (e.key === "i" || e.key === "I") { location.href = "index.html"; }
  });

  function escalar() {
    var s = Math.min(window.innerWidth / 1600, window.innerHeight / 900);
    document.getElementById("lienzo").style.transform = "scale(" + s + ")";
  }
  window.addEventListener("resize", escalar);
  escalar(); pintar();
  setInterval(pintar, 5000);
})();
