(function () {
  "use strict";

  var OPENSEA = "https://opensea.io/collection/postes-imperiales-des-enfers";
  var CONTRACT = "https://opensea.io/item/ethereum/0x534345e8ecc874cf8986260e0caf4602e58b6187/";
  var LANGS = ["ja", "en", "fr", "de"];

  /* ---------- UI strings ---------- */
  var T = {
    ja: {
      bureauShort: "地獄帝国郵政局",
      navHistory: "沿革", navCatalogue: "目録", navPostmarks: "消印",
      eyebrow: "公式目録 · 冥界頒布版",
      lede: ["此岸から彼岸へ", "生者の祈りを冥界へ届ける", "ただひとつの郵政機関"],
      seriesLabel: "シリーズ", series: "欧州今昔百鬼拾遺",
      yearsLabel: "発行", years: "原版 1818年 ／ 復刻 2026年",
      issuesLabel: "発行点数", issues: "12種 × 3版 ＝ 36点",
      ctaCatalogue: "目録をひらく", ctaOpensea: "OpenSeaで本切手を見る",
      catalogueTitle: "切手目録",
      catalogueNote: "掲載図版はすべて当局発行の見本刷り（SPECIMEN）です。本切手はOpenSeaにて頒布しています。",
      regularTitle: "正規発行", regularNote: "『地獄の辞典』上に序列と軍団数を持つ九柱の魔神 ／ No. 001–009",
      cinderellaTitle: "シンデレラ切手", cinderellaNote: "公式の位階を持たぬ使い魔と魔女 ／ No. A–C",
      edOriginal: "オリジナル", edMint: "未使用版", edUsed: "使用済み版",
      edOriginalNote: "切手意匠の原画となった絵画作品。",
      edMintNote: "原画に目打と透かし紋様を施し、切手の体裁としたもの。",
      edUsedNote: "未使用版に、月の運行に結ばれた消印を押したもの。",
      postmarksTitle: "消印",
      postmarksNote: "当局の消印は四種。いずれも月の運行に結ばれ、日蝕と月蝕の特殊消印にはヘカテーの車輪が刻まれる。",
      footSign: "地獄帝国郵政局長　荒れ地の魔女",
      footCopy: "図版の無断転載を禁じます。",
      chapter: "章", prev: "← 前へ", next: "次へ →",
      face: "額面", noFace: "無額面", meika: "冥貨", highest: "最高額面",
      postmark: "消印", watermark: "透かし紋様", issue: "発行区分",
      regular: "正規発行", cinderella: "シンデレラ切手", portrait: "人物版",
      special: "特印", specimen: "見本刷り",
      specimenPending: "見本刷り 準備中",
      viewOnOpensea: "本切手をOpenSeaで見る",
      viewEdition: function (ed) { return "この" + ed + "をOpenSeaで見る"; },
      prevStamp: "← 前の切手", nextStamp: "次の切手 →",
      pm: { new: "新月", full: "満月", solar: "日蝕", lunar: "月蝕" },
      pmFr: { new: "Nouvelle Lune", full: "Pleine Lune", solar: "Éclipse Solaire", lunar: "Éclipse Lunaire" },
      pmIssue: { regular: "通常発行", commemorative: "記念発行" },
      assigned: "押印対象",
      value: function (n) { return n + " 冥貨"; }
    },
    en: {
      bureauShort: "Imperial Posts of the Underworld",
      navHistory: "History", navCatalogue: "Catalogue", navPostmarks: "Postmarks",
      eyebrow: "Official Catalogue · Edition for the Underworld",
      lede: ["From this shore to the far shore", "Carrying the prayers of the living into the underworld", "The one and only postal authority"],
      seriesLabel: "Series", series: "Europe's Hundred Demons, Old and New",
      yearsLabel: "Issued", years: "Original 1818 / Reissue 2026",
      issuesLabel: "Pieces", issues: "12 designs × 3 editions = 36 pieces",
      ctaCatalogue: "Open the catalogue", ctaOpensea: "See the stamps on OpenSea",
      catalogueTitle: "Stamp Catalogue",
      catalogueNote: "Every plate shown here is a SPECIMEN issued by the Bureau. The stamps themselves are distributed on OpenSea.",
      regularTitle: "Regular Issue", regularNote: "Nine demons holding rank and legions in the Dictionnaire Infernal / No. 001–009",
      cinderellaTitle: "Cinderella Stamps", cinderellaNote: "Familiars and a witch without official rank / No. A–C",
      edOriginal: "Original Art", edMint: "Mint Edition", edUsed: "Used Edition",
      edOriginalNote: "The painting from which the stamp design was taken.",
      edMintNote: "The original given perforations and a watermark, in the form of a stamp.",
      edUsedNote: "The mint edition struck with a postmark bound to the motions of the moon.",
      postmarksTitle: "Postmarks",
      postmarksNote: "The Bureau strikes four postmarks, each bound to the moon. The two eclipse Special Postmarks bear the Wheel of Hecate.",
      footSign: "Director-General · The Witch of the Heath",
      footCopy: "All illustrations are protected. Please do not reproduce.",
      chapter: "Chapter", prev: "← Previous", next: "Next →",
      face: "Face Value", noFace: "None", meika: "Meika", highest: "Highest Denomination",
      postmark: "Postmark", watermark: "Watermark", issue: "Issue",
      regular: "Regular Issue", cinderella: "Cinderella Stamp", portrait: "Portrait Issue",
      special: "Special Postmark", specimen: "Specimen",
      specimenPending: "Specimen in preparation",
      viewOnOpensea: "See this stamp on OpenSea",
      viewEdition: function (ed) { return "See the " + ed + " on OpenSea"; },
      prevStamp: "← Previous stamp", nextStamp: "Next stamp →",
      pm: { new: "New Moon", full: "Full Moon", solar: "Solar Eclipse", lunar: "Lunar Eclipse" },
      pmFr: { new: "Nouvelle Lune", full: "Pleine Lune", solar: "Éclipse Solaire", lunar: "Éclipse Lunaire" },
      pmIssue: { regular: "Regular issue", commemorative: "Commemorative issue" },
      assigned: "Struck on",
      value: function (n) { return n + " Meika"; }
    },
    fr: {
      bureauShort: "Postes Impériales des Enfers",
      navHistory: "Historique", navCatalogue: "Catalogue", navPostmarks: "Oblitérations",
      eyebrow: "Catalogue officiel · Édition pour les Enfers",
      lede: ["De cette rive à l'autre rive", "Portant aux Enfers la prière des vivants", "L'unique administration postale"],
      seriesLabel: "Série", series: "Cent démons d'Europe, d'hier et d'aujourd'hui",
      yearsLabel: "Émission", years: "Originale 1818 / Réédition 2026",
      issuesLabel: "Pièces", issues: "12 motifs × 3 éditions = 36 pièces",
      ctaCatalogue: "Ouvrir le catalogue", ctaOpensea: "Voir les timbres sur OpenSea",
      catalogueTitle: "Catalogue des timbres",
      catalogueNote: "Toutes les planches présentées ici sont des SPECIMEN émis par notre Administration. Les timbres eux-mêmes sont diffusés sur OpenSea.",
      regularTitle: "Émission ordinaire", regularNote: "Neuf démons pourvus d'un rang et de légions dans le Dictionnaire Infernal / No. 001–009",
      cinderellaTitle: "Vignettes (Cinderella)", cinderellaNote: "Familiers et sorcière sans rang officiel / No. A–C",
      edOriginal: "Œuvre originale", edMint: "Édition neuve", edUsed: "Édition oblitérée",
      edOriginalNote: "Le tableau d'où provient le dessin du timbre.",
      edMintNote: "L'original doté d'une dentelure et d'un filigrane, sous forme de timbre.",
      edUsedNote: "L'édition neuve frappée d'une oblitération liée aux mouvements de la lune.",
      postmarksTitle: "Oblitérations",
      postmarksNote: "Notre Administration appose quatre oblitérations, toutes liées à la lune. Les deux Oblitérations Spéciales d'éclipse portent la Roue d'Hécate.",
      footSign: "Directrice générale · La Sorcière de la Lande",
      footCopy: "Toute reproduction des illustrations est interdite.",
      chapter: "Chapitre", prev: "← Précédent", next: "Suivant →",
      face: "Valeur faciale", noFace: "Sans valeur faciale", meika: "Meika", highest: "Plus haute valeur faciale",
      postmark: "Oblitération", watermark: "Filigrane", issue: "Émission",
      regular: "Émission ordinaire", cinderella: "Vignette (Cinderella)", portrait: "Édition à portrait",
      special: "Oblitération spéciale", specimen: "Specimen",
      specimenPending: "Specimen en préparation",
      viewOnOpensea: "Voir ce timbre sur OpenSea",
      viewEdition: function (ed) { return (/^[ÉEŒO]/.test(ed) ? "Voir l\u2019" : "Voir la ") + ed + " sur OpenSea"; },
      prevStamp: "← Timbre précédent", nextStamp: "Timbre suivant →",
      pm: { new: "Nouvelle Lune", full: "Pleine Lune", solar: "Éclipse Solaire", lunar: "Éclipse Lunaire" },
      pmFr: { new: "Nouvelle Lune", full: "Pleine Lune", solar: "Éclipse Solaire", lunar: "Éclipse Lunaire" },
      pmIssue: { regular: "Émission ordinaire", commemorative: "Émission commémorative" },
      assigned: "Apposée sur",
      value: function (n) { return n + " Meika"; }
    },
    de: {
      bureauShort: "Kaiserliche Post der Unterwelt",
      navHistory: "Geschichte", navCatalogue: "Katalog", navPostmarks: "Poststempel",
      eyebrow: "Amtlicher Katalog · Ausgabe für die Unterwelt",
      lede: ["Vom Diesseits ins Jenseits", "Die Gebete der Lebenden bis in die Unterwelt getragen", "Die einzige Postbehörde ihrer Art"],
      seriesLabel: "Serie", series: "Hundert Dämonen Europas, einst und jetzt",
      yearsLabel: "Ausgabe", years: "Original 1818 / Neuauflage 2026",
      issuesLabel: "Stückzahl", issues: "12 Motive × 3 Ausgaben = 36 Stücke",
      ctaCatalogue: "Katalog öffnen", ctaOpensea: "Die Marken auf OpenSea ansehen",
      catalogueTitle: "Briefmarkenkatalog",
      catalogueNote: "Alle hier gezeigten Abbildungen sind von unserer Behörde ausgegebene SPECIMEN. Die Marken selbst werden auf OpenSea ausgegeben.",
      regularTitle: "Regelausgabe", regularNote: "Neun Dämonen mit Rang und Legionen im Dictionnaire Infernal / Nr. 001–009",
      cinderellaTitle: "Cinderella-Marken", cinderellaNote: "Vertraute und eine Hexe ohne offiziellen Rang / Nr. A–C",
      edOriginal: "Originalwerk", edMint: "Erstausgabe", edUsed: "Gestempelte Ausgabe",
      edOriginalNote: "Das Gemälde, dem das Markenmotiv entnommen ist.",
      edMintNote: "Das Original mit Zähnung und Wasserzeichen, in Gestalt einer Briefmarke.",
      edUsedNote: "Die Erstausgabe mit einem Stempel, der an den Lauf des Mondes gebunden ist.",
      postmarksTitle: "Poststempel",
      postmarksNote: "Unsere Behörde setzt vier Stempel, alle an den Mond gebunden. Die beiden Finsternis-Sonderstempel tragen das Rad der Hekate.",
      footSign: "Generaldirektorin · Die Hexe der Heide",
      footCopy: "Jede Vervielfältigung der Abbildungen ist untersagt.",
      chapter: "Kapitel", prev: "← Zurück", next: "Weiter →",
      face: "Nennwert", noFace: "Ohne Nennwert", meika: "Meika", highest: "Höchster Nennwert",
      postmark: "Poststempel", watermark: "Wasserzeichen", issue: "Ausgabe",
      regular: "Regelausgabe", cinderella: "Cinderella-Marke", portrait: "Porträtausgabe",
      special: "Sonderstempel", specimen: "Specimen",
      specimenPending: "Specimen in Vorbereitung",
      viewOnOpensea: "Diese Marke auf OpenSea ansehen",
      viewEdition: function (ed) { return (ed === "Originalwerk" ? "Das " : "Die ") + ed.replace("Gestempelte", "gestempelte") + " auf OpenSea ansehen"; },
      prevStamp: "← Vorige Marke", nextStamp: "Nächste Marke →",
      pm: { new: "Neumond", full: "Vollmond", solar: "Sonnenfinsternis", lunar: "Mondfinsternis" },
      pmFr: { new: "Nouvelle Lune", full: "Pleine Lune", solar: "Éclipse Solaire", lunar: "Éclipse Lunaire" },
      pmIssue: { regular: "Regelausgabe", commemorative: "Gedenkausgabe" },
      assigned: "Gesetzt auf",
      value: function (n) { return n + " Meika"; }
    }
  };

  var POSTMARKS = [
    { key: "solar", date: "08-12-2026", special: true, issue: "commemorative" },
    { key: "lunar", date: "08-28-2026", special: true, issue: "commemorative" },
    { key: "new",   date: "09-11-2026", special: false, issue: "regular" },
    { key: "full",  date: "09-26-2026", special: false, issue: "regular" }
  ];

  var EDITIONS = ["original", "mint", "used"];
  var ED_LABEL = { original: "edOriginal", mint: "edMint", used: "edUsed" };

  var H = window.PIE_HISTORY;
  var C = window.PIE_CATALOGUE;

  var state = { lang: "ja", chapter: 0, stamp: 0, edition: "original" };

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function t(k) { return T[state.lang][k]; }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  function stampName(s) { return state.lang === "ja" ? s.name.ja : s.name.latin; }
  function faceShort(s) { return s.face == null ? t("noFace") : t("value")(s.face); }
  function imgPath(s, ed, thumb) { return "images/specimen/" + (thumb ? "thumb/" : "") + s.file + "_" + ed + ".jpg"; }

  /* ---------- language ---------- */
  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS.indexOf(q) > -1) return q;
    var saved = store("pie-lang");
    if (saved && LANGS.indexOf(saved) > -1) return saved;
    return "en";
  }

  function setLang(l) {
    state.lang = l;
    document.documentElement.lang = l;
    document.body.setAttribute("data-lang", l);
    store("pie-lang", l);
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === l ? "true" : "false"); });
    $$("[data-i18n]").forEach(function (n) {
      var v = T[l][n.dataset.i18n];
      if (typeof v === "string") n.textContent = v;
      else if (Array.isArray(v)) n.innerHTML = v.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("");
    });
    renderHistory();
    renderCatalogue();
    renderPostmarks();
    if ($("#sheet").open) renderSheet();
  }

  /* ---------- history ---------- */
  function renderHistory() {
    var doc = H[state.lang];
    $("#historyTitle").textContent = doc.title;
    var nav = $(".chapters");
    nav.innerHTML = "";
    doc.sections.forEach(function (sec, i) {
      var b = el("button", "chap-btn", esc(sec.h));
      b.type = "button";
      b.setAttribute("aria-current", i === state.chapter ? "true" : "false");
      b.addEventListener("click", function () { goChapter(i, true); });
      nav.appendChild(b);
    });
    var sec = doc.sections[state.chapter];
    var art = $(".chapter");
    art.innerHTML = "";
    art.appendChild(el("h3", "chapter-title", esc(sec.h)));
    sec.p.forEach(function (p) {
      if (typeof p === "object") art.appendChild(el("p", "maxim", p.q));
      else art.appendChild(el("p", null, p));
    });
    if (state.chapter === doc.sections.length - 1) {
      var sig = el("div", "signature");
      sig.innerHTML = "<span>" + esc(doc.signature[0]) + "</span><strong>" + esc(doc.signature[1]) + "</strong><em>" + esc(doc.motto) + "</em>";
      art.appendChild(sig);
    }
    var n = doc.sections.length;
    $(".pager-prev").textContent = t("prev");
    $(".pager-next").textContent = t("next");
    $(".pager-prev").disabled = state.chapter === 0;
    $(".pager-next").disabled = state.chapter === n - 1;
    $(".pager-count").textContent = (state.chapter + 1) + " / " + n;
  }

  function goChapter(i, focus) {
    state.chapter = i;
    renderHistory();
    if (focus) {
      var top = $("#history").getBoundingClientRect().top + window.scrollY - 70;
      if (window.scrollY > top) window.scrollTo({ top: top, behavior: "smooth" });
    }
  }

  /* ---------- catalogue ---------- */
  function plate(s, ed, big, thumb) {
    var wrap = el("div", "stamp-art" + (big ? " big" : ""));
    var img = new Image();
    img.alt = stampName(s) + " — " + t(ED_LABEL[ed]) + " (" + t("specimen") + ")";
    img.loading = "lazy";
    img.decoding = "async";
    img.onload = function () { wrap.classList.add("has-img"); };
    img.onerror = function () { img.remove(); };
    img.width = 1200; img.height = 900;
    img.src = imgPath(s, ed, thumb);
    var ph = el("div", "placeholder");
    ph.innerHTML =
      '<span class="ph-no">' + esc(s.no) + "</span>" +
      '<span class="ph-name">' + esc(s.name.latin) + "</span>" +
      '<span class="ph-over">SPECIMEN</span>' +
      '<span class="ph-note">' + esc(t("specimenPending")) + "</span>";
    wrap.appendChild(ph);
    wrap.appendChild(img);
    return wrap;
  }

  function card(s, i) {
    var li = el("li", "stamp pm-" + s.postmark);
    var b = el("button", "stamp-btn");
    b.type = "button";
    b.setAttribute("aria-label", "No. " + s.no + " " + stampName(s));
    b.appendChild(plate(s, "mint", false, true));
    var cap = el("div", "stamp-cap");
    cap.innerHTML =
      '<span class="cap-no">No. ' + esc(s.no) + "</span>" +
      '<span class="cap-name">' + esc(stampName(s)) + "</span>" +
      (state.lang === "ja" ? '<span class="cap-latin">' + esc(s.name.latin) + "</span>" : "") +
      '<span class="cap-meta"><span class="cap-face">' + esc(faceShort(s)) + '</span><span class="chip chip-' + s.postmark + '">' + esc(T[state.lang].pm[s.postmark]) + "</span></span>";
    b.appendChild(cap);
    b.addEventListener("click", function () { openSheet(i); });
    li.appendChild(b);
    return li;
  }

  function renderCatalogue() {
    var reg = $("#regularList"), cin = $("#cinderellaList");
    reg.innerHTML = ""; cin.innerHTML = "";
    C.forEach(function (s, i) { (s.cls === "regular" ? reg : cin).appendChild(card(s, i)); });
  }

  /* ---------- detail sheet ---------- */
  function preload(s) {
    EDITIONS.forEach(function (ed) { var im = new Image(); im.src = imgPath(s, ed); });
  }

  /* each stamp and edition has its own address, e.g.  …/#009-used  */
  function setHash(h) {
    try { history.replaceState(null, "", location.pathname + location.search + (h || "")); } catch (e) {}
  }

  function openFromHash() {
    var m = /^#([0-9]{3}|[A-Ca-c])(?:-(original|mint|used))?$/.exec(location.hash);
    if (!m) return false;
    var no = m[1].toUpperCase();
    for (var i = 0; i < C.length; i++) {
      if (C[i].no === no) { openSheet(i, m[2] || "mint"); return true; }
    }
    return false;
  }

  function openSheet(i, ed) {
    state.stamp = i;
    preload(C[i]);
    state.edition = EDITIONS.indexOf(ed) > -1 ? ed : "mint";
    renderSheet();
    var d = $("#sheet");
    if (!d.open) { d.showModal(); document.body.classList.add("locked"); }
    setHash("#" + C[i].no + "-" + state.edition);
    $(".sheet-close").focus();
  }

  function closeSheet() {
    var d = $("#sheet");
    if (d.open) d.close();
    document.body.classList.remove("locked");
  }

  function renderSheet() {
    var s = C[state.stamp];
    preload(s);
    if ($("#sheet").open || document.body.classList.contains("locked")) setHash("#" + s.no + "-" + state.edition);
    var L = T[state.lang];

    var tabs = $(".ed-tabs");
    tabs.innerHTML = "";
    EDITIONS.forEach(function (ed) {
      var b = el("button", "ed-tab", esc(L[ED_LABEL[ed]]));
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", ed === state.edition ? "true" : "false");
      b.addEventListener("click", function () { state.edition = ed; renderSheet(); });
      tabs.appendChild(b);
    });

    var frame = $(".plate-frame");
    frame.innerHTML = "";
    frame.appendChild(plate(s, state.edition, true));
    $(".plate-cap").textContent = L[ED_LABEL[state.edition] + "Note"] + "　" + L.specimen.toUpperCase();

    $(".sheet-no").textContent = "No. " + s.no + "　·　" + (s.cls === "regular" ? L.regular : L.cinderella) + (s.portrait ? (state.lang === "ja" ? "（" + L.portrait + "）" : " (" + L.portrait + ")") : "");
    $("#sheetTitle").textContent = stampName(s);
    $(".sheet-sub").textContent = state.lang === "ja" ? s.name.latin : s.name.ja;

    var body = $(".sheet-body");
    body.innerHTML = "";
    s.text[state.lang].forEach(function (p) { body.appendChild(el("p", null, esc(p))); });

    var face = s.face == null ? L.noFace : L.value(s.face) + (s.highest ? " · " + L.highest : "");
    var pmName = L.pm[s.postmark] + (state.lang === "fr" ? "" : " — " + L.pmFr[s.postmark]);
    var special = (s.postmark === "solar" || s.postmark === "lunar") ? " · " + L.special : "";
    var meta = $(".sheet-meta");
    meta.innerHTML =
      "<div><dt>" + esc(L.face) + "</dt><dd>" + esc(face) + "</dd></div>" +
      "<div><dt>" + esc(L.postmark) + "</dt><dd><span class=\"chip chip-" + s.postmark + "\">" + esc(pmName + special) + "</span> <span class=\"date\">" + esc(s.date) + "</span></dd></div>" +
      "<div><dt>" + esc(L.watermark) + "</dt><dd>" + esc(s.watermark[state.lang]) + "</dd></div>";

    var os = $(".sheet-os");
    os.textContent = L.viewEdition(L[ED_LABEL[state.edition]]);
    os.href = s.token && s.token[state.edition] ? CONTRACT + s.token[state.edition] : OPENSEA;

    var prev = $(".sheet-prev"), next = $(".sheet-next");
    prev.textContent = L.prevStamp; next.textContent = L.nextStamp;
    prev.disabled = state.stamp === 0;
    next.disabled = state.stamp === C.length - 1;
  }

  /* ---------- postmarks ---------- */
  function postmarkImg(p) {
    return '<img src="images/postmarks/' + p.key + '.jpg" width="520" height="520" loading="lazy" alt="' + esc(T[state.lang].pm[p.key]) + ' ' + p.date + '">';
  }

  function renderPostmarks() {
    var g = $("#pmGrid");
    g.innerHTML = "";
    var L = T[state.lang];
    POSTMARKS.forEach(function (p) {
      var assigned = C.filter(function (s) { return s.postmark === p.key; }).map(function (s) { return s.no; }).join(" · ");
      var c = el("div", "pm pm-" + p.key + (p.special ? " is-special" : ""));
      c.tabIndex = 0;
      c.addEventListener("click", function () {
        var on = c.classList.contains("is-held");
        $$(".pm.is-held").forEach(function (x) { x.classList.remove("is-held"); });
        if (!on) c.classList.add("is-held");
      });
      c.innerHTML =
        '<div class="pm-seal">' + postmarkImg(p) + "</div>" +
        '<h4 class="pm-name">' + esc(L.pm[p.key]) + (p.special ? '<small>' + esc(L.special) + "</small>" : "") + "</h4>" +
        '<p class="pm-fr">' + esc(L.pmFr[p.key]) + "</p>" +
        '<p class="pm-line">' + esc(L.pmIssue[p.issue]) + " · " + p.date + "</p>" +
        '<p class="pm-line">' + esc(L.assigned) + "：" + esc(assigned) + "</p>";
      g.appendChild(c);
    });
  }

  /* ---------- wiring ---------- */
  function init() {
    $$(".lang button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.dataset.lang); });
    });
    $(".pager-prev").addEventListener("click", function () { if (state.chapter > 0) goChapter(state.chapter - 1, true); });
    $(".pager-next").addEventListener("click", function () { if (state.chapter < H[state.lang].sections.length - 1) goChapter(state.chapter + 1, true); });

    var d = $("#sheet");
    $(".sheet-close").addEventListener("click", closeSheet);
    d.addEventListener("close", function () { document.body.classList.remove("locked"); setHash(""); });
    d.addEventListener("cancel", function () { document.body.classList.remove("locked"); });
    d.addEventListener("click", function (e) { if (e.target === d) closeSheet(); });
    $(".sheet-prev").addEventListener("click", function () { if (state.stamp > 0) { state.stamp--; renderSheet(); } });
    $(".sheet-next").addEventListener("click", function () { if (state.stamp < C.length - 1) { state.stamp++; renderSheet(); } });
    document.addEventListener("keydown", function (e) {
      if (!d.open) return;
      if (e.key === "ArrowRight" && state.stamp < C.length - 1) { state.stamp++; renderSheet(); }
      if (e.key === "ArrowLeft" && state.stamp > 0) { state.stamp--; renderSheet(); }
    });

    setLang(pickLang());
    if (openFromHash()) {
      var cat = $("#catalogue");
      if (cat) window.scrollTo(0, cat.getBoundingClientRect().top + window.scrollY - 64);
    }
    window.addEventListener("hashchange", openFromHash);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
