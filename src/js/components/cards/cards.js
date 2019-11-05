const cards = document.querySelectorAll("[data-action='card']");

cards.forEach(card => {
  card.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action='card']")
    el.classList.toggle("--open")
  })
})
