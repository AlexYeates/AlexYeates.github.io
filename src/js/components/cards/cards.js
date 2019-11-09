const cards = document.querySelectorAll("[data-action='card']");

cards.forEach(card => {
  card.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action='card']");
    [...document.querySelectorAll("[data-action='card']")].filter(e => e !== el).forEach(e => e.classList.remove("--open"));
    el.classList.toggle("--open");
  })
})
