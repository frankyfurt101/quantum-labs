/* Quantum Labs — portfolio data. Edit here; the page renders from this object. */
window.QL = {
  profile: {
    brand: "QUANTUM LABS",
    name: "Franky Fernandez",
    handle: "frankyfurt101",
    role: "Full-stack · Systems · Hardware Engineer",
    tagline: "I build software, the systems it runs on, and the bare metal underneath.",
    bio: [
      "Self-taught engineer working top to bottom — from SwiftUI apps and FastAPI backends, " +
      "to multi-agent AI stacks, to the Linux homelab and soldering iron the whole thing sits on.",
      "I run a self-hosted homelab fleet, design and ship AI agent systems, reverse-engineer game " +
      "consoles for the homebrew community, and like understanding a system all the way down to the PCB."
    ],
    github: "https://github.com/frankyfurt101",
    email: "fernandezfranky3@gmail.com",
    location: "Arizona, USA"
  },

  // Language proficiency (0-100 drives the bar width)
  languages: [
    { name: "Python",         level: 92, note: "agents, FastAPI, automation" },
    { name: "Swift / SwiftUI",level: 90, note: "iOS apps, Metal, SwiftData" },
    { name: "C / C++",        level: 82, note: "simulators, console homebrew" },
    { name: "JavaScript / Node", level: 80, note: "Express backends, tooling" },
    { name: "C#",             level: 70, note: "tools & game logic" },
    { name: "PHP",            level: 66, note: "web backends" },
    { name: "Ruby on Rails",  level: 64, note: "full-stack web" },
    { name: "HTML / CSS",     level: 85, note: "front-end" },
    { name: "SQL",            level: 75, note: "Postgres, SQLite" },
    { name: "Bash",           level: 80, note: "ops & glue" }
  ],

  // Skill domains -> tag chips
  skills: [
    { group: "AI & Agent Systems", icon: "◈", items: [
      "Multi-agent orchestration", "LangGraph", "LangChain", "RAG pipelines",
      "Qdrant", "Chroma", "Ollama / local LLMs", "Claude Code skills & subagents",
      "Phoenix observability / tracing", "Model benchmarking", "Agent design & guardrails"
    ]},
    { group: "Systems & Linux", icon: "▮", items: [
      "Linux", "Kali", "Debian", "Raspberry Pi", "Docker", "Portainer",
      "Reverse proxies (NPM / Cloudflare Tunnel)", "Tailscale / WireGuard",
      "DNS & SSL", "Bash scripting", "Self-hosting"
    ]},
    { group: "Hardware & Electronics", icon: "⚙", items: [
      "Soldering", "Microprocessors", "PCB architecture", "Embedded systems",
      "Single-board computers", "Hardware bring-up"
    ]},
    { group: "Homelab & Infra", icon: "▦", items: [
      "NAS administration", "Media automation", "Container orchestration",
      "Secret management", "Networking", "SSO / identity"
    ]},
    { group: "Mobile / Apple", icon: "", items: [
      "iOS", "SwiftUI", "SwiftData", "CloudKit", "Metal", "VisionKit",
      "Apple Foundation Models", "Core Data"
    ]},
    { group: "Security & Reverse Engineering", icon: "⊘", items: [
      "Attack-surface reduction", "SSO / MFA hardening", "Request signing (P-256 / Secure Enclave)",
      "Console security research", "Homebrew enablement"
    ]}
  ],

  // Console homebrew & reverse-engineering contributions
  homebrew: [
    { platform: "PlayStation 5", tag: "PS5 · FW 11.60",
      blurb: "Applied a kernel-level exploit chain on firmware 11.60 to enable a homebrew launcher and userland app loader, " +
             "then built and configured a runtime memory-patch (cheat) engine — 24 tables across 8 titles. " +
             "Game-modification and homebrew-community research, fully documented." },
    { platform: "Nintendo Switch", tag: "Switch · CFW",
      blurb: "Reverse-engineered and validated a hardware-modchip (Mariko) custom-firmware setup with an emulated-NAND partition — " +
             "verified ~58 GB NAND structural integrity and produced hardening recommendations (off-device backup, firmware-lock, secure config)." },
    { platform: "PlayStation Portable", tag: "PSP · plugins",
      blurb: "PSP jailbreak & cheat-plugin development — contributions to TempAR, a real-time cheat plugin written in C " +
             "for the PSP homebrew community." },
    { platform: "PlayStation 2", tag: "PS2 · tooling",
      blurb: "PS2 homebrew tooling — contributor to hdl-dump, the toolset for installing and managing homebrew on " +
             "PlayStation 2 hardware." }
  ],

  // Projects (all repos). status: active | maintained | archived. fork: true marks contributions to others' projects.
  projects: [
    // --- active ---
    { name:"DreamWhisper", slug:"dreamwhisper", group:"Active", status:"active",
      blurb:"AI dream journal for iOS — voice-record dreams, get AI summaries, automatic tagging and emotion detection, with reminders to keep the habit.",
      tags:["Swift","SwiftUI","Core Data","Speech","Anthropic / OpenAI"], commits:260, updated:"2026-06-25", started:"2025-09",
      url:"https://github.com/frankyfurt101/DreamWhisper" },
    { name:"gargantua", slug:"gargantua", group:"Active", status:"active",
      blurb:"Real-time galaxy-collision & supermassive-black-hole-merger simulator. Barnes-Hut N-body, post-Newtonian inspiral handoff, and gravitational-lensing ray-marching on Apple Silicon — now porting to a SwiftUI/Metal iOS app.",
      tags:["C++","Metal","Apple Silicon","SwiftUI"], commits:135, updated:"2026-06-28", started:"2026-06",
      url:"https://github.com/frankyfurt101/gargantua" },
    { name:"GLASSBOX", slug:"glassbox", group:"Active", status:"active",
      blurb:"iOS app that makes cryptography glass — hand-rebuilds each algorithm so every intermediate value is visible, tappable, and provably byte-equal to Apple's CryptoKit, then lets on-device AI try to crack it.",
      tags:["Swift","CryptoKit","Security"], commits:10, updated:"2026-06-28", started:"2026-06",
      url:"https://github.com/frankyfurt101/glassbox-256" },
    { name:"LarderKeep", slug:"larderkeep", group:"Active", status:"active",
      blurb:"On-device pantry / fridge / freezer catalog. Barcode scan (VisionKit), eat-by tracking from USDA data, recipe suggestions, and a mounted kitchen-kiosk mode. SwiftData + CloudKit, fully local — no server.",
      tags:["Swift","SwiftData","CloudKit","VisionKit","Foundation Models"], commits:40, updated:"2026-06-28", started:"2026-06",
      url:"https://github.com/frankyfurt101/larderkeep" },
    { name:"Benchwarden", slug:"benchwarden", group:"Active", status:"active",
      blurb:"Offline-first lab & 3D-print inventory for iPhone and iPad with an AI bench co-pilot — drawer-as-unit tracking so you can find any part fast and ask an agent what you can build from what you own.",
      tags:["Swift","SwiftData","CloudKit","AI"], commits:1, updated:"2026-06-28", started:"2026-06",
      url:"https://github.com/frankyfurt101/home-fernance" },
    { name:"Celsora", slug:"celsora", group:"Active", status:"active",
      blurb:"Local-first workforce-management platform foundation — FastAPI backend, React web app, Tauri desktop shell, Docker infra, and an agentic RAG/model layer grounded in curated docs.",
      tags:["Python","FastAPI","React","Tauri","RAG","Docker"], commits:45, updated:"2026-06-18", started:"2026-06",
      url:"https://github.com/frankyfurt101/celsora" },
    { name:"CRUNCH", slug:"crunch", group:"Active", status:"active",
      blurb:"Native iOS game-studio survival tycoon in the spirit of Game Dev Tycoon — start in a 1982 garage and claw to an empire across ~50 in-game years through crunch, console wars, and hostile publishers.",
      tags:["Swift","SwiftUI","GameDev"], commits:6, updated:"2026-06-28", started:"2026-06",
      url:"https://github.com/frankyfurt101/CRUNCH-Studio-Tycoon" },

    // --- AI & agents ---
    { name:"agentic-ai-stack", slug:"agentic-ai-stack", group:"AI & Agents", status:"maintained",
      blurb:"A Claude Code skill plus a tool-scoped subagent team for designing, scaffolding, and executing production multi-agent systems — 8-layer stack design, least-privilege agents, and an optimization mode. Apache-2.0.",
      tags:["Claude Code","Multi-Agent","Python"], commits:4, updated:"2026-06-19", started:"2026-06",
      url:"https://github.com/frankyfurt101/agentic-ai-stack" },
    { name:"homelab-agent-gateway", slug:"homelab-agent-gateway", group:"AI & Agents", status:"maintained",
      blurb:"One authenticated front door for a homelab agent stack, plus the iOS app that drives it. Three security layers: Tailscale transport, P-256 request signing in the Secure Enclave, and a human approval gate for destructive actions.",
      tags:["FastAPI","Python","SwiftUI","Tailscale","Secure Enclave"], commits:17, updated:"2026-06-20", started:"2026-06",
      url:"https://github.com/frankyfurt101/homelab-agent-gateway" },
    { name:"nas-agent-deck", slug:"nas-agent-deck", group:"AI & Agents", status:"maintained",
      blurb:"Agent deck with RAG search over a self-hosted Qdrant vector store — bringing homelab knowledge and operations into a tool-using agent.",
      tags:["Python","Qdrant","RAG"], commits:34, updated:"2026-06-18", started:"2026-06",
      url:"https://github.com/frankyfurt101/nas-agent-deck" },
    { name:"franky-agentic-ai", slug:"franky-agentic-ai", group:"AI & Agents", status:"archived",
      blurb:"Fully-local agentic AI stack — a Supervisor → Researcher → Coder → Reviewer → Memory pipeline built on LangGraph, Ollama, and Chroma, running offline with local tools.",
      tags:["LangGraph","LangChain","Ollama","Chroma"], commits:1, updated:"2026-05-21", started:"2026-05",
      url:null },
    { name:"aas-e2e-test", slug:"aas-e2e-test", group:"AI & Agents", status:"archived",
      blurb:"End-to-end test harness validating the agentic-ai-stack subagent team's workflow.",
      tags:["Python","pytest"], commits:2, updated:"2026-06-16", started:"2026-06",
      url:null },

    // --- apps & web ---
    { name:"Watchtime Analyzer", slug:"watchtime", group:"Apps & Web", status:"maintained",
      blurb:"Glitch-themed SwiftUI iPhone app that streams huge YouTube watch-history files (50k+ videos in seconds) and visualizes your top creators and viewing habits, backed by a Node.js API auto-deployed on Render.",
      tags:["SwiftUI","Swift Charts","Node.js","Render"], commits:46, updated:"2025-04-26", started:"2025-04",
      url:"https://github.com/frankyfurt101/watchtime-api" },
    { name:"WatchtimeRunner", slug:"watchtime-runner", group:"Apps & Web", status:"archived",
      blurb:"Companion runner for the Watchtime pipeline — a focused SwiftUI utility.",
      tags:["Swift","SwiftUI"], commits:2, updated:"2025-04-26", started:"2025-04",
      url:"https://github.com/frankyfurt101/WatchtimeRunner" },
    { name:"TikTok Viewer App", slug:"tiktok-viewer", group:"Apps & Web", status:"archived",
      blurb:"Data-science iPhone app prototype for viewing and analyzing feed data.",
      tags:["JavaScript","iOS"], commits:1, updated:"2025-06-13", started:"2025-06",
      url:"https://github.com/frankyfurt101/User-APP-Test" },
    { name:"dream-api", slug:"dream-api", group:"Apps & Web", status:"active",
      blurb:"Node.js / Express backend powering DreamWhisper — PostgreSQL via Prisma, social and runtime policy enforcement, and canonical storage for client-generated AI outputs.",
      tags:["Node.js","Express","PostgreSQL","Prisma"], commits:203, updated:"2026-06-25", started:"2025-09",
      url:"https://github.com/frankyfurt101/dream-api" },
    { name:"portfolio-website", slug:"portfolio-website", group:"Apps & Web", status:"archived",
      blurb:"An earlier personal portfolio site.",
      tags:["HTML","CSS"], commits:10, updated:"2025-04-26", started:"2025-04",
      url:"https://github.com/frankyfurt101/franky-portfolio" },

    // --- homebrew / contributions (forks) ---
    { name:"hdl-dump", slug:"hdl-dump", group:"Homebrew & Contributions", status:"maintained", fork:true,
      blurb:"PS2 HDD homebrew tooling (hdl_dump / hdl_dumb) — install and manage homebrew on PlayStation 2 hard drives. Contributions to the ps2homebrew project.",
      tags:["C","PS2","Homebrew"], commits:139, updated:"2024-06", started:"2013",
      url:"https://github.com/ps2homebrew/hdl-dump" },
    { name:"TempAR", slug:"tempar", group:"Homebrew & Contributions", status:"maintained", fork:true,
      blurb:"PSP cheat plugin (TempAR) — a real-time cheat device for the PlayStation Portable homebrew scene, written in C.",
      tags:["C","PSP","Plugins"], commits:9, updated:"2022-10", started:"2017",
      url:"https://github.com/raing3/tempar" },
    { name:"wfm-automation-registry", slug:"wfm-registry", group:"Homebrew & Contributions", status:"maintained", fork:true,
      blurb:"Professional automation-project registry built around a 6-agent intelligent-review system and a Claude Code OS V2 structure.",
      tags:["Claude Code","Automation","Agents"], commits:7, updated:"2026-05", started:"2026-04",
      url:null }
  ],

  // Engineering log — real homelab / AI / security work, high level, no secrets.
  engineering: [
    { area:"Homelab & Infrastructure", icon:"▦", entries:[
      "Architected and operate a 9+ node self-hosted homelab — bare-metal Linux servers, two NAS units, and a Raspberry Pi fleet under unified remote management.",
      "Manage 30+ containerized service stacks across three Docker environments, deployed via API / infrastructure-as-code with secrets injected as managed env vars — never plaintext on disk.",
      "Reclaimed 9.78 TB of storage by root-causing silent hardlink failures (cross-device bind mounts forcing copy-mode) and deduplicating 7,806 redundant files — cut one volume from ~28 TB to ~1.8 TB.",
      "Wrote a Python reconciliation script that cross-references the download client against the media databases to safely classify and clear 3,180 stalled torrents (~29 TB).",
      "Designed a two-tier hot/cold storage architecture over a dedicated 10GbE backend with a verified tar-pipe migration workflow: transfer → byte/file-count verify → database path update → source delete.",
      "Reorganized a 1.9 TB / ~61,700-file / 3,545-artist music library to 99% correctness, backed by an rsync-verified, special-character-safe backup proven zero files missing.",
      "Stood up zero-port-forward public access using encrypted tunnels, a reverse proxy, and wildcard TLS via DNS challenge — no inbound router ports.",
      "Deployed a self-hosted mail server with full SPF / DKIM / DMARC deliverability, reachable only over private overlay networking.",
      "Run a status dashboard plus Prometheus / Grafana / uptime monitoring across the whole fleet."
    ]},
    { area:"AI & Agent Systems", icon:"◈", entries:[
      "Built a GPU-accelerated local-LLM inference server (Ollama on a 6 GB GPU), reachable only across a private mesh and isolated from the public internet.",
      "Ran a 5-model GGUF benchmark and surfaced a concrete engineering insight — on a small GPU, Mixture-of-Experts active-parameter count beats total model size — selecting a 35B-A3B winner at ~30.7 tok/s.",
      "Designed a multi-agent orchestration system (~9–11 specialized agents) with a supervisor approval gate for destructive actions and deliberate capability isolation (only one agent reaches the web, only one may SSH between hosts).",
      "Published an open-source, Apache-2.0 agentic-AI-stack framework — orchestrator + specialist agents, guardrails, deterministic tool-calls, and held-out evaluation.",
      "Built a FastAPI Agent API Gateway — a single authenticated front door with a frozen request-signing contract, replay / nonce protection, and 30+ passing security tests.",
      "Built a RAG pipeline on a self-hosted vector database with a cron-refreshed indexer over personal docs and memory, and instrumented every LLM call with OpenTelemetry tracing."
    ]},
    { area:"Security & Identity", icon:"⊘", entries:[
      "Run self-hosted SSO (OIDC / OAuth2 + forward-auth) for ~9 applications, fronted by passkey / WebAuthn MFA.",
      "Led a security hardening review and fixed 14 of 16 findings — MFA enforcement, brute-force lockout, tightened OAuth redirects, shorter token / session lifetimes, strong password policy, removed a Docker-socket mount, disabled user enumeration.",
      "Reduced public-facing attack surface from 11 hosts to 3, pulling all admin and internal apps onto a private mesh VPN with tailnet-only HTTPS.",
      "Implemented device-bound request signing with iOS Secure Enclave ECDSA P-256 keys and timestamp + nonce replay rejection — a 3-layer model: mesh transport → signature chokepoint → human gate.",
      "Enforced least-privilege networking — nftables allowlists around the GPU inference ports, key-only SSH across the fleet, admin ports bound to loopback — and disciplined, vaulted secret rotation."
    ]},
    { area:"Hardware & Electronics", icon:"⚙", entries:[
      "Built and maintain a bare-metal GPU compute server (consumer GPU + CUDA toolchain) as the lab's local-AI workhorse.",
      "Operate a Raspberry Pi fleet (Pi 5 + Pi 4), including a Pi 5 driving a physical LCD enclosure as an always-on agent status display.",
      "Board-level console hardware modification — soldered modchip work — plus NAND / firmware-integrity verification.",
      "Use out-of-band hardware KVM for headless recovery and console access to bare-metal hosts."
    ]}
  ]
};
