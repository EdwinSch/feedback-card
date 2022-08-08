// TARGETS
const ratings = document.querySelectorAll(".rating")
const submitBtn = document.getElementById("submit")
const feedbackCard = document.querySelector(".feedbackCard");
const returnCard = document.querySelector(".returnCard");
const returnValue = document.querySelector(".returnValue");
let score = null;

// FUNCTIONS

for (i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', function () {
        ratings.forEach(element => element.classList.remove("selectedRating"));
        this.classList.add("selectedRating")
        score = this.innerHTML;

    })
};

submitBtn.addEventListener("click", function () {
    if (score === null) {
        ratings.forEach(element => element.classList.add("errorRating"));
        setTimeout(() => {
            ratings.forEach(element => element.classList.remove("errorRating"));
        }, 500);

    } else {
        feedbackCard.classList.add("hide");
        returnCard.classList.remove("hide");
        returnValue.innerHTML = `You have selected ${score} out of 5`
    }

});

