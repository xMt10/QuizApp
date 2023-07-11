const quizData = [
  {
    question: "What is the capital of Türkiye",
    a: "Ankara",
    b: "Washington",
    c: "Berlin",
    d: "Moscow",
    correct: "a",
  },
  {
    question: "What is the capital of the USA",
    a: "Ankara",
    b: "Washington",
    c: "Berlin",
    d: "Moscow",
    correct: "b",
  },
  {
    question: "What is the capital of Germany",
    a: "Ankara",
    b: "Washington",
    c: "Berlin",
    d: "Moscow",
    correct: "c",
  },
  {
    question: "What is the capital of Russia",
    a: "Ankara",
    b: "Washington",
    c: "Berlin",
    d: "Moscow",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  notSelected();

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function notSelected() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2> Test completed , You got ${score * 25} points 🥳 </h2>
      <button class="submit" onclick = "location.reload()">Try Again 🔙 </button>  
      `;
    }
  }
  //console.log(answer);
});
