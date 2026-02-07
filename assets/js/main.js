(() => {
  const modal = document.querySelector("[data-modal]");
  const openBtn = document.querySelector("[data-open-modal]");

  if (!modal || !openBtn) return;

  function openModal() {
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const first = modal.querySelector("input, textarea, button");
    if (first) first.focus();
  }

  function closeModal() {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    openBtn.focus();
  }

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });

  modal.addEventListener("click", (e) => {
    const closer = e.target.closest("[data-close-modal]");
    if (closer) {
      e.preventDefault();
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  // Placeholder: evita submit se non hai backend
  const form = modal.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      closeModal();
    });
  }
})();
