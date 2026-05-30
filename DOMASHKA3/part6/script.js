const containers = document.querySelectorAll(".btn-container");

containers.forEach((container) => {
  const tooltip = container.querySelector(".tooltip");
  const button = container.querySelector("button");

  container.addEventListener("mouseenter", () => {
    const rect = button.getBoundingClientRect();

    const tooltipHeight = 40;

    if (rect.top < tooltipHeight) {
      tooltip.classList.remove("position-top");
      tooltip.classList.add("position-bottom");
    } else {
      tooltip.classList.remove("position-bottom");
      tooltip.classList.add("position-top");
    }
  });
});
