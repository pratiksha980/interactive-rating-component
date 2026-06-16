const ratingBtn = document.querySelectorAll(".no");
const submitBtn = document.querySelector(".submit-btn");
const ratingCard = document.querySelector(".rating-container");
const thankYouCard = document.querySelector(".thankyou-container");
const ratingText = document.querySelector(".rating");
let chosenRating = null;
ratingBtn.forEach((button) => {
  button.addEventListener("click", () => {
    ratingBtn.forEach((btn) => {
      btn.classList.remove("selected");
    });
    button.classList.add("selected");
    chosenRating = button.innerText;
  });
});
submitBtn.addEventListener("click", () => {
  if (chosenRating !== null) {
    ratingText.innerText = chosenRating;
    ratingCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");
  } else {
    alert("please select rating before submitting");
  }
});
