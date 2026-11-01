// Lógica del sitio RIBEC. Cada página incluye datos.js antes que este archivo
// y solo se renderiza lo que exista en el documento.

// Lógica del sitio RIBEC. Cada página incluye datos.js antes que este archivo
// y solo se renderiza lo que exista en el documento.

const lang = localStorage.getItem('lang') || 'es';
const isEn = lang === 'en';

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
    : `<span class="ty">${TYPES[t]}</span>${vol}, ${y}.`;
  const links = [
    x.doi ? `<a href="https://doi.org/${esc(x.doi)}" target="_blank" rel="noopener">DOI</a>` : "",
    x.pdf ? `<a href="articulos/${esc(x.pdf)}" target="_blank" rel="noopener">${x.pdf.endsWith(".png") ? "Póster" : "PDF"}</a>` : ""
  ].filter(Boolean).join(" · ");
  return `<li><span class="au">${authorsHTML(authors)}</span>. <span class="ti">${italic(title)}</span>. ${venue}${links ? ` <span class="lk">${links}</span>` : ""}</li>`;
}

/* ---------- Inicio ---------- */
const homeMembers = document.getElementById("home-members");
if (homeMembers) {
  homeMembers.innerHTML = Object.values(MEMBERS).map(m => `<li><a href="miembros.html">${esc(m.name)}</a></li>`).join("");
  const years = PUBS.map(p => p[0]);
  document.getElementById("home-stats").textContent =
    `${PUBS.length} trabajos publicados entre ${Math.min(...years)} y ${Math.max(...years)}: artículos en revistas indexadas, capítulos de libro, ponencias y pósteres en congresos, y preprints. La lista completa está en la sección Publicaciones.`;
}

/* ---------- Miembros ---------- */
const membersEl = document.getElementById("members");
if (membersEl) {
  membersEl.innerHTML = Object.entries(MEMBERS).map(([k, m]) => {
    const extension = (k === 'D') ? 'jpg' : 'webp';
    return `
    <div class="member-card">
      <img src="img/${k}.${extension}" alt="Foto de ${esc(m.name)}" class="member-photo" onerror="this.src='img/default.png'">
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
  const wanted = new URLSearchParams(location.search).get("autor");
  if (wanted && MEMBERS[wanted]) who.value = wanted;

  function renderPubs() {
    const f = who.value, s = plain(q.value.trim());
    const items = PUBS.filter(p =>
      (f === "all" || p[6].includes(f)) &&
      (!s || plain(p[3] + " " + p[4] + " " + p[5] + " " + TYPES[p[2]]).includes(s)));
    document.getElementById("count").textContent =
      `${items.length} ${items.length === 1 ? (isEn ? "work" : "referencia") : (isEn ? "works" : "referencias")}${f === "all" ? "" : " " + (isEn ? "by" : "de") + " " + MEMBERS[f].name}${s ? " " + (isEn ? "matching the search" : "que coinciden con la búsqueda") : ""}. ${isEn ? "Group members are shown in bold." : "Los miembros del grupo aparecen en negrita."}`;
    const list = document.getElementById("list"), nav = document.getElementById("pubnav");
    if (!items.length) { list.innerHTML = '<p class="empty">No hay referencias con ese texto.</p>'; nav.innerHTML = ""; return; }
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
  renderPubs();
}