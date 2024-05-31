document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();
  var categoria = document.getElementById("categoria").value;
  
  if (categoria === "matematicas") {
      window.location.href = "matematicas.html";
  } else if (categoria === "informatica") {
      window.location.href = "informatica.html";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var questions = document.querySelectorAll(".question");
  var scoreElement = document.getElementById("score");
  var score = 0;

  questions.forEach(function(question) {
      var options = question.querySelectorAll("li");
      var answerElement = question.querySelector(".answer");

      options.forEach(function(option) {
          option.addEventListener("click", function() {
              if (option.dataset.answer === "correct") {
                  score++;
                  scoreElement.textContent = "Puntuación: " + score;
                  option.classList.add("correct");
              } else {
                  option.classList.add("incorrect");
              }
              answerElement.style.display = "block";
              options.forEach(function(opt) {
                  opt.style.pointerEvents = "none";
              });
          });
      });
  });
});
