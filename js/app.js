// Lógica del sitio RIBEC. Cada página incluye datos.js antes que este archivo
// y solo se renderiza lo que exista en el documento.

const lang = localStorage.getItem('lang') || 'es';
const isEn = lang === 'en';
const typeName = t => (isEn ? TYPES_EN : TYPES)[t];
document.documentElement.lang = lang;

// En la web publicada, oculta "index.html" y ".html" de la barra de direcciones
// (GitHub Pages abre /miembros como miembros.html). Al abrir los archivos
// desde la computadora no se toca nada, para que la vista previa siga funcionando.
if (location.protocol !== "file:") {
  const clean = location.pathname.replace(/index\.html$/, "").replace(/\.html$/, "");
  if (clean !== location.pathname) history.replaceState(null, "", clean + location.search + location.hash);
  document.addEventListener("click", e => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    const a = e.target.closest("a[href]");
    if (a && a.origin === location.origin && /\.html$/.test(a.pathname)) {
      e.preventDefault();
      location.href = a.pathname.replace(/index\.html$/, "").replace(/\.html$/, "") + a.search + a.hash;
    }
  });
}
if (isEn) document.title = "RIBEC · " + TEXTOS.en.banner_tit;

document.addEventListener("DOMContentLoaded", () => {
  // Traduce los textos estáticos y placeholders del HTML
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TEXTOS[lang] && TEXTOS[lang][key]) {
      if (el.tagName === 'INPUT') {
        el.placeholder = TEXTOS[lang][key];
      } else {
        el.innerHTML = TEXTOS[lang][key];
      }
    }
  });

  // Configura el botón de cambio de idioma
  const btnLang = document.getElementById("btn-lang");
  if (btnLang) {
    btnLang.innerHTML = isEn ? "ES" : "EN";
    btnLang.addEventListener("click", () => {
      localStorage.setItem('lang', isEn ? 'es' : 'en');
      location.reload(); 
    });
  }
});

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const italic = s => esc(s).replace(/\*([^*]+)\*/g, "<i>$1</i>");
const plain = s => String(s).replace(/\*/g, "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const memberNames = Object.values(MEMBERS).flatMap(m => [m.name, ...(m.alias || [])]);
const pubsOf = k => PUBS.filter(p => p[6].includes(k));

// Temas de cada publicación, calculados una sola vez a partir de su título
const pubTags = new Map(PUBS.map(p => [p, Object.keys(TAGS).filter(k => TAGS[k].re.test(plain(p[3])))]));
const tagName = k => TAGS[k][isEn ? "en" : "es"];
const chipHTML = (k, pressed, count) =>
  `<button type="button" class="chip" data-tag="${k}" aria-pressed="${pressed}">${esc(k ? tagName(k) : (isEn ? "All topics" : "Todos los temas"))}${count != null ? `<small>${count}</small>` : ""}</button>`;

function authorsHTML(a) {
  return a.split(" · ").map(n => {
    if (n === "[…]") return "et al.";
    const e = esc(n);
    return memberNames.includes(n) ? `<b>${e}</b>` : e;
  }).join("; ");
}

// Referencia: AUTORES. Título. Revista, volumen, páginas, año. DOI · PDF
function refHTML(p) {
  const [y, , t, title, journal, authors, , x = {}] = p;
  const vol = x.v ? `, ${esc(x.v)}` : "";
  const venue = journal
    ? `<span class="jo">${esc(journal)}</span>${vol}, ${y}.`
    : `<span class="ty">${typeName(t)}</span>${vol}, ${y}.`;
  const links = [
    x.doi ? `<a href="https://doi.org/${esc(x.doi)}" target="_blank" rel="noopener">DOI</a>` : "",
    x.pdf ? `<a href="articulos/${esc(x.pdf)}" target="_blank" rel="noopener">${x.pdf.endsWith(".png") ? typeName("O") : "PDF"}</a>` : ""
  ].filter(Boolean).join(" · ");
  const tags = pubTags.get(p).map(k => chipHTML(k, false)).join("");
  return `<li><span class="au">${authorsHTML(authors)}</span>. <span class="ti">${italic(title)}</span>. ${venue}${links ? ` <span class="lk">${links}</span>` : ""}${tags ? ` <span class="tg">${tags}</span>` : ""}</li>`;
}

/* ---------- Inicio ---------- */
const homeMembers = document.getElementById("home-members");
if (homeMembers) {
  homeMembers.innerHTML = Object.values(MEMBERS).map(m => `<li><a href="miembros.html">${esc(m.name)}</a></li>`).join("");
  const years = PUBS.map(p => p[0]);
  document.getElementById("home-stats").textContent = isEn
    ? `${PUBS.length} works published between ${Math.min(...years)} and ${Math.max(...years)}: articles in indexed journals, book chapters, conference papers and posters, and preprints. The full list is available in the Publications section.`
    : `${PUBS.length} trabajos publicados entre ${Math.min(...years)} y ${Math.max(...years)}: artículos en revistas indexadas, capítulos de libro, ponencias y pósteres en congresos, y preprints. La lista completa está en la sección Publicaciones.`;
}

/* ---------- Miembros ---------- */
const membersEl = document.getElementById("members");
if (membersEl) {
  membersEl.innerHTML = Object.entries(MEMBERS).map(([k, m]) => {
    const extension = (k === 'D') ? 'jpg' : 'webp';
    return `
    <div class="member-card">
      <img src="img/${k}.${extension}" alt="${isEn ? "Photo of" : "Foto de"} ${esc(m.name)}" class="member-photo" onerror="this.src='img/default.png'">
      <div class="nm">${esc(m.name)}</div>
      <div class="rl">${esc(isEn && m.role_en ? m.role_en : m.role)}</div>
      ${m.lines ? `<div class="rl">${isEn ? "Research areas" : "Líneas"}: ${esc(isEn && m.lines_en ? m.lines_en : m.lines)}</div>` : ""}
      <div class="lk">
        ${pubsOf(k).length ? `<a href="publicaciones.html?autor=${k}">${isEn ? "Publications with the network" : "Publicaciones con la red"} (${pubsOf(k).length})</a>` : `<span>${isEn ? "No publications registered" : "Sin publicaciones registradas"}</span>`}
        <div>${[
          m.rg ? `<a href="${m.rg}" target="_blank" rel="noopener">ResearchGate</a>` : "",
          m.orcid ? `<a href="https://orcid.org/${m.orcid}" target="_blank" rel="noopener">ORCID</a>` : ""
        ].filter(Boolean).join(" · ")}</div>
        ${m.stats ? `<span style="color: var(--muted); font-size: 13px; display: block; margin-top: 4px;">${m.stats[1]} ${isEn ? "reads" : "lecturas"}, ${m.stats[2]} ${isEn ? "citations on RG" : "citas en RG"}</span>` : ""}
      </div>
    </div>`;
  }).join("");
}

/* ---------- Publicaciones ---------- */
const who = document.getElementById("who");
if (who) {
  const q = document.getElementById("q");
  Object.entries(MEMBERS).forEach(([k, m]) => who.add(new Option(m.name, k)));
  const params = new URLSearchParams(location.search);
  const wanted = params.get("autor");
  if (wanted && MEMBERS[wanted]) who.value = wanted;
  let tag = TAGS[params.get("tema")] ? params.get("tema") : "";
  const tagbar = document.getElementById("tagbar");

  // Guarda el tema elegido en la dirección, para poder compartir el enlace filtrado
  function setTag(k) {
    tag = k === tag ? "" : k;
    try {
      const u = new URL(location.href);
      tag ? u.searchParams.set("tema", tag) : u.searchParams.delete("tema");
      history.replaceState(null, "", u.pathname + u.search + u.hash);
    } catch (e) { /* al abrir el archivo localmente algunos navegadores no lo permiten */ }
    renderPubs();
    tagbar.scrollIntoView({ block: "nearest" });
  }

  function renderPubs() {
    const f = who.value, s = plain(q.value.trim());
    const base = PUBS.filter(p =>
      (f === "all" || p[6].includes(f)) &&
      (!s || plain(p[3] + " " + p[4] + " " + p[5] + " " + typeName(p[2]) + " " + pubTags.get(p).map(tagName).join(" ")).includes(s)));
    const items = tag ? base.filter(p => pubTags.get(p).includes(tag)) : base;

    // Barra de temas: solo muestra los que tienen publicaciones con los filtros actuales
    const n = {};
    base.forEach(p => pubTags.get(p).forEach(k => n[k] = (n[k] || 0) + 1));
    tagbar.innerHTML = chipHTML("", !tag) + Object.keys(TAGS).filter(k => n[k] || k === tag).map(k => chipHTML(k, k === tag, n[k] || 0)).join("");

    document.getElementById("count").textContent =
      `${items.length} ${items.length === 1 ? (isEn ? "work" : "referencia") : (isEn ? "works" : "referencias")}${f === "all" ? "" : " " + (isEn ? "by" : "de") + " " + MEMBERS[f].name}${tag ? " " + (isEn ? "on" : "sobre") + " «" + tagName(tag) + "»" : ""}${s ? " " + (isEn ? "matching the search" : "que coinciden con la búsqueda") : ""}. ${isEn ? "Group members are shown in bold." : "Los miembros del grupo aparecen en negrita."}`;
    const list = document.getElementById("list"), nav = document.getElementById("pubnav");
    if (!items.length) { list.innerHTML = `<p class="empty">${isEn ? "No works match that search." : "No hay referencias con ese texto."}</p>`; nav.innerHTML = ""; return; }
    const pre = items.filter(p => p[2] === "P");
    const groups = {};
    items.filter(p => p[2] !== "P").forEach(p => (groups[p[0]] ||= []).push(p));
    const ys = Object.keys(groups).sort((a, b) => b - a);
    nav.innerHTML = (isEn ? "Go to: " : "Ir a: ") + [...(pre.length ? [`<a href="#preprints">Preprints</a>`] : []), ...ys.map(y => `<a href="#y${y}">${y}</a>`)].join(" · ");
    let h = "";
    if (pre.length) h += `<div class="yr" id="preprints"><h3>Preprints<small>${pre.length}</small></h3><ol class="refs">${pre.map(refHTML).join("")}</ol></div>`;
    h += ys.map(y => `<div class="yr" id="y${y}"><h3>${isEn ? "Publications" : "Publicaciones"} ${y}<small>${groups[y].length}</small></h3><ol class="refs">${groups[y].map(refHTML).join("")}</ol></div>`).join("");
    list.innerHTML = h;
  }
  who.addEventListener("change", renderPubs);
  q.addEventListener("input", renderPubs);
  // Un clic en cualquier tema (en la barra o en una referencia) filtra por ese tema
  document.addEventListener("click", e => {
    const b = e.target.closest("button.chip[data-tag]");
    if (b) setTag(b.dataset.tag);
  });
  renderPubs();
}