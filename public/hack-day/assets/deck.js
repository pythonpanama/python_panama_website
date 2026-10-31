/*
 * Motor de las presentaciones del Hack Day. Sin dependencias.
 *
 * Teclas: → / espacio / AvPág siguiente · ← / RePág anterior · Inicio / Fin
 *         F pantalla completa · N notas del orador · P vista de presentador
 *         O vista general · I índice · ? ayuda
 * La barra de navegación aparece al mover el mouse y se oculta sola a los 2,5 s.
 * <body data-siguiente="archivo.html"> indica a qué presentación pasa la última diapositiva.
 * La diapositiva actual queda en la URL (#5), así que se puede recargar o enlazar.
 * La vista de presentador abre una segunda ventana sincronizada con la primera.
 * Imprimir (Cmd/Ctrl + P → Guardar como PDF) saca una diapositiva por página.
 * Movimiento: entrada escalonada del contenido, transición pixelada en portadas y
 * separadores, confeti en las diapositivas con data-confeti y números que cuentan
 * (<span class="contar">500</span>). La tecla A lo apaga y se recuerda.
 * Guiños retro: Pac-Man en la barra de progreso, piezas de Tetris y PRESS START en
 * portadas y separadores; los demás van en el HTML de cada diapositiva (deck.css).
 */
