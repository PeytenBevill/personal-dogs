const questions = document.getElementsByClassName("faq-question");

for (const question of questions) {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const arrow = this.querySelector(".arrow");

    answer.classList.toggle("show");
    arrow.textContent = answer.classList.contains("show") ? "▲" : "▼";
  });
}
