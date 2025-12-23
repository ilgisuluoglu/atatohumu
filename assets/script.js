// Mobil menü
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("[data-nav]");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // linke tıklayınca menüyü kapat
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer yıl
const y = document.getElementById("yil");
if (y) y.textContent = new Date().getFullYear();

// Basit sayaç animasyonu (Ana sayfada varsa)
function animateCount(el, target) {
  const duration = 700;
  const start = 0;
  const startTime = performance.now();

  function tick(now) {
    const p = Math.min((now - startTime) / duration, 1);
    const val = Math.round(start + (target - start) * p);
    el.textContent = val;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

document.querySelectorAll("[data-count]").forEach(el => {
  const target = Number(el.getAttribute("data-count"));
  if (!Number.isNaN(target)) animateCount(el, target);
});

// Demo form: gerçek gönderim yok
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Demo: Form gönderildi gibi yaptık 😄 Gerçek gönderim için Formspree/Google Forms bağlayalım.");
    form.reset();
  });
}
