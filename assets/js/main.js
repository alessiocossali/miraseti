(() => {
  const modal = document.getElementById("contactModal");
  const openBtn = document.querySelector("[data-open-modal]");
  const closeEls = document.querySelectorAll("[data-close-modal]");
  const form = document.getElementById("contactForm");

  const COMPANY_EMAIL = "info@miraseti.com";
  const SUBJECT = "Richiesta contatto dal sito miraseti.com";

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    const first = modal.querySelector("input");
    if (first) first.focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (openBtn) openBtn.addEventListener("click", openModal);
  closeEls.forEach(el => el.addEventListener("click", closeModal));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const email = String(data.get("email") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const name = String(data.get("name") || "").trim();

      const body =
        `Richiesta contatto dal sito\n\n` +
        (name ? `Nome: ${name}\n` : "") +
        `Email: ${email}\n` +
        `Telefono: ${phone}\n`;

      const mailto =
        `mailto:${encodeURIComponent(COMPANY_EMAIL)}` +
        `?subject=${encodeURIComponent(SUBJECT)}` +
        `&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
      closeModal();
      form.reset();
    });
  }
})();