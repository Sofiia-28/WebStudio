(() => {
  const refs = {
    items: document.querySelectorAll(".portfolio-btn"),
    cards: document.querySelectorAll(".portfolio-card-list-item"),
  };

  for (const item of Array.from(refs.items)) {
    item.addEventListener("click", visible);

    function visible(e) {
      Array.from(refs.cards).map((card) => {
        card.style.display = "none";
        if (
          e.currentTarget.textContent ===
          card.children[0].lastElementChild.lastElementChild.textContent
        ) {
          card.style.display = "flex";
        }
      });

      if (e.currentTarget.textContent === "All") {
        Array.from(refs.cards).map((card) => (card.style.display = "flex"));
      }
    }
  }
})();
