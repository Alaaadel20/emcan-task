const initSlider = () => {
  const cardList = document.querySelector(".courses-container");
  const slideButtons = document.querySelectorAll(".slide-btn");

  // Slide cards according to the slide button clicks
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = cardList.clientWidth * direction;
      cardList.scrollBy({ scrollAmount, behavior: "smooth" });
      console.log(999);
      console.log(cardList);
    });
  });
};
window.addEventListener("load", initSlider);
