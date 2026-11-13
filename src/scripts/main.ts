/* global interactions shared by every page */

const root = document.documentElement;
const THEME_KEY = "lh-theme";

function applyTheme(theme: "dark" | "light") {
  root.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* private mode */
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "light" ? "#f2ecdf" : "#090c10");
  document.querySelectorAll<HTMLButtonElement>("#theme-toggle").forEach((btn) => {
    btn.setAttribute("aria-label", theme === "light" ? "切换到深色主题" : "切换到浅色主题");
  });
}

document.querySelectorAll<HTMLButtonElement>("#theme-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "light" ? "dark" : "light");
  });
});

applyTheme((root.dataset.theme as "dark" | "light") || "dark");

/* mobile navigation */
const mobileToggle = document.querySelector<HTMLButtonElement>("#mobile-toggle");
const mobileNav = document.querySelector<HTMLElement>("#mobile-nav");

function closeMobileNav() {
  if (!mobileNav || !mobileToggle) return;
  mobileNav.classList.remove("is-open");
  mobileToggle.setAttribute("aria-expanded", "false");
  mobileToggle.setAttribute("aria-label", "打开菜单");
}

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("is-open");
    mobileToggle.setAttribute("aria-expanded", String(open));
    mobileToggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
  });

  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileNav));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) closeMobileNav();
  });
}

/* safe external links */
document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]').forEach((link) => {
  if (link.origin !== window.location.origin) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});

/* reveal on scroll */
const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
if ("IntersectionObserver" in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px 100px 0px", threshold: 0.01 },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* toc active state */
const tocLinks = [...document.querySelectorAll<HTMLAnchorElement>(".toc a[href^='#']")];
if (tocLinks.length && "IntersectionObserver" in window) {
  const targets = tocLinks
    .map((link) => document.querySelector<HTMLElement>(link.getAttribute("href") || ""))
    .filter((el): el is HTMLElement => Boolean(el));

  const tocObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;
      const id = visible[0].target.id;
      tocLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    },
    { rootMargin: "-18% 0px -65% 0px", threshold: [0, 1] },
  );

  targets.forEach((target) => tocObserver.observe(target));
}

/* header shadow */
const header = document.querySelector<HTMLElement>(".site-header");
if (header) {
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 8 ? "0 10px 30px rgba(0,0,0,.2)" : "none";
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- video lightbox ---------- */

const videoDialog = document.getElementById("video-dialog") as HTMLDialogElement | null;
const videoFrame = videoDialog?.querySelector<HTMLElement>("[data-video-frame]");
const videoTitle = videoDialog?.querySelector<HTMLElement>("[data-video-title]");
const videoLink = videoDialog?.querySelector<HTMLAnchorElement>("[data-video-link]");
let lastVideoTrigger: HTMLElement | null = null;

function closeVideo() {
  if (!videoDialog) return;
  videoDialog.close();
  if (videoFrame) videoFrame.innerHTML = "";
  if (lastVideoTrigger) {
    lastVideoTrigger.focus();
    lastVideoTrigger = null;
  }
}

document.querySelectorAll<HTMLElement>("[data-video-id]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    const id = trigger.dataset.videoId;
    if (!id || !videoDialog || !videoFrame || typeof videoDialog.showModal !== "function") {
      return;
    }
    event.preventDefault();
    lastVideoTrigger = trigger;
    const title = trigger.dataset.videoTitle || "视频";
    if (videoTitle) videoTitle.textContent = title;
    if (videoLink) videoLink.href = `https://www.youtube.com/watch?v=${id}`;
    videoFrame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${title.replace(/"/g, "&quot;")}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    videoDialog.showModal();
  });
});

videoDialog?.querySelector("[data-video-close]")?.addEventListener("click", closeVideo);
videoDialog?.addEventListener("click", (event) => {
  if (event.target === videoDialog) closeVideo();
});
videoDialog?.addEventListener("close", () => {
  if (videoFrame) videoFrame.innerHTML = "";
});

/* ---------- generic filter system ---------- */

