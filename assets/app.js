/* ===== Quantum Labs — app.js ===== */
(function () {
  const Q = window.QL;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
  const esc = (s) => String(s).replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));

  /* ---------- boot sequence ---------- */
  const bootLines = [
    "quantum-labs bootloader v1.0",
    "POST .................... ok",
    "mounting /dev/frank ..... ok",
    "loading profile ......... " + Q.profile.name,
    "indexing projects/ ...... " + Q.projects.length + " repos",
    "starting shell .......... ok",
    ""
  ];
  const boot = $("#boot"), bootText = $("#bootText");
  let bi = 0, booted = false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // line-by-line reveal: few timer ticks (throttle-resilient), reads like a boot log
  function bootStep() {
    if (booted) return;
    if (bi >= bootLines.length) { endBoot(); return; }
    bootText.textContent = bootLines.slice(0, bi + 1).join("\n") + " ▋";
    bi++;
    setTimeout(bootStep, 130);
  }
  function skipBoot() {
    if (booted) return;
    bootText.textContent = bootLines.join("\n");
    endBoot();
  }
  function endBoot() {
    if (booted) return;
    booted = true;
    boot.classList.add("done");
    setTimeout(() => { boot.style.display = "none"; }, 520);
    startHero();
  }
  // skip on interaction + hard safety cap so boot can never hang
  boot.addEventListener("click", skipBoot);
  window.addEventListener("keydown", skipBoot, { once: true });
  setTimeout(skipBoot, 2600);

  /* ---------- hero typing ---------- */
  function startHero() {
    $("#brand").textContent = Q.profile.brand;
    $("#role").textContent = Q.profile.role;
    $("#tagline").textContent = Q.profile.tagline;
    $("#githubBtn").href = Q.profile.github;
    if (Q.profile.linkedin) $("#linkedinBtn").href = Q.profile.linkedin;
    const cmd = "whoami && cat banner.txt";
    const target = $("#heroCmd");
    if (reduce) { target.textContent = cmd; return; }
    let k = 0;
    (function typeCmd() {
      target.textContent = cmd.slice(0, k);
      if (k++ < cmd.length) setTimeout(typeCmd, 34);
    })();
  }

  /* ---------- stats ---------- */
  function renderStats() {
    const totalCommits = Q.projects.reduce((a, p) => a + (p.commits || 0), 0);
    const own = Q.projects.filter(p => !p.fork).length;
    const langs = Q.languages.length;
    const consoles = Q.homebrew.length;
    const stats = [
      [own + "+", "projects shipped"],
      [totalCommits.toLocaleString(), "commits authored"],
      [langs + "+", "languages"],
      [consoles, "consoles hacked"],
      ["9+", "homelab nodes"]
    ];
    const row = $("#statRow");
    stats.forEach(([b, s]) => {
      const d = el("div", "stat");
      d.appendChild(el("b", null, b));
      d.appendChild(el("span", null, s));
      row.appendChild(d);
    });
  }

  /* ---------- about ---------- */
  function renderAbout() {
    const c = $("#aboutCard");
    Q.profile.bio.forEach((p, i) => {
      const para = el("p", i === 0 ? "lead" : null, esc(p));
      c.appendChild(para);
    });
  }

  /* ---------- experience + education ---------- */
  function renderExperience() {
    if (Q.experienceNote) $("#expNote").textContent = Q.experienceNote;
    const tl = $("#timeline");
    (Q.experience || []).forEach(x => {
      const item = el("div", "exp reveal");
      const cur = x.duration === "current";
      const bullets = x.bullets.map(b => `<li>${esc(b)}</li>`).join("");
      const tags = (x.tags || []).map(t => `<span class="chip">${esc(t)}</span>`).join("");
      const dur = x.duration && x.duration !== "current" ? ` · ${esc(x.duration)}` : "";
      item.innerHTML =
        `<div class="exp-dot${cur ? " cur" : ""}"></div>` +
        `<div class="exp-card">` +
          `<div class="exp-top"><span class="exp-role">${esc(x.role)}</span>` +
          `<span class="exp-period">${esc(x.period)}${dur}</span></div>` +
          `<div class="exp-co"><span class="exp-coname">${esc(x.company)}</span>` +
          `<span class="exp-meta">${esc(x.type)} · ${esc(x.location)}</span></div>` +
          `<ul class="exp-bullets">${bullets}</ul>` +
          `<div class="chips">${tags}</div>` +
        `</div>`;
      tl.appendChild(item);
    });
    const edu = $("#edu");
    (Q.education || []).forEach(e => {
      const c = el("div", "edu-card reveal");
      c.innerHTML = `<div class="edu-top"><span class="edu-school">${esc(e.school)}</span>` +
        `<span class="exp-period">${esc(e.period)}</span></div>` +
        `<div class="edu-degree">${esc(e.degree)}</div>`;
      edu.appendChild(c);
    });
  }

  /* ---------- languages ---------- */
  function renderLangs() {
    const wrap = $("#langs");
    Q.languages.forEach(l => {
      const d = el("div", "lang");
      d.innerHTML =
        `<div class="lang-top"><span class="lang-name">${esc(l.name)}</span><span class="lang-note">${esc(l.note)}</span></div>` +
        `<div class="bar"><i data-w="${l.level}"></i></div>`;
      wrap.appendChild(d);
    });
  }

  /* ---------- skills ---------- */
  function renderSkills() {
    const grid = $("#skillsGrid");
    Q.skills.forEach(s => {
      const card = el("div", "skill-card reveal");
      const chips = s.items.map(i => `<span class="chip">${esc(i)}</span>`).join("");
      card.innerHTML = `<h4><span class="ic">${s.icon || "▹"}</span>${esc(s.group)}</h4><div class="chips">${chips}</div>`;
      grid.appendChild(card);
    });
  }

  /* ---------- projects ---------- */
  const groups = [...new Set(Q.projects.map(p => p.group))];
  let activeFilter = "all";

  function renderFilters() {
    const bar = $("#filterbar");
    const mk = (key, label) => {
      const b = el("button", "filter" + (key === activeFilter ? " active" : ""), esc(label));
      b.onclick = () => { activeFilter = key; [...bar.children].forEach(c => c.classList.remove("active")); b.classList.add("active"); renderProjects(); };
      return b;
    };
    bar.appendChild(mk("all", "all (" + Q.projects.length + ")"));
    groups.forEach(g => bar.appendChild(mk(g, g.toLowerCase())));
  }

  function projRow(p) {
    const wrap = el("div", "proj reveal");
    const perms = p.fork ? "lrwxr-xr-x" : "drwxr-xr-x";
    const tagsInline = p.tags.slice(0, 3).map(t => `<span class="tag-mini">${esc(t)}</span>`).join("");
    const fork = p.fork ? `<span class="fork-badge">fork</span>` : "";
    const head = el("div", "proj-head");
    head.innerHTML =
      `<span class="perm"><span class="d">${perms[0]}</span>${perms.slice(1)}</span>` +
      `<span class="proj-id"><span class="proj-name"><span class="arrow">▸</span>${esc(p.name)}/</span>${fork}<span class="proj-tags-inline">${tagsInline}</span></span>` +
      `<span class="proj-meta"><span class="status ${p.status}"><span class="dot"></span>${p.status}</span><span>${(p.commits || 0)} commits</span><span>upd ${esc(p.updated)}</span></span>`;
    const body = el("div", "proj-body");
    const link = p.url
      ? `<a class="proj-link" href="${esc(p.url)}" target="_blank" rel="noopener">→ open on github</a>`
      : `<span class="proj-link disabled">○ private / local</span>`;
    const allTags = p.tags.map(t => `<span class="chip">${esc(t)}</span>`).join("");
    body.innerHTML =
      `<div class="proj-body-inner"><p class="proj-blurb">${esc(p.blurb)}</p>` +
      `<div class="proj-foot"><div class="proj-tags">${allTags}</div>${link}</div></div>`;
    head.onclick = () => wrap.classList.toggle("open");
    wrap.appendChild(head); wrap.appendChild(body);
    return wrap;
  }

  function renderProjects() {
    const list = $("#projects-list");
    list.innerHTML = "";
    const items = Q.projects.filter(p => activeFilter === "all" || p.group === activeFilter);
    items.forEach(p => list.appendChild(projRow(p)));
    observeReveals();
  }

  /* ---------- homebrew ---------- */
  function renderHomebrew() {
    const grid = $("#homebrewGrid");
    Q.homebrew.forEach(h => {
      const c = el("div", "hb reveal");
      c.innerHTML = `<span class="hb-tag">${esc(h.tag)}</span><h4>${esc(h.platform)}</h4><p>${esc(h.blurb)}</p>`;
      grid.appendChild(c);
    });
  }

  /* ---------- engineering ---------- */
  function renderEngineering() {
    const wrap = $("#engLog");
    Q.engineering.forEach(area => {
      const c = el("div", "eng-area reveal");
      const items = area.entries.map(e => `<li>${esc(e)}</li>`).join("");
      c.innerHTML = `<h4><span class="ic">${area.icon || "▹"}</span>${esc(area.area)}</h4><ul>${items}</ul>`;
      wrap.appendChild(c);
    });
  }

  /* ---------- contact ---------- */
  function renderContact() {
    const c = $("#contactCard");
    const p = Q.profile;
    c.innerHTML =
      `<div class="row"><span class="k">github</span><a href="${esc(p.github)}" target="_blank" rel="noopener">${esc(p.github.replace('https://', ''))}</a></div>` +
      (p.linkedin ? `<div class="row"><span class="k">linkedin</span><a href="${esc(p.linkedin)}" target="_blank" rel="noopener">${esc(p.linkedin.replace('https://www.', '').replace(/\/$/, ''))}</a></div>` : "") +
      `<div class="row"><span class="k">email</span><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></div>` +
      `<div class="row"><span class="k">location</span><span>${esc(p.location)}</span></div>` +
      `<div class="row"><span class="k">status</span><span style="color:var(--green)">● open to interesting problems</span></div>`;
    $("#footerLine").textContent = `© ${p.brand} · ${p.name} · built in the terminal`;
    document.title = `${p.brand} — ${p.name}`;
  }

  /* ---------- scroll reveal + bar fill ---------- */
  let io;
  function observeReveals() {
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
    }
    document.querySelectorAll(".reveal:not(.in)").forEach(n => io.observe(n));
  }
  function fillBars() {
    const bio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.width = e.target.dataset.w + "%"; bio.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll(".bar i").forEach(b => bio.observe(b));
  }

  /* ---------- nav active state ---------- */
  function navSpy() {
    const links = [...document.querySelectorAll(".nav a")];
    const secs = links.map(a => $(a.getAttribute("href")));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = "#" + e.target.id;
          links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    secs.forEach(s => s && spy.observe(s));
  }

  /* ---------- CRT toggle ---------- */
  function crtToggle() {
    const btn = $("#crtToggle");
    btn.onclick = () => {
      document.body.classList.toggle("no-crt");
      btn.textContent = "CRT: " + (document.body.classList.contains("no-crt") ? "OFF" : "ON");
    };
  }

  /* ---------- init ---------- */
  function init() {
    renderStats(); renderAbout(); renderExperience(); renderLangs(); renderSkills();
    renderFilters(); renderProjects(); renderHomebrew(); renderEngineering(); renderContact();
    crtToggle(); navSpy(); fillBars(); observeReveals();
    if (reduce) { bootText.textContent = bootLines.join("\n"); endBoot(); }
    else setTimeout(bootStep, 250);
  }
  document.addEventListener("DOMContentLoaded", init);
})();
