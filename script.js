// TARGETS
const ratings = document.querySelectorAll(".rating")
const submitBtn = document.getElementById("submit")
const feedbackCard = document.querySelector(".feedbackCard");
const returnCard = document.querySelector(".returnCard");
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
        feedbackCard.style.display = "none";
        returnCard.style.display = "flex";
        returnCard.innerHTML = `
             <div class="returnValue">You have selected ${score} out of 5</div>
                <h2>Thank You!</h2>
                <p class="align-center">We appriciate you taking the time to give a rating. If you ever need more support, don't hasitate to get in
            touch!</p>
            `
    }

});

