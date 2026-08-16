(function () {
  const games = window.ApriTouchGames || window.games || [];
  const i18n = window.ApriTouchI18n;
  const basePath = document.body ? document.body.dataset.base || "" : "";

  function currentLanguage() {
    return i18n ? i18n.getLanguage() : "en";
  }

  function translate(key, vars) {
    return i18n ? i18n.t(key, vars) : key;
  }

  function resolveUrl(url) {
    if (!url || url === "#") return "#";
    if (/^(https?:|mailto:|tel:|#)/i.test(url)) return url;
    return `${basePath}${url}`;
  }

  function localizeUrl(url) {
    return i18n ? i18n.localizeUrl(url, currentLanguage()) : url;
  }

  function escapeHtml(value) {
    if (i18n) return i18n.escapeHtml(value);
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function gameText(game, field) {
    const language = currentLanguage();
    return game.i18n?.[language]?.[field] || game.i18n?.en?.[field] || game[field] || "";
  }

  function renderStoreLinks(game, className) {
    const classes = className ? ` ${className}` : "";
    const links = [];

    if (game.googlePlayUrl && game.googlePlayUrl !== "#") {
      links.push(`<a class="btn btn-store${classes}" href="${resolveUrl(game.googlePlayUrl)}">${escapeHtml(translate("common.googlePlay"))}</a>`);
    }

    if (game.appStoreUrl && game.appStoreUrl !== "#") {
      links.push(`<a class="btn btn-store${classes}" href="${resolveUrl(game.appStoreUrl)}">${escapeHtml(translate("common.appStore"))}</a>`);
    }

    return links.join("");
  }

  function renderGameCards() {
    document.querySelectorAll("[data-games-grid]").forEach((grid) => {
      grid.innerHTML = games.map((game) => {
        const pageUrl = localizeUrl(resolveUrl(game.pageUrl));
        return `
          <article class="game-card">
            <a class="game-card__media" href="${pageUrl}" aria-label="${escapeHtml(translate("common.learnMoreAbout", { name: game.name }))}">
              <img class="game-card__logo" src="${resolveUrl(game.logo)}" alt="${escapeHtml(game.name)} logo" loading="lazy">
              <img class="game-card__icon" src="${resolveUrl(game.icon)}" alt="" aria-hidden="true" loading="lazy">
            </a>
            <div class="game-card__body">
              <div class="game-card__eyebrow">${escapeHtml(translate(`common.${game.status}`))}</div>
              <h3>${escapeHtml(game.name)}</h3>
              <p class="game-card__tagline">${escapeHtml(gameText(game, "tagline"))}</p>
              <p>${escapeHtml(gameText(game, "description"))}</p>
              <div class="button-row">
                ${renderStoreLinks(game)}
                <a class="btn btn-secondary" href="${pageUrl}">${escapeHtml(translate("common.learnMore"))}</a>
              </div>
            </div>
          </article>
        `;
      }).join("");
    });
  }

  function renderGameLists() {
    document.querySelectorAll("[data-games-list]").forEach((list) => {
      list.innerHTML = games.map((game) => `
        <li>
          <a href="${localizeUrl(resolveUrl(game.pageUrl))}">
            <img src="${resolveUrl(game.icon)}" alt="" aria-hidden="true" loading="lazy">
            <span>${escapeHtml(game.name)}</span>
          </a>
        </li>
      `).join("");
    });
  }

  function renderDownloadLinks() {
    document.querySelectorAll("[data-download-links]").forEach((target) => {
      const game = games.find((item) => item.id === target.dataset.downloadLinks);
      if (!game) return;
      target.innerHTML = renderStoreLinks(game, "btn-large");
    });
  }

  function renderGameDetails() {
    document.querySelectorAll("[data-game-title]").forEach((target) => {
      const game = games.find((item) => item.id === target.dataset.gameTitle);
      if (game) target.textContent = game.name;
    });

    document.querySelectorAll("[data-game-tagline]").forEach((target) => {
      const game = games.find((item) => item.id === target.dataset.gameTagline);
      if (game) target.textContent = gameText(game, "tagline");
    });

    document.querySelectorAll("[data-game-description]").forEach((target) => {
      const game = games.find((item) => item.id === target.dataset.gameDescription);
      if (game) target.textContent = gameText(game, "pageDescription");
    });
  }

  function renderGames() {
    renderGameCards();
    renderGameLists();
    renderDownloadLinks();
    renderGameDetails();
  }

  function setupNavigation() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".primary-nav");
    const closeBtn = document.querySelector(".nav-close");

    if (!burger || !nav || !closeBtn) return;

    function closeMenu() {
      nav.classList.remove("active");
      document.body.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
    }

    burger.addEventListener("click", () => {
      nav.classList.add("active");
      document.body.classList.add("nav-open");
      burger.setAttribute("aria-expanded", "true");
    });

    closeBtn.addEventListener("click", closeMenu);

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a, [data-lang-option]")) closeMenu();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderGames();
    setupNavigation();
  });

  window.addEventListener("apritouch:languagechange", renderGames);
})();
