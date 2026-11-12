/* Big Time Rush — Back to Big Time
   Countdown, mobile nav, scroll reveals, signup form. */

(function () {
  "use strict";

  /* ---------- current year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    var closeNav = function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", i18nLookup(currentLang, "nav.menuOpen"));
      document.body.style.removeProperty("overflow");
    };

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? i18nLookup(currentLang, "nav.menuClose") : i18nLookup(currentLang, "nav.menuOpen"));
      if (open) document.body.style.overflow = "hidden";
      else document.body.style.removeProperty("overflow");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) closeNav();
    });
  }

  /* ---------- language switch (EN / ES) ---------- */
  var LANG_KEY = "btr-lang";
  var i18nStrings = {
    en: {
      title: "Big Time Rush — Back to Big Time",
      skip: "Skip to content",
      nav: { album: "Album", band: "Band", tour: "Tour", listen: "Listen", menuOpen: "Open menu", menuClose: "Close menu" },
      cta: "Get the drop",
      scroll: "Scroll",
      scrollAria: "Scroll to the album",
      ticker: { new: "★ New album out now", album: "Back to Big Time", lado: "★ Lado A / Lado B", era: "The new era begins again" },
      marquee: { album: "Back to Big Time", star: "★" },
      sticker: { main: "New album", mainEm: "out now!", side: "★ 2026" },
      hero: {
        eyebrow: "Lado A · The new album",
        sub: "Twelve tracks of chrome-plated pop, cut loud and built for the crowd. The boys are back — and this time it's personal.",
        cta: { listen: "Listen now", tracklist: "See the tracklist" },
        meta: { tracks: "<strong>12</strong> tracks", release: "<strong>Dec 4</strong> release", tour: "<strong>’26</strong> world tour" }
      },
      countdown: {
        label: "Album countdown",
        eyebrow: "The new era begins in",
        script: "Back to Big Time",
        live: "Out now — press play.",
        days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds"
      },
      album: {
        eyebrow: "Lado A · Lado B",
        title: "The new<br>album",
        lede: "Back to Big Time is the record they were always going to make: big hooks, bigger choruses, and a live band turned all the way up. Pressed on orange vinyl, cut for the front row.",
        facts: { release: "Release", releaseValue: "December 4, 2026", formats: "Formats", formatsValue: "Vinyl · CD · Digital", label: "Label", labelValue: "Big Time Collective" },
        cta: { pre: "Pre-save the album", join: "Join the list" }
      },
      tracklist: { title: "Tracklist", note: "Runtime 38:12 · 12 tracks", interlude: "interlude", side: { a: "Lado A", b: "Lado B" } },
      band: {
        eyebrow: "The four of them",
        title: "Still the<br>same rush",
        copy: "Kendall, James, Carlos and Logan — four voices, one ridiculous amount of energy. Twenty years in and they're still the loudest band in the room.",
        member: {
          kendall: { line: "The one with the plan. Usually a bad one.", role: "Vocals · Guitar" },
          james: { line: "Hair has its own rider. Worth it.", role: "Vocals · Bass" },
          carlos: { line: "Will stage-dive into anything. Anything.", role: "Vocals · Drums" },
          logan: { line: "Wrote the bridge. The whole bridge.", role: "Vocals · Keys" }
        }
      },
      listen: {
        eyebrow: "Everywhere now",
        title: "Listen<br><span>on</span>",
        script: "Turn it up.",
        foot: "Digital, CD and limited orange vinyl — shipping worldwide.",
        cta: { vinyl: "Get the vinyl" },
        platforms: {
          spotify: { name: "Spotify", sub: "Stream" },
          apple: { name: "Apple Music", sub: "Stream" },
          youtube: { name: "YouTube", sub: "Watch" },
          amazon: { name: "Amazon Music", sub: "Stream" }
        }
      },
      tour: {
        ticket: "Tickets",
        dateLA: "Feb 12",
        dateMexico: "Feb 20",
        dateNY: "Mar 05",
        eyebrow: "On the road",
        title: "Live &<br>loud",
        copy: "The Back to Big Time tour hits arenas in 2027. Presale opens with the album.",
        sold: "Sold out",
        note: "More dates announced every Friday. Get first access →"
      },
      signup: {
        eyebrow: "The mailing list",
        title: "Stay in<br>the rush",
        copy: "Presale codes, tour dates, and the occasional voice note from the studio. No spam — just the good stuff.",
        label: "Email address",
        formNote: "By signing up you agree to receive emails from Big Time Rush. Unsubscribe anytime.",
        status: { success: "You're on the list. Check your inbox for the presale code.", error: "That email doesn't look right — try again?" },
        cta: { submit: "Sign me up" }
      },
      footer: { code: "BTR–026 · LADO A", poster: "Poster ↓", copy: "© <span id=\"year\">2026</span> Big Time Rush. Unofficial concept site." },
      meta: {
        description: "Big Time Rush is back. New album 'Back to Big Time' — out December 4. Listen everywhere.",
        ogTitle: "Big Time Rush — Back to Big Time",
        ogDescription: "The new album, out December 4. Twelve tracks, one new era."
      }
    },
    es: {
      title: "Big Time Rush — De vuelta a Big Time",
      skip: "Saltar al contenido",
      nav: { album: "Álbum", band: "Banda", tour: "Gira", listen: "Escuchar", menuOpen: "Abrir menú", menuClose: "Cerrar menú" },
      cta: "Pre-escucha",
      scroll: "Desplázate",
      scrollAria: "Desplázate al álbum",
      ticker: { new: "★ Nuevo álbum ya está disponible", album: "De vuelta a Big Time", lado: "★ Lado A / Lado B", era: "La nueva era comienza otra vez" },
      marquee: { album: "De vuelta a Big Time", star: "★" },
      sticker: { main: "Nuevo álbum", mainEm: "ya salió!", side: "★ 2026" },
      hero: {
        eyebrow: "Lado A · El nuevo álbum",
        sub: "Doce pistas de pop con actitud, fuertes y hechas para la multitud. Los chicos volvieron — y esta vez es personal.",
        cta: { listen: "Escucha ahora", tracklist: "Ver el tracklist" },
        meta: { tracks: "<strong>12</strong> pistas", release: "<strong>4</strong> de diciembre", tour: "<strong>’26</strong> gira" }
      },
      countdown: {
        label: "Cuenta regresiva del álbum",
        eyebrow: "La nueva era comienza en",
        script: "De vuelta a Big Time",
        live: "Ya salió — pon play.",
        days: "Días", hours: "Horas", minutes: "Minutos", seconds: "Segundos"
      },
      album: {
        eyebrow: "Lado A · Lado B",
        title: "El nuevo<br>álbum",
        lede: "Back to Big Time es el disco que siempre iban a hacerse: grandes ganchos, coros más grandes y una banda en vivo al máximo. Prensado en vinil ocre, cortado para la primera fila.",
        facts: { release: "Lanzamiento", releaseValue: "4 de diciembre de 2026", formats: "Formatos", formatsValue: "Vinil · CD · Digital", label: "Sello", labelValue: "Big Time Collective" },
        cta: { pre: "Pre-savea el álbum", join: "Únete a la lista" },
      },
      tracklist: { title: "Tracklist", note: "Duración 38:12 · 12 pistas", interlude: "intermedio", side: { a: "Lado A", b: "Lado B" } },
      band: {
        eyebrow: "Los cuatro",
        title: "Sigue la<br>misma locura",
        copy: "Kendall, James, Carlos y Logan — cuatro voces, una cantidad ridícula de energía. Veinte años y siguen siendo la banda más ruidosa de la sala.",
        member: {
          kendall: { line: "El de la plan. Generalmente una mala.", role: "Voz · Guitarra" },
          james: { line: "El pelo tiene su propio rider. Vale la pena.", role: "Voz · Bajo" },
          carlos: { line: "Se lanzará a escenario a cualquier cosa. Cualquier cosa.", role: "Voz · Batería" },
          logan: { line: "Escribió el puente. Todo el puente.", role: "Voz · Teclados" }
        }
      },
      listen: {
        eyebrow: "En todas partes ahora",
        title: "Escucha<br><span>ya</span>",
        script: "Súbelo.",
        foot: "Digital, CD y vinil ocre limitado — disponible para todo el mundo.",
        cta: { vinyl: "Consigue el vinil" },
        platforms: {
          spotify: { name: "Spotify", sub: "Escuchar" },
          apple: { name: "Apple Music", sub: "Escuchar" },
          youtube: { name: "YouTube", sub: "Ver" },
          amazon: { name: "Amazon Music", sub: "Escuchar" }
        }
      },
      tour: {
        ticket: "Entradas",
        dateLA: "12 de febrero",
        dateMexico: "20 de febrero",
        dateNY: "05 de marzo",
        eyebrow: "En la ruta",
        title: "En vivo<br>&amp; fuerte",
        copy: "La gira Back to Big Time toca arenas en 2027. La preventa abre con el álbum.",
        sold: "Agotado",
        note: "Más fechas se anuncian cada viernes. Consigue acceso primero →"
      },
      signup: {
        eyebrow: "La lista de correo",
        title: "Quédate en<br>la locura",
        copy: "Códigos de preventa, fechas de gira y la ocasional nota de voz del estudio. Sin spam — solo lo bueno.",
        label: "Correo electrónico",
        formNote: "Al registrarte aceptas recibir correos electrónicos de Big Time Rush. Cancela en cualquier momento.",
        status: { success: "Estás en la lista. Revisa tu correo para el código de preventa.", error: "¿Ese correo no se ve bien? — inténtalo de nuevo." },
        cta: { submit: "Apúntame" }
      },
      footer: { code: "BTR–026 · LADO A", poster: "Póster ↓", copy: "© 2026 Big Time Rush. Sitio conceptual no oficial." },
      meta: {
        description: "Big Time Rush está de vuelta. Nuevo álbum «Back to Big Time» — ya disponible. Escucha en todas partes.",
        ogTitle: "Big Time Rush — De vuelta a Big Time",
        ogDescription: "El nuevo álbum, ya disponible. Doce pistas, una nueva era."
      }
    }
  };
  var langToggle = document.getElementById("lang-toggle");
  var currentLang = "es";

  function i18nLookup(lang, key) {
    var table = i18nStrings[lang] || i18nStrings.en;
    var parts = key.split(".");
    var value = table;
    for (var i = 0; i < parts.length; i++) {
      if (!value) return null;
      value = value[parts[i]];
    }
    return value;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var n = 0; n < nodes.length; n++) {
      var key = nodes[n].getAttribute("data-i18n");
      var text = i18nLookup(lang, key);
      if (text) nodes[n].innerHTML = text;
    }

    var statusEl = document.getElementById("form-status");
    if (statusEl) statusEl.innerHTML = i18nLookup(lang, "signup.status.success");

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", i18nLookup(lang, "meta.description") || "");

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", i18nLookup(lang, "meta.ogTitle") || "");

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", i18nLookup(lang, "meta.ogDescription") || "");

    var cd = document.getElementById("countdown");
    if (cd) cd.setAttribute("aria-label", i18nLookup(lang, "countdown.label") || "Album countdown");

    var scrollCue = document.querySelector(".scroll-cue");
    if (scrollCue) scrollCue.setAttribute("aria-label", i18nLookup(lang, "scrollAria") || "Scroll to the album");

    if (document.documentElement) document.documentElement.setAttribute("lang", lang);
    if (langToggle) {
      langToggle.textContent = lang === "es" ? "ES" : "EN";
      langToggle.setAttribute("aria-pressed", String(lang === "es"));
      langToggle.setAttribute("aria-label", lang === "es" ? "Cambiar idioma" : "Switch language");
    }
    var menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
      var navEl = document.getElementById("site-nav");
      var open = navEl ? navEl.classList.contains("is-open") : false;
      menuToggle.setAttribute("aria-label", open ? i18nLookup(lang, "nav.menuClose") : i18nLookup(lang, "nav.menuOpen"));
    }
  }

  var storedLang = null;
  try { storedLang = window.localStorage.getItem(LANG_KEY); } catch (e) { storedLang = null; }
  currentLang = storedLang && i18nStrings[storedLang] ? storedLang : "es";
  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var next = currentLang === "en" ? "es" : "en";
      currentLang = next;
      try { window.localStorage.setItem(LANG_KEY, next); } catch (e) {}
      applyLanguage(next);
    });
  }

  /* ---------- scroll reveals ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- countdown ---------- */
  var countdown = document.getElementById("countdown");
  if (!countdown) return;

  var target = new Date(countdown.dataset.date || "");
  var fields = {
    days: countdown.querySelector('[data-unit="days"]'),
    hours: countdown.querySelector('[data-unit="hours"]'),
    minutes: countdown.querySelector('[data-unit="minutes"]'),
    seconds: countdown.querySelector('[data-unit="seconds"]')
  };
  var timerEl = countdown.querySelector(".timer");
  var liveEl = countdown.querySelector(".countdown-live");
  var intervalId = null;

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function tick() {
    var diff = target.getTime() - Date.now();

    if (isNaN(target.getTime())) return;

    if (diff <= 0) {
      countdown.classList.add("is-live");
      if (timerEl) timerEl.hidden = true;
      if (liveEl) liveEl.hidden = false;
      if (intervalId) window.clearInterval(intervalId);
      return;
    }

    var totalSeconds = Math.floor(diff / 1000);
    var days = Math.floor(totalSeconds / 86400);
    var hours = Math.floor((totalSeconds % 86400) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    if (fields.days) fields.days.textContent = pad(days);
    if (fields.hours) fields.hours.textContent = pad(hours);
    if (fields.minutes) fields.minutes.textContent = pad(minutes);
    if (fields.seconds) fields.seconds.textContent = pad(seconds);
  }

  if (!isNaN(target.getTime())) {
    tick();
    intervalId = window.setInterval(tick, 1000);
  }

  /* ---------- signup form ---------- */
  var form = document.getElementById("signup-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var input = form.querySelector("#email");
      var email = input ? input.value.trim() : "";
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

      status.classList.remove("is-error", "is-success");

      if (!valid) {
        status.innerHTML = i18nLookup(currentLang, "signup.status.error");
        status.classList.add("is-error");
        if (input) input.focus();
        return;
      }

      status.innerHTML = i18nLookup(currentLang, "signup.status.success");
      status.classList.add("is-success");
      form.reset();
    });
  }
})();
