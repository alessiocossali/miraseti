
console.log("main.js caricato");// assets/js/main.js
(() => {
  const MODAL_HTML = `
    <div class="modal" data-modal hidden aria-hidden="true">
      <div class="modal__backdrop" data-close-modal></div>

      <div class="modal__panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button class="modal__close" type="button" aria-label="Chiudi" data-close-modal>×</button>

        <h2 id="modalTitle" class="modal__title">Richiedi un campione</h2>

        <form class="modal__form" action="/richiedi-campione" method="post">
          <label class="field">
            <span class="field__label">Nome *</span>
            <input class="field__input" type="text" name="name" required autocomplete="name" />
          </label>

          <label class="field">
            <span class="field__label">Email *</span>
            <input class="field__input" type="email" name="email" required autocomplete="email" />
          </label>

          <!-- CAMPO TESTO LIBERO (OPZIONALE) -->
          <label class="field">
            <span class="field__label">Note (opzionali)</span>
            <textarea
              class="field__textarea"
              name="notes"
              rows="4"
              placeholder="Inserisci eventuali note, richieste particolari o informazioni utili"></textarea>
          </label>

          <button class="btn" type="submit">Invia richiesta</button>
        </form>
      </div>
    </div>
  `;

  let modalEl = null;

  function ensureModal() {
    if (modalEl) return modalEl;

    document.body.insertAdjacentHTML("beforeend", MODAL_HTML);
    modalEl = document.querySelector("[data-modal]");
    return modalEl;
  }

  function openModal() {
    const m = ensureModal();
    m.hidden = false;
    m.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // focus sul primo input
    const first = m.querySelector('input, textarea, button');
    if (first) first.focus();
  }

  function closeModal() {
    if (!modalEl) return;
    modalEl.hidden = true;
    modalEl.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function wireEvents() {
    document.addEventListener("click", (e) => {
      const open = e.target.closest("[data-open-modal]");
      if (open) {
        e.preventDefault();
        openModal();
        return;
      }

      const close = e.target.closest("[data-close-modal]");
      if (close) {
        e.preventDefault();
        closeModal();
        return;
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireEvents);
  } else {
    wireEvents();
  }
})();