(function () {
  "use strict";

  var ANCHO = 1600;
  var ALTO = 900;

  var contenedor = document.querySelector(".diapositivas");
  var slides = Array.prototype.slice.call(contenedor.querySelectorAll(":scope > .slide"));
  var total = slides.length;
  var actual = 0;
  var esPresentador = new URLSearchParams(location.search).has("presentador");
  var canal = "BroadcastChannel" in window ? new BroadcastChannel("deck:" + location.pathname) : null;

  // ---------- Montaje ----------

  var escenario = document.createElement("div");
  escenario.className = "escenario";
  contenedor.parentNode.insertBefore(escenario, contenedor);
  escenario.appendChild(contenedor);

  var textoPie = document.body.getAttribute("data-pie") || "";
  slides.forEach(function (slide, i) {
    slide.setAttribute("aria-label", "Diapositiva " + (i + 1) + " de " + total);
    if (slide.hasAttribute("data-sin-pie")) return;
    var pie = document.createElement("div");
    pie.className = "pie";
    pie.innerHTML = "<span></span><span class=\"numero\"></span>";
    pie.firstChild.textContent = textoPie;
    pie.lastChild.textContent = (i + 1) + " / " + total;
    slide.appendChild(pie);
  });

  // ---------- Movimiento ----------

  var COLORES = ["#3D5F58", "#F5B726", "#E97B77", "#8BB2DE"];
  var TIPOS_PIXEL = ["portada", "seccion", "enfoque", "patrocinadores", "video"];
  // Piezas de Tetris en una rejilla de 4 columnas: I, O, T, L, J, S, Z
  var PIEZAS = ["####", "##..##", "###..#..", "#...#...##", ".#...#..##", ".##.##..", "##...##."];

  try { if (localStorage.getItem("deck:animaciones") === "no") document.body.classList.add("sin-animacion"); } catch (e) {}

  // Marca los bloques que entran en cascada: hijos directos, viñetas, celdas de rejilla y filas
  function prepararAnimacion(slide) {
    var bloques = [];
    Array.prototype.forEach.call(slide.children, function (hijo) {
      if (hijo.matches(".notas, .pie, .pixel-flotante, .tetromino, .press-start, .banda-panama, .viga, .bloque-pregunta")) return;
      if (hijo.matches("ul, ol")) bloques.push.apply(bloques, hijo.children);
      else if (hijo.matches(".columnas, .con-qr, .persona, .paso, .aliados")) bloques.push.apply(bloques, hijo.children);
      else if (hijo.matches("table")) {
        if (hijo.tHead) bloques.push(hijo.tHead);
        Array.prototype.forEach.call(hijo.tBodies, function (tb) { bloques.push.apply(bloques, tb.rows); });
      } else bloques.push(hijo);
    });
    bloques.forEach(function (b, i) {
      b.classList.add("anim");
      b.style.setProperty("--i", Math.min(i, 12));
    });
    slide.querySelectorAll("pre").forEach(function (pre) {
      pre.style.setProperty("--lineas", Math.max(1, pre.textContent.replace(/\n$/, "").split("\n").length));
    });
    if (slide.matches(".portada, .seccion")) {
      // Tetris: siete piezas que caen por el lado derecho
      PIEZAS.forEach(function (forma, k) {
        var t = document.createElement("span");
        t.className = "tetromino";
        t.setAttribute("aria-hidden", "true");
        t.innerHTML = forma.split("").map(function (c) { return c === "#" ? "<b></b>" : "<b class=\"v\"></b>"; }).join("");
        t.style.cssText = "--c:" + COLORES[k % 4] + ";--x:" + (60 + k * 5.4) + "%;--d:" + (9 + (k * 2) % 5) + "s;--r:" + (k * 1.4) + "s";
        slide.appendChild(t);
      });
    }
    if (slide.matches(".portada")) {
      var ps = document.createElement("p");
      ps.className = "press-start";
      ps.setAttribute("aria-hidden", "true");
      ps.innerHTML = "<span>Press start</span>";
      slide.appendChild(ps);
    }
  }
  slides.forEach(prepararAnimacion);

  function sinMovimiento() {
    return document.body.classList.contains("sin-animacion") || document.body.classList.contains("general") ||
      esPresentador || (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function transicionPixel() {
    var capa = document.createElement("div");
    capa.className = "transicion-pixel";
    capa.setAttribute("aria-hidden", "true");
    var html = "";
    for (var f = 0; f < 9; f++) {
      for (var c = 0; c < 16; c++) {
        html += "<i style=\"--c:" + COLORES[(c + f) % 4] + ";--k:" + (c + f) + "\"></i>";
      }
    }
    capa.innerHTML = html;
    contenedor.appendChild(capa);
    setTimeout(function () { capa.remove(); }, 1100);
  }

  function confeti() {
    var capa = document.createElement("div");
    capa.className = "confeti";
    capa.setAttribute("aria-hidden", "true");
    var html = "";
    for (var k = 0; k < 90; k++) {
      html += "<i style=\"--x:" + (Math.random() * 100) + "%;--t:" + (10 + Math.random() * 16) + "px;--c:" + COLORES[k % 4] +
        ";--d:" + (1.8 + Math.random() * 1.6) + "s;--r:" + (Math.random() * 0.6) + "s;--dx:" + (Math.random() * 240 - 120) +
        "px;--g:" + (Math.random() * 720 - 360) + "deg\"></i>";
    }
    capa.innerHTML = html;
    contenedor.appendChild(capa);
    setTimeout(function () { capa.remove(); }, 4200);
  }

  function contar(slide) {
    slide.querySelectorAll(".contar").forEach(function (el) {
      var meta = parseInt(el.getAttribute("data-hasta") || el.textContent, 10);
      if (isNaN(meta)) return;
      el.setAttribute("data-hasta", meta);
      var t0 = null;
      function paso(t) {
        if (t0 === null) t0 = t;
        var x = Math.min(1, (t - t0) / 1100);
        el.textContent = Math.round(meta * (1 - Math.pow(1 - x, 3)));
        if (x < 1) requestAnimationFrame(paso);
      }
      requestAnimationFrame(paso);
    });
  }

  function animarEntrada(slide, anterior) {
    slide.classList.remove("entrando");
    if (sinMovimiento()) return;
    void slide.offsetWidth;
    slide.classList.add("entrando");
    document.body.setAttribute("data-dir", anterior !== null && anterior > slides.indexOf(slide) ? "atras" : "adelante");
    if (TIPOS_PIXEL.some(function (t) { return slide.classList.contains(t); })) transicionPixel();
    if (slide.hasAttribute("data-confeti")) setTimeout(confeti, 250);
    contar(slide);
  }

  function alternarAnimaciones() {
    var apagar = !document.body.classList.contains("sin-animacion");
    document.body.classList.toggle("sin-animacion", apagar);
    try { localStorage.setItem("deck:animaciones", apagar ? "no" : "si"); } catch (e) {}
    if (!apagar) animarEntrada(slides[actual], null);
  }

  var pista = document.createElement("div");
  pista.className = "pista-progreso";
  document.body.appendChild(pista);
  var progreso = document.createElement("div");
  progreso.className = "progreso";
  document.body.appendChild(progreso);
  var comecocos = document.createElement("div");
  comecocos.className = "comecocos";
  comecocos.setAttribute("aria-hidden", "true");
  document.body.appendChild(comecocos);

  var panelNotas = document.createElement("div");
  panelNotas.className = "panel-notas";
  panelNotas.setAttribute("aria-live", "polite");
  document.body.appendChild(panelNotas);

  var ayuda = document.createElement("div");
  ayuda.className = "ayuda";
  ayuda.innerHTML =
    "<div><strong>Teclas</strong><br>" +
    "<kbd>→</kbd> <kbd>espacio</kbd> siguiente · <kbd>←</kbd> anterior<br>" +
    "<kbd>Inicio</kbd> <kbd>Fin</kbd> primera y última<br>" +
    "<kbd>F</kbd> pantalla completa<br>" +
    "<kbd>N</kbd> notas del orador en esta pantalla<br>" +
    "<kbd>P</kbd> vista de presentador (otra ventana)<br>" +
    "<kbd>O</kbd> vista general<br>" +
    "<kbd>A</kbd> animaciones sí o no<br>" +
    "<kbd>I</kbd> volver al índice de presentaciones<br>" +
    "<kbd>Cmd/Ctrl + P</kbd> guardar como PDF<br>" +
    "<kbd>?</kbd> cerrar esta ayuda</div>";
  document.body.appendChild(ayuda);

  // ---------- Barra de navegación (aparece al mover el mouse) ----------

  var INDICE = "index.html";
  var siguienteDeck = document.body.getAttribute("data-siguiente");
  var ICONOS = {
    inicio: "<path d=\"M3 11l9-8 9 8\"/><path d=\"M5 10v10h5v-6h4v6h5V10\"/>",
    anterior: "<path d=\"M15 5l-7 7 7 7\"/>",
    siguiente: "<path d=\"M9 5l7 7-7 7\"/>",
    general: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/>",
    notas: "<path d=\"M5 3h10l4 4v14H5z\"/><path d=\"M9 11h6M9 15h6\"/>",
    presentador: "<rect x=\"2\" y=\"4\" width=\"14\" height=\"10\"/><path d=\"M19 8h3v10H8v-2\"/><path d=\"M6 18h4\"/>",
    pantalla: "<path d=\"M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5\"/>",
    ayuda: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5v.7\"/><path d=\"M12 17.5v.01\"/>"
  };

  function icono(nombre) {
    return "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">" + ICONOS[nombre] + "</svg>";
  }

  function boton(accion, etiqueta, tecla) {
    return "<button type=\"button\" data-accion=\"" + accion + "\" aria-label=\"" + etiqueta + "\" title=\"" + etiqueta + " (" + tecla + ")\">" + icono(accion) + "</button>";
  }

  var barra = document.createElement("nav");
  barra.className = "barra";
  barra.setAttribute("aria-label", "Navegación de la presentación");
  barra.innerHTML =
    "<a class=\"b-indice\" href=\"" + INDICE + "\" title=\"Volver al índice de presentaciones (I)\">" + icono("inicio") + "<span>Índice</span></a>" +
    "<span class=\"b-titulo\"></span>" +
    "<span class=\"b-sep\"></span>" +
    boton("anterior", "Anterior", "←") +
    "<span class=\"b-contador\" aria-live=\"polite\"></span>" +
    boton("siguiente", "Siguiente", "→") +
    "<span class=\"b-sep\"></span>" +
    boton("general", "Vista general", "O") +
    boton("notas", "Notas del orador", "N") +
    boton("presentador", "Vista de presentador", "P") +
    boton("pantalla", "Pantalla completa", "F") +
    boton("ayuda", "Ayuda", "?");
  barra.querySelector(".b-titulo").textContent = document.title;
  document.body.appendChild(barra);

  var botonSiguiente = barra.querySelector("[data-accion=siguiente]");
  var botonAnterior = barra.querySelector("[data-accion=anterior]");
  var contador = barra.querySelector(".b-contador");

  barra.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    var accion = b.getAttribute("data-accion");
    if (accion === "anterior") ir(actual - 1);
    else if (accion === "siguiente") avanzar();
    else if (accion === "general") alternarGeneral();
    else if (accion === "notas") { panelNotas.classList.toggle("visible"); actualizarBarra(); }
    else if (accion === "presentador") abrirPresentador();
    else if (accion === "pantalla") pantallaCompleta();
    else if (accion === "ayuda") ayuda.classList.toggle("visible");
    b.blur();
  });

  // En la última diapositiva, «siguiente» lleva a la próxima charla o vuelve al índice
  function avanzar() {
    if (actual < total - 1) ir(actual + 1);
    else location.href = siguienteDeck || INDICE;
  }

  function actualizarBarra() {
    contador.textContent = (actual + 1) + " / " + total;
    botonAnterior.disabled = actual === 0;
    var etiqueta = actual < total - 1 ? "Siguiente (→)" : (siguienteDeck ? "Siguiente presentación (→)" : "Volver al índice (→)");
    botonSiguiente.title = etiqueta;
    botonSiguiente.setAttribute("aria-label", etiqueta.replace(/ \(.*\)$/, ""));
    botonSiguiente.classList.toggle("fin", actual === total - 1);
    barra.querySelector("[data-accion=notas]").setAttribute("aria-pressed", panelNotas.classList.contains("visible"));
    barra.querySelector("[data-accion=general]").setAttribute("aria-pressed", document.body.classList.contains("general"));
  }

  var ocultarBarra;
  function mostrarBarra() {
    document.body.classList.add("barra-visible");
    clearTimeout(ocultarBarra);
    ocultarBarra = setTimeout(function () {
      if (!barra.matches(":hover") && !barra.contains(document.activeElement)) document.body.classList.remove("barra-visible");
    }, 2500);
  }
  document.addEventListener("mousemove", mostrarBarra);
  barra.addEventListener("focusin", mostrarBarra);

  function pantallaCompleta() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen().catch(function () {});
  }

  function abrirPresentador() {
    window.open(location.pathname + "?presentador#" + (actual + 1), "presentador", "width=1280,height=800");
  }

  function notasDe(i) {
    var aside = slides[i] && slides[i].querySelector(".notas");
    if (!aside) return "";
    // Une las líneas cortadas del guion y respeta párrafos, listas y marcas de tiempo
    return aside.textContent
      .replace(/^\s*\n/, "")
      .replace(/\n[ \t]+/g, "\n")
      .replace(/([^\n])\n(?=[a-záéíóúñü(«"'])/g, "$1 ")
      .trim();
  }

  // ---------- Escala ----------

  function escalar() {
    if (document.body.classList.contains("general")) {
      escalarGeneral();
      return;
    }
    var s = Math.min(window.innerWidth / ANCHO, window.innerHeight / ALTO);
    contenedor.style.transform = "scale(" + s + ")";
  }

  // ---------- Navegación ----------

  function ir(n, desdeCanal, inicial) {
    n = Math.max(0, Math.min(total - 1, n));
    var anterior = inicial ? null : actual;
    var cambia = inicial || n !== actual;
    slides[actual].classList.remove("activa", "entrando");
    actual = n;
    slides[actual].classList.add("activa");
    if (cambia) animarEntrada(slides[actual], anterior);
    progreso.style.width = ((actual + 1) / total) * 100 + "%";
    comecocos.style.left = ((actual + 1) / total) * 100 + "%";
    panelNotas.textContent = notasDe(actual) || "(Sin notas en esta diapositiva)";
    if (location.hash !== "#" + (actual + 1)) history.replaceState(null, "", "#" + (actual + 1));
    actualizarBarra();
    if (esPresentador) pintarPresentador();
    if (canal && !desdeCanal) canal.postMessage({ ir: actual });
  }

  function desdeHash() {
    var n = parseInt(location.hash.slice(1), 10);
    return isNaN(n) ? 0 : n - 1;
  }

  if (canal) {
    canal.onmessage = function (e) {
      if (e.data && typeof e.data.ir === "number" && e.data.ir !== actual) ir(e.data.ir, true);
      if (e.data && e.data.hola && !esPresentador) canal.postMessage({ ir: actual });
    };
  }

  // ---------- Vista general ----------

  function alternarGeneral() {
    var activar = !document.body.classList.contains("general");
    document.body.classList.toggle("general", activar);
    slides.forEach(function (slide, i) {
      if (activar) {
        var marco = document.createElement("div");
        marco.className = "slide-marco" + (i === actual ? " actual" : "");
        marco.addEventListener("click", function () { alternarGeneral(); ir(i); });
        slide.parentNode.insertBefore(marco, slide);
        marco.appendChild(slide);
      } else {
        var marcoViejo = slide.parentNode;
        contenedor.insertBefore(slide, marcoViejo);
        marcoViejo.remove();
        slide.style.transform = "";
      }
    });
    escalar();
    actualizarBarra();
    if (activar) {
      var marcoActual = contenedor.querySelector(".slide-marco.actual");
      if (marcoActual) marcoActual.scrollIntoView({ block: "center" });
    }
  }

  function escalarGeneral() {
    contenedor.querySelectorAll(".slide-marco").forEach(function (marco) {
      marco.firstChild.style.transform = "scale(" + marco.clientWidth / ANCHO + ")";
    });
  }

  // ---------- Vista de presentador ----------

  var inicio = null;
  var vista;

  function montarPresentador() {
    document.body.classList.add("presentador");
    document.title = "Presentador · " + document.title;
    vista = document.createElement("div");
    vista.className = "vista-presentador";
    vista.innerHTML =
      "<div class=\"actual-p\"><div class=\"marco\" id=\"marco-actual\"></div></div>" +
      "<div><div class=\"rotulo-p\">Siguiente</div><div class=\"marco siguiente-p\" id=\"marco-siguiente\"></div></div>" +
      "<div style=\"display:flex;flex-direction:column;min-height:0\"><div class=\"rotulo-p\">Notas del orador</div><div class=\"notas-p\" id=\"notas-p\"></div></div>" +
      "<div class=\"barra-p\"><span id=\"contador-p\"></span><span>Hora <span class=\"reloj\" id=\"hora-p\"></span></span>" +
      "<span>Transcurrido <span class=\"reloj\" id=\"crono-p\">0:00</span></span>" +
      "<button type=\"button\" id=\"reiniciar-p\">Reiniciar cronómetro</button>" +
      "<button type=\"button\" id=\"anterior-p\">← Anterior</button><button type=\"button\" id=\"siguiente-p\">Siguiente →</button></div>";
    document.body.appendChild(vista);
    document.getElementById("reiniciar-p").onclick = function () { inicio = Date.now(); };
    document.getElementById("anterior-p").onclick = function () { ir(actual - 1); };
    document.getElementById("siguiente-p").onclick = function () { ir(actual + 1); };
    setInterval(relojes, 1000);
    window.addEventListener("resize", pintarPresentador);
    if (canal) canal.postMessage({ hola: true });
  }

  function copiaEn(marco, i) {
    marco.innerHTML = "";
    if (i >= total) {
      marco.innerHTML = "<div style=\"color:#9fb3ad;padding:20px;font-family:var(--fuente-mono)\">Fin de la presentación</div>";
      return;
    }
    var copia = slides[i].cloneNode(true);
    copia.classList.add("activa");
    marco.appendChild(copia);
    copia.style.transform = "scale(" + marco.clientWidth / ANCHO + ")";
  }

  function pintarPresentador() {
    if (!vista) return;
    copiaEn(document.getElementById("marco-actual"), actual);
    copiaEn(document.getElementById("marco-siguiente"), actual + 1);
    document.getElementById("notas-p").textContent = notasDe(actual) || "(Sin notas en esta diapositiva)";
    document.getElementById("contador-p").textContent = (actual + 1) + " / " + total;
    if (inicio === null && actual > 0) inicio = Date.now();
  }

  function relojes() {
    var ahora = new Date();
    document.getElementById("hora-p").textContent = ahora.toLocaleTimeString("es-PA", { hour: "numeric", minute: "2-digit" });
    if (inicio !== null) {
      var seg = Math.floor((Date.now() - inicio) / 1000);
      document.getElementById("crono-p").textContent = Math.floor(seg / 60) + ":" + String(seg % 60).padStart(2, "0");
    }
  }

  // ---------- Teclado y gestos ----------

  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    if (e.target.closest && e.target.closest(".barra") && (k === " " || k === "Enter")) return;
    if (k === "ArrowRight" || k === "ArrowDown" || k === " " || k === "PageDown" || k === "Enter") { if (actual < total - 1) ir(actual + 1); e.preventDefault(); }
    else if (k === "ArrowLeft" || k === "ArrowUp" || k === "PageUp" || k === "Backspace") { ir(actual - 1); e.preventDefault(); }
    else if (k === "Home") ir(0);
    else if (k === "End") ir(total - 1);
    else if (k === "f" || k === "F") pantallaCompleta();
    else if (k === "n" || k === "N") { panelNotas.classList.toggle("visible"); actualizarBarra(); }
    else if ((k === "p" || k === "P") && !esPresentador) abrirPresentador();
    else if ((k === "i" || k === "I") && !esPresentador) location.href = INDICE;
    else if ((k === "o" || k === "O") && !esPresentador) alternarGeneral();
    else if ((k === "a" || k === "A") && !esPresentador) alternarAnimaciones();
    else if (k === "?") ayuda.classList.toggle("visible");
    else if (k === "Escape") { ayuda.classList.remove("visible"); if (document.body.classList.contains("general")) alternarGeneral(); }
  });

  var toqueX = null;
  document.addEventListener("touchstart", function (e) { toqueX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", function (e) {
    if (toqueX === null) return;
    var dx = e.changedTouches[0].clientX - toqueX;
    if (Math.abs(dx) > 50) ir(actual + (dx < 0 ? 1 : -1));
    toqueX = null;
  });

  window.addEventListener("resize", escalar);
  window.addEventListener("hashchange", function () { ir(desdeHash()); });

  // ---------- Arranque ----------

  slides.forEach(function (s) { s.classList.remove("activa"); });
  actual = Math.max(0, Math.min(total - 1, desdeHash()));
  slides[actual].classList.add("activa");
  if (esPresentador) montarPresentador();
  escalar();
  ir(actual, true, true);
  if (!esPresentador) mostrarBarra();
})();
