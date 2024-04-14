const stars = document.querySelectorAll(".rating");
const selectedStarsCount = document.getElementById("selected-rating-count");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");

submitButton.addEventListener("click", () => {
  const rating = parseInt(selectedStarsCount.textContent);
  setTimeout(() => {
    result.classList.remove("result");
    document.querySelector(".article").classList.add("result");
  });
});

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.textContent);
    selectedStarsCount.textContent = rating;

    setTimeout(() => {
      stars.forEach((s) => {});
    });
  });
});