document.querySelectorAll<HTMLElement>("[data-filter-root]").forEach((filterRoot) => {
  const buttons = [...filterRoot.querySelectorAll<HTMLButtonElement>("[data-filter]")];
  const cards = [...filterRoot.querySelectorAll<HTMLElement>("[data-filter-item]")];
  const count = filterRoot.querySelector<HTMLElement>("[data-filter-count]");
  const empty = filterRoot.querySelector<HTMLElement>("[data-filter-empty]");
  const active = new Map<string, string>();

  buttons.forEach((button) => {
    if (button.classList.contains("is-active") && button.dataset.filterValue !== "all") {
      active.set(button.dataset.filterKey || "all", button.dataset.filterValue || "");
    }
  });

  function apply() {
    let visible = 0;
    cards.forEach((card) => {
      const show = [...active.entries()].every(([key, value]) => {
        const cardValue = card.dataset[key] || "";
        return cardValue.split(/\s+/).includes(value);
      });
      card.hidden = !show;
      card.dataset.filterHidden = String(!show);
      if (show) visible += 1;
    });
    if (count) count.textContent = `${visible} / ${cards.length}`;
    if (empty) empty.hidden = visible !== 0;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.filterKey || "all";
      const value = button.dataset.filterValue || "all";
      if (value === "all") active.delete(key);
      else active.set(key, value);
      buttons
        .filter((b) => (b.dataset.filterKey || "all") === key)
        .forEach((b) => b.classList.toggle("is-active", b === button));
      apply();
    });
  });

  apply();
});

/* ---------- roadmap progress ---------- */

const PROGRESS_KEY = "lh-roadmap-progress";
const checks = [...document.querySelectorAll<HTMLInputElement>("input[data-check]")];
if (checks.length) {
  let saved: Record<string, boolean> = {};
  try {
    saved = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
  } catch {
    saved = {};
  }

  const fill = document.querySelector<HTMLElement>("[data-progress-fill]");
  const text = document.querySelector<HTMLElement>("[data-progress-text]");
  const pct = document.querySelector<HTMLElement>("[data-progress-pct]");

  function persist() {
    const state: Record<string, boolean> = {};
    checks.forEach((check) => {
      if (check.checked) state[check.dataset.check || check.id] = true;
    });
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }

  function update() {
    const done = checks.filter((check) => check.checked).length;
    const percent = Math.round((done / checks.length) * 100);
    if (fill) fill.style.width = `${percent}%`;
    if (text) text.textContent = `${done} / ${checks.length} 项完成`;
    if (pct) pct.textContent = `${percent}%`;

    document.querySelectorAll<HTMLElement>("[data-phase-count]").forEach((el) => {
      const phase = el.dataset.phaseCount;
      const phaseChecks = checks.filter((check) => (check.dataset.check || "").startsWith(`${phase}-`));
      const phaseDone = phaseChecks.filter((check) => check.checked).length;
      el.textContent = `${phaseDone}/${phaseChecks.length}`;
    });
  }

  checks.forEach((check) => {
    const key = check.dataset.check || check.id;
    if (key && saved[key]) check.checked = true;
    check.addEventListener("change", () => {
      update();
      persist();
    });
  });

  document.querySelectorAll<HTMLButtonElement>("[data-progress-reset]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!window.confirm("清空所有路线图进度？")) return;
      checks.forEach((check) => (check.checked = false));
      try {
        localStorage.removeItem(PROGRESS_KEY);
      } catch {
        /* ignore */
      }
      update();
    });
  });

  update();
}

/* keyboard: g then h to go home, / to focus first search */
let gPressed = false;
document.addEventListener("keydown", (event) => {
  const target = event.target as HTMLElement;
  if (target.matches("input, textarea, select, [contenteditable='true']")) return;
  if (event.key === "g") {
    gPressed = true;
    setTimeout(() => (gPressed = false), 600);
  } else if (gPressed && event.key === "h") {
    window.location.href = `${import.meta.env.BASE_URL}`;
    gPressed = false;
  } else if (event.key === "/") {
    const search = document.querySelector<HTMLInputElement>("[data-search]");
    if (search) {
      event.preventDefault();
      search.focus();
    }
  }
});
