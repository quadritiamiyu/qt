/* Quadri Tiamiyu — Personal Brand Site */

(function () {
  // Project filters
  const filters = document.querySelectorAll(".filters button");
  const projects = document.querySelectorAll(".proj");

  if (filters.length && projects.length) {
    filters.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        filters.forEach((b) => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");

        projects.forEach((proj) => {
          const status = proj.dataset.status;
          if (filter === "all" || status === filter) {
            proj.style.display = "";
          } else {
            proj.style.display = "none";
          }
        });
      });
    });
  }

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      if (expanded) {
        nav.style.display = "none";
      } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "4.5rem";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.background = "var(--bg)";
        nav.style.padding = "1.1rem";
        nav.style.borderBottom = "1px solid var(--border)";
        nav.style.gap = "0.3rem";
        nav.style.boxShadow = "var(--shadow)";
      }
    });
  }

  // Smooth fade-up on scroll
  if ("IntersectionObserver" in window) {
    const elements = document.querySelectorAll(
      ".proof-card, .tool-card, .ai-card, .proj-card, .proj, .focus-item, .contact-card, .hero-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity 0.65s ease ${i % 4 * 0.08}s, transform 0.65s ease ${i % 4 * 0.08}s`;
      observer.observe(el);
    });
  }
})();
